import React from "react";
import Button from "../shared/Button";
import {signOut} from "next-auth/react";

export const flyoutMenuOptions = [
    {
        id: "1",
        menuName: <Button onClickCallback={() => signOut()} buttonContext={"Sign out"}/>,
        transitionDuration: 1000,
        translateX: 12,
        roundStyle: "rounded-t",
        border: "border-b"
    },
    {
        id: "2",
        menuName: <span>Hello, ...</span>,
        transitionDuration: 1000,
        translateX: 16,
        roundStyle: "rounded-b"
    }
]
