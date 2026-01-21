"use client";

import { useState } from "react";
import { insertChatroom } from "./create";

export type CreateChatroomProps = {
    community_id: string,
};

export function CreateChatroom(props: CreateChatroomProps) {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        insertChatroom(message, props.community_id);

        setMessage('');
    };

    return <>
        <form onSubmit={handleSubmit}>
            <input value={message} draggable={false} onChange={(e) => setMessage(e.target.value)} />
        </form>
    </>;
}

