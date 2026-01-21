"use client";
import { createContext, PropsWithChildren, useContext } from "react";

export const CommunityContext = createContext<string | undefined>(undefined);

type CommunityContextProviderProps = PropsWithChildren & { community_id: string; };

export function CommunityContextProvider(props: CommunityContextProviderProps) {

    return <>
        <CommunityContext value={props.community_id}>
            {props.children}
        </CommunityContext>
    </>;
}

export function useCommunityContext() {
    const value = useContext(CommunityContext);
    
    if (value === undefined) {
        throw new Error("Missing community context");
    }

    return value;
}