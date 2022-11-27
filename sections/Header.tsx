import React, {useState} from 'react';
import {useTheme} from "next-themes"

import HeaderLogo from "../components/HeaderLogo";
import {MoonIcon, SunIcon} from "@heroicons/react/solid"

import Button from "../shared/Button";
import FlyoutMenu from "../components/FlyoutMenu";
import {useSession, signIn, signOut} from 'next-auth/react'


const Header = () => {
    const [isHidden, setIsHidden] = useState(true)
    const [isMounted, setIsMounted] = useState(false)

    const {data} = useSession()
    const {systemTheme, theme, setTheme} = useTheme()

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
                <div className="relative">
                    <div className="flex space-x-4 items-center">
                        <RenderThemeChanger/>
                        {!data ? (
                            <Button onClickCallback={() => signIn()} buttonContext={"Sign In"}/>
                        ) : (
                            <img
                                src={data.user?.image || ""}
                                alt={data.user?.name || ""}
                                onClick={() => setIsHidden(!isHidden)}
                                className="rounded-full border-2 border-blue-600 w-8 h-8 cursor-pointer"/>
                        )}
                    </div>
                    <FlyoutMenu userName={data?.user?.name} isMenuHidden={isHidden}/>
                </div>
            </div>
        </header>
    );
};

export default Header;
