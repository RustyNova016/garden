import { ChatroomList } from "@/components/chatrooms/community_list";
import { CreateChatroom } from "@/components/chatrooms/CreateChatroom";
import { getChatrooms } from "@/components/chatrooms/get_chatrooms";

export default async function Page({
    params,
    searchParams,
}: {
    params: Promise<{ community_id: string; }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined; }>;
}) {
    const page_props = await params;
    const chatrooms = await getChatrooms(page_props.community_id);

    return <>
        <h1>Chat rooms</h1>
        <ChatroomList chatrooms={chatrooms} community_id={page_props.community_id} />
        <CreateChatroom community_id={page_props.community_id} />
    </>;
}