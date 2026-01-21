"use client";

import { useState } from "react";
import { insertCommunity } from "./create";

export function CreateComunity() {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        insertCommunity(message);

        setMessage('');
    };

    return <>
        <form onSubmit={handleSubmit}>
            <input value={message} draggable={false} onChange={(e) => setMessage(e.target.value)} />
        </form>
    </>;
}

