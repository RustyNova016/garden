import { LoginLogout } from "@/components/auth/login";
import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren & {
    params: Promise<{ community_id: string; }>;
};

export default async function Layout(props: LayoutProps) {

    return <>
        {props.children}
        <LoginLogout/>
    </>;
}