import { ChatBox } from "@/components/chat/chat_box";
import { getMessages } from "@/components/chat/get_messages";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ community_id: string; chatroom_id: string; }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined; }>;
}) {
  const page_props = await params;
  const messages = await getMessages(page_props.chatroom_id);

  return <>
    <ChatBox init_msgs={messages}></ChatBox>
  </>;
}
