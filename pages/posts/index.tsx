import React from 'react';
import Layout from '../../sections/Layout';
import Title from '../../shared/Title';

import BlogItem from "../../components/Blogs/BlogItem";

import {blogItemPropType} from "../../types/departmentType";

import {GetServerSideProps} from 'next';

interface blogPropType {
    data: blogItemPropType[]
}

const Index = (props: blogPropType) => {
    const {data: blogsData} = props;

    return (
        <Layout>
            <article className="py-16 flex flex-col space-y-8">
                <div>
                    <Title title={"My Posts"}/>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-5">
                    {blogsData.map((element) => {
                        const blogItemConfig = {
                            DepartmentId: element.DepartmentId,
                            DepartmentName: element.DepartmentName,
                            EmployeeCount: element.EmployeeCount
                        }

                        return (
                            <BlogItem key={element.DepartmentId} {...blogItemConfig} />
                        );
                    })}
                </div>
            </article>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`http://127.0.0.1:8000/department`)
    const data = await res.json()

    // Pass data to the page via props
    return {props: {data}}
}

export default Index;
