"use client";

import { useState } from "react";
import { ChatMessage } from "./chat_box";
import { insertMessage } from "./insert_message";
import { useChatroomContext } from "../hooks/contexts/chatroom_context";

export type ChatInputProps = {
    onSend: (text: ChatMessage) => void;
};

export function ChatInput(props: ChatInputProps) {
    const [message, setMessage] = useState('');
    const chatroom = useChatroomContext();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        props.onSend({
            text: message
        });
        insertMessage(message, chatroom);
        setMessage('');
    };

    return <>
        <form onSubmit={handleSubmit}>
            <input value={message} draggable={false} onChange={(e) => setMessage(e.target.value)} />
        </form>
    </>;
}