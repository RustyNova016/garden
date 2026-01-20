"use client";

import { useState } from "react";
import { ChatMessage } from "./chat_box";

export type ChatInputProps = {
    onSend: (text: ChatMessage) => void;
};

export function ChatInput(props: ChatInputProps) {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        props.onSend({
            text: message
        });
        const response = await fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: message
            }),
        });
        setMessage('');
    };

    return <>
        <form onSubmit={handleSubmit}>
            <input value={message} draggable={false} onChange={(e) => setMessage(e.target.value)} />
        </form>
    </>;
}