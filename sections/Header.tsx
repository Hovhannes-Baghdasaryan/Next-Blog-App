import React from 'react';
import {useTheme} from "next-themes"

import HeaderLogo from "../components/HeaderLogo";
import {MoonIcon, SunIcon} from "@heroicons/react/solid"

const Header = () => {
    const {systemTheme, theme, setTheme} = useTheme()

    const RenderThemeChanger = () => {
        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <SunIcon className="w-7 h-7" role="button" onClick={() => setTheme("light")}/>
            )
        }

        return <MoonIcon className="w-7 h-7" role="button" onClick={() => setTheme("dark")}/>
    }

    return (
        <header className="border-b-4 border-gray-100 dark: border-gray-700">
            <div className="mx-auto px-24 py-2 flex justify-between items-center">
                <HeaderLogo/>
                <RenderThemeChanger/>
            </div>
        </header>
    );
};

export default Header;
