import React from 'react';
import Link from 'next/link';
import {TerminalIcon} from "@heroicons/react/solid";

const HeaderLogo = () => (
    <Link href="/" legacyBehavior>
        <a className="flex items-center space-x-3 text-blue-600">
            <TerminalIcon className="w-8 h-8 flex-shrink-0"/>
            <span className="font-bold text-lg tracking-tight whitespace-nowrap">
                Blog for dev
            </span>
        </a>
    </Link>
);

export default HeaderLogo;