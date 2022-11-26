import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

import Head from "next/head";
import {useRouter} from "next/router";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
    const router = useRouter()

    const {children} = props

    const metaConfig = {
        title: "The Blogging Platform For Developers",
        description: "Start Your Developer Blog, Share ideas, and connect with the dev community!!!",
        type: "website"
    }

    return (
        <>
            <Head>
                <title>{metaConfig.title}</title>
                <meta name="description" content={metaConfig.description}/>
                <link rel="icon" href="/favicon.ico"/>
                <meta property={"og:url"} content={`http://localhost:3000${router.asPath}`}/>
                <meta property={"og:type"} content={metaConfig.type}/>
                <meta property={"og:site_name"} content="Blog for Dev"/>
                <meta property={"og:description"} content={metaConfig.description}/>
                <meta property={"og:title"} content={metaConfig.title}/>
            </Head>

            <div className="min-h-screen flex flex-col">
                <Header/>
                <main className="text-center grow px-4">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default Layout;
