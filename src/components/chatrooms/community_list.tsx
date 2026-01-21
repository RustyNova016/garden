import Link from "next/link";
import { getChatrooms } from "./get_chatrooms";

export type CommunityListProps = {
    community_id: string,
    chatrooms: Awaited<ReturnType<typeof getChatrooms>>;
};

export function ChatroomList(props: CommunityListProps) {
    return <>
        {props.chatrooms.map((item, index) => {
            return <p key={index}><Link href={`/chats/${props.community_id}/${item.id}`}>{item.name}</Link></p>;
        })}
    </>;
}