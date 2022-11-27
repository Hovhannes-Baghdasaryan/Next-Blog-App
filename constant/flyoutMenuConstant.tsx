import React from "react";
import Button from "../shared/Button";
import {signOut} from "next-auth/react";

export const flyoutMenuOptions = (userName: string | null | undefined) => ([
    {
        id: "1",
        menuName: <Button extraStyle="border-0 rounded-t" onClickCallback={() => signOut()} buttonContext={"Sign out"}/>,
        transitionDuration: 1000,
        translateX: 12,
        roundStyle: "rounded-t",
        border: "border-b"
    },
    {
        id: "2",
        menuName: <span>Hello, {userName?.slice(0, 3)}...</span>,
        transitionDuration: 1000,
        translateX: 16,
        roundStyle: "rounded-b"
    }
])
