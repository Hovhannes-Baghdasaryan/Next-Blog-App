import React from 'react';
import Layout from '../../sections/Layout';
import Title from '../../shared/Title';
import Image from "../../shared/Image";

import hovPhoto from "./../../assets/hovo.jpg"

const Index = () => (
    <Layout>
        <article className="py-16 flex flex-col space-y-8">
            <div>
                <Title title={"My Posts"}/>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5">
                <div className="border border-gray-600 bg-gray-800 rounded-md flex flex-col items-start p-4 space-y-4">
                    <Title title={"My Blog"}/>
                    <div>
                        <Image source={hovPhoto.src} imageAlt={"Hovo Picture"}/>
                    </div>
                </div>
                <div className="border border-gray-600 bg-gray-800 rounded-md flex flex-col items-start p-4 space-y-4">
                    <Title title={"My Blog"}/>
                    <div>
                        <Image source={hovPhoto.src} imageAlt={"Hovo Picture"}/>
                    </div>
                </div>
            </div>
        </article>
    </Layout>
);

export default Index;
