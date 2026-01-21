"use client";
import { createContext, PropsWithChildren, useContext } from "react";

export const ChatroomContext = createContext<string | undefined>(undefined);

type ChatroomContextProviderProps = PropsWithChildren & { chatroom_id: string; };

export function ChatroomContextProvider(props: ChatroomContextProviderProps) {

    return <>
        <ChatroomContext value={props.chatroom_id}>
            {props.children}
        </ChatroomContext>
    </>;
}

export function useChatroomContext() {
    const value = useContext(ChatroomContext);

    if (value === undefined) {
        throw new Error("Missing chatroom context");
    }

    return value;
}