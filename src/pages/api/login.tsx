import bcrypt from "bcryptjs";

import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export default async function Login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const { email, password } = req.body;

    if (email == null || password == null) {
      return res.status(400).json({ error: "missing parameters" });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET || "default_secret",
        { expiresIn: "1h" }
      );
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: " Invalid email or password" });
    }
  } else {
    res.status(405).json({ message: "method mot allowed" });
  }
}
