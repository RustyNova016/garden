import { ChatroomContextProvider } from "@/components/hooks/contexts/chatroom_context";
import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren & {
    params: Promise<{ chatroom_id: string; }>;
};

export default async function Layout(props: LayoutProps) {
    const page_params = await props.params;

    return <>
        <ChatroomContextProvider chatroom_id={page_params.chatroom_id}>
            {props.children}
        </ChatroomContextProvider>
    </>;
}