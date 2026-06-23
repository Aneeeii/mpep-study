import { cookies } from "next/headers";

export async function POST(request: Request): Promise<Response> {
    const cookie = await cookies();
    cookie.delete("doggonaut");
    return new Response(JSON.stringify({message: 'Logout success.'}), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });
}