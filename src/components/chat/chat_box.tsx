"use client";
import { useState } from "react";
import { Message } from "./message";
import { ChatInput } from "./chat_input";

import styles from "./chat.module.css";
import LoginButton from "../login/login_button";
import { SessionProvider } from "next-auth/react";

export type ChatBoxProps = {
    init_msgs: ChatMessage[];
};

export type ChatMessage = {
    text: string;
};

export function ChatBox(props: ChatBoxProps) {
    const [chats, setChats] = useState(props.init_msgs);

    return <>
        <div className={`${styles.chat}`}>
            {chats.map((msg, index) => (
                <Message
                    key={index}
                    message={msg}
                />
            ))}
        </div >
        <SessionProvider><LoginButton /></SessionProvider>
        <ChatInput onSend={(text) => {
            setChats([...chats, text]);
        }} />
    </>;
}