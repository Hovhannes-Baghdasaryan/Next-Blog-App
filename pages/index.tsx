import React from "react";
import Layout from "../sections/Layout";
import Button from "../shared/Button";
import LandingPage from "../components/LandingPage";

const Home: React.FC = () => (
    <div>
        <Layout>
            <section className="flex flex-col items-center space-y-5 mt-24 px-38">
                <LandingPage/>
                <Button buttonContext={"Start Your Blog"}/>
            </section>
        </Layout>
    </div>
)

export default Home
