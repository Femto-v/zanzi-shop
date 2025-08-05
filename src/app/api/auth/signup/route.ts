import { hash } from "bcrypt";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name, email, password } = await req.json();

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
        return NextResponse.json(
            { error: "User already exists" },
            { status: 400 }
        );
    }

    const hashedPassword = await hash(password, 12);

    const user = await prisma.user.create({
        data: { name, email, password: hashedPassword },
    });

    return NextResponse.json(
        { message: "User created", user },
        { status: 201 }
    );
}
