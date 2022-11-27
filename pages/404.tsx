import React from 'react';
import Link from "next/link";
import Layout from "../sections/Layout";
import Button from "../shared/Button";

const NotFoundPage = () => (
    <Layout>
        <div className="py-16 px-52 flex flex-col space-y-10">
            <div className="text-center space-y-2 w-full">
                <h1 className="text-3xl">404 - Page not found</h1>
                <p className="text-xl">We cannot find the page you are looking for.</p>
            </div>

            <Link href={"/"}>
                <div>
                    <Button buttonContext={"Go Back Home"} extraStyle="border-solid border-4 rounded-md"/>
                </div>
            </Link>
        </div>
    </Layout>
);


export default NotFoundPage;
