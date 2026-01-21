"use client";

import { SessionProvider } from "next-auth/react";
import LoginButton from "./login_button";

export function LoginLogout() {
    return <>
        <SessionProvider><LoginButton /></SessionProvider>
    </>;
}