// pages/api/createUser.ts
import bcrypt from "bcryptjs";
import { PrismaClient } from "@/generated/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export default async function Register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    const {
      email,
      password,
      how_did_hear,
      username,
      imageprofile,
      bio,
      title,
      content,
    } = req.body;
    if (email == null || password == null) {
      return res.status(400).json({ error: "missing parameters" });
    }

    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: "email is not valid" });
    }

    if (!PASSWORD_REGEX.test(password)) {
      return res.status(400).json({
        error:
          "password invalid (must length 4 - 8 and include 1 number at least)",
      });
    }
    const salt = bcrypt.genSaltSync();
    const hashedpassword = bcrypt.hashSync(password, salt);

    try {
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedpassword,
          how_did_hear,
          profile: {
            create: {
              bio,
              username,
              imageprofile,
            },
          },
          posts: {
            create: {
              title,
              content,
              published: true,
            },
          },
        },
        include: {
          profile: true,
          posts: true,
        },
      });

      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
