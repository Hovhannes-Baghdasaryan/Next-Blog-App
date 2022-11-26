import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
    const {children} = props

    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="text-center grow px-4">
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
