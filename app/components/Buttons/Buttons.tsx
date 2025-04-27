"use client";

import React from "react";
import { signOut, signIn, useSession } from "next-auth/react";

//two buttons and a welcome message
const Buttons: React.FC = () => {
    const {data: session} = useSession();
    // console.log("session", session);


    return (
        <div>
            {session?.user?.email ? (
            <div>
            <p>
              Welcome, <strong>{session.user.name || session.user.email}</strong>
            </p>
            <button onClick={() => signOut()}>
              Sign out
            </button>
          </div>
            ) : (
            <button onClick={() => signIn()}>
                Sign in
            </button>
            )}
        </div>
    )
}
export default Buttons;