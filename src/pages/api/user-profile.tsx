// pages/api/createUser.ts
import bcrypt from "bcryptjs";
import { PrismaClient } from "@/generated/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function Register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { username, bio, imageprofile, userId } = req.body;

    try {
      const newProfile = await prisma.profile.create({
        data: {
          username,
          bio,
          imageprofile,
          user: {
            connect: { id: userId }, // Connect the profile to the user
          },
        },
        include: {
          user: true,
        },
      });

      res.status(200).json(newProfile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
