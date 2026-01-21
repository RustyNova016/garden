import Link from "next/link";
import { getCommunities } from "./get_communities";

export type CommunityListProps = {
    communities: Awaited<ReturnType<typeof getCommunities>>;
};

export function CommunityList(props: CommunityListProps) {
    return <>
        {props.communities.map((item, index) => {
            return <p key={index}><Link href={`/chats/${item.id}`}>{item.name}</Link></p>;
        })}
    </>;
}