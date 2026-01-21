import { CommunityContextProvider } from "@/components/hooks/contexts/community_context";
import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren & {
    params: Promise<{ community_id: string; }>;
};

export default async function Layout(props: LayoutProps) {
    const page_params = await props.params;

    return <>
        <CommunityContextProvider community_id={page_params.community_id}>
            {props.children}
        </CommunityContextProvider>
    </>;
}