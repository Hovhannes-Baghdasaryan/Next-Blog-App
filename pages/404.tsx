import React from 'react';
import Link from "next/link";
import Layout from "../sections/Layout";

const NotFoundPage = () => (
    <Layout>
        <div className="py-16 px-52 flex flex-col space-y-10">
            <div className="text-center space-y-2 w-full">
                <h1 className="text-3xl">404 - Page not found</h1>
                <p className="text-xl">We cannot find the page you are looking for.</p>
            </div>

            <Link href={"/"} legacyBehavior>
                <div>
                    <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-4">
                        Go Back Home
                    </button>
                </div>
            </Link>
        </div>
    </Layout>
);


export default NotFoundPage;
