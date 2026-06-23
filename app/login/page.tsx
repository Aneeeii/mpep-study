"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const router = useRouter();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit() {
        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({entered_pw: enteredPassword})
        })

        if (response.ok) {
            router.push('/admin')
        }
        else {
            setError("Login failed.")
        }
    }
    
    return (
        <>
            <input type="password" placeholder="password" value={enteredPassword} onChange={(e) => setEnteredPassword(e.target.value)}/>
            
            {error != '' && (<p>{error}</p>)}

            <button onClick={handleSubmit}>Submit</button>

        </>
    )
}