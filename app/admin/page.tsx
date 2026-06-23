"use client"

import { useRouter } from "next/navigation"

export default function Admin() {
    const router = useRouter();
    async function handleLogout() {
        const response = await fetch('/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
        })

        router.push('/');
    }

    return (
        <>
            <p>Admin page</p>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}