import { cookies } from "next/headers";

export async function POST(request: Request): Promise<Response> {
    const body = await request.json();
    const entered_pw = body.entered_pw;

    if (entered_pw === process.env.ADMIN_PASSWORD) {
        const cookie = await cookies();
        cookie.set("doggonaut", process.env.AUTH_SECRET!, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60
        });

        return new Response(JSON.stringify({message: 'Login success.'}), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    else {
        return new Response(JSON.stringify({ message: 'Login fail.' }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}