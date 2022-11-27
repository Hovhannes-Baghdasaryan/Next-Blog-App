import React from 'react';
import Text from "../shared/Text";
import Title from '../shared/Title';

const LandingPage = () => (
    <div className="space-y-5">
        <div className="flex flex-col space-y-4 lg:text-6xl md:text-5xl sm:text-4xl capitalize">
            <Title title={"The blogging platform"} />
            <Title title={"for developers"} />
        </div>
        <Text text={"Start your developer career"}/>
    </div>
);


export default LandingPage;
