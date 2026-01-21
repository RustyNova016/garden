import { getCommunities } from "@/components/communities/get_communities";
import { CreateComunity } from "../../components/communities/add_community";
import { CommunityList } from "@/components/communities/community_list";

export default async function Page() {
    const communities = await getCommunities();

    return <>
        <h1>Communities</h1>
        <CommunityList communities={communities} />
        <CreateComunity />
    </>;
}