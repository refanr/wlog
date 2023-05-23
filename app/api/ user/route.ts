import prisma from "@/app/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
    name: string;
    email: string;
    password: string;
}

export async function Post(request:Request) {
    const body:RequestBody = await request.json();

    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: await bcrypt.hash(body.password, 10)
        }
    });

    const { password, ...result } = user;

    return new Response(JSON.stringify(result));
}