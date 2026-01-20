import { ChatBox } from "@/components/chat/chat_box";

export default async function Page() {
    const msgs = await (await fetch("http://localhost:3000/api/chatroom/get_messages")).json();

    return <>
        <ChatBox init_msgs={msgs.messages}></ChatBox >
    </>;
}