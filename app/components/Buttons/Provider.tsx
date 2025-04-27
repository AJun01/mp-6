"use client";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

//provider 
const Provider = (
    {session, children}:SessionProviderProps) => {
    // console.log("session", session);
    return (
        <SessionProvider 
        session={session}>
            {children}
        </SessionProvider>
    )

}

export default Provider