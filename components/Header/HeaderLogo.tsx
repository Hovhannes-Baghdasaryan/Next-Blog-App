import React from 'react';
import Link from 'next/link';
import {TerminalIcon} from "@heroicons/react/solid";
import Text from "../../shared/Text";

const HeaderLogo = () => (
    <Link href="/" legacyBehavior>
        <a className="flex items-center space-x-3 text-blue-600">
            <TerminalIcon className="w-8 h-8 flex-shrink-0"/>
            <Text text={"Blog for dev"} extraStyle={{fontSize: 18, fontFamily: "sans-serif"}} />
        </a>
    </Link>
);

export default HeaderLogo;
