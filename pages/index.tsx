import Layout from "../sections/Layout";

const Home = () => {
    return (
        <div>
            <Layout>
                <section className="flex flex-col items-center space-y-5 mt-24 px-38">
                    <div className="space-y-6">
                        <div className="flex flex-col space-y-4 lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold capitalize">
                            <span>The blogging platform</span>
                            <span>for developers</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl">
                            Start your developer career
                        </h2>
                    </div>
                    <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-4">
                        Start Your Blog
                    </button>
                </section>
            </Layout>
        </div>
    )
}

export default Home
