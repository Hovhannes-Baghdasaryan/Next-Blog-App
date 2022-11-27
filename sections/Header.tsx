import React, {useState} from 'react';
import {useTheme} from "next-themes"

import HeaderLogo from "../components/Header/HeaderLogo";
import {MoonIcon, SunIcon} from "@heroicons/react/solid"

import Button from "../shared/Button";
import FlyoutMenu from "../components/Header/FlyoutMenu";
import {useSession, signIn} from 'next-auth/react'
import Image from "../shared/Image";


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
        <header className="border-b-4 border-gray-100 dark:border-gray-700">
            <div className="lg:px-16 md:px-12 sm:px-4 px-2 py-2 m-0 flex justify-between items-center">
                <HeaderLogo/>
                <div className="relative">
                    <div className="flex space-x-4 items-center">
                        <RenderThemeChanger/>
                        {!data ? (
                            <Button onClickCallback={() => signIn()} buttonContext={"Sign In"}/>
                        ) : (
                            <div  className="cursor-pointer">
                                <Image source={data.user?.image} imageAlt={data.user?.image} onClickCallback={() => setIsHidden(!isHidden)}/>
                            </div>
                        )}
                    </div>
                    <FlyoutMenu userName={data?.user?.name} isMenuHidden={isHidden}/>
                </div>
            </div>
        </header>
    );
};

export default Header;
