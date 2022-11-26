import React from 'react';

import HeaderLogo from "../components/HeaderLogo";

const Header = () => (
    <header className="border-b-4 border-gray-100">
        <div className="mx-auto px-24 py-2">
            <HeaderLogo/>
        </div>
    </header>
);

export default Header;
