import React from 'react';
import {useTheme} from "next-themes"

import HeaderLogo from "../components/HeaderLogo";
import {MoonIcon, SunIcon} from "@heroicons/react/solid"

import Button from "../shared/Button";
import {useSession, signIn, signOut} from 'next-auth/react'

const Header = () => {
    const [isMounted, setIsMounted] = React.useState(false)

    const {systemTheme, theme, setTheme} = useTheme()
    const {data} = useSession()

    console.log(data)

    const RenderThemeChanger = () => {
        if (!isMounted) return <></>

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <SunIcon className="w-7 h-7" role="button" onClick={() => setTheme("light")}/>
            )
        }

        return <MoonIcon className="w-7 h-7" role="button" onClick={() => setTheme("dark")}/>
    }

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <header className="border-b-4 border-gray-100 dark: border-gray-700">
            <div className="mx-auto px-24 py-2 flex justify-between items-center">
                <HeaderLogo/>
                <div className="flex space-x-4 items-center">
                    <RenderThemeChanger/>
                    {!data ? (
                        <Button onClickCallback={() => signIn()} buttonContext={"Sign In"}/>
                    ) : (
                        <>
                            <img src={data.user?.image || ""} alt={data.user?.name || ""}
                                 className="rounded-full border-2 border-blue-600 w-8 h-8"/>
                            <div className="relative space-y-5">
                                <Button onClickCallback={() => signOut()} buttonContext={"Sign Out"}/>
                                <div className="absolute top-50 right-0 bg-blue-700 rounded-md w-full">
                                    <div className="border-b w-full text-center py-1 hover:bg-gray-500 rounded-t-md">
                                        Menu 1
                                    </div>
                                    <div className="border-b w-full text-center py-1 hover:bg-gray-500">
                                        Menu 2
                                    </div>
                                    <div className="w-full text-center py-1 hover:bg-gray-500 rounded-b-md">
                                        Menu 3
                                    </div>
                                </div>
                            </div>

                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
