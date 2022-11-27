import React, {useEffect, useState} from 'react';
import Image from "../../shared/Image";
import Text from "../../shared/Text";

import hovPhoto from "../../assets/hovo.jpg";

import {blogItemPropType} from "../../types/departmentType";

import ButtonCustom from "./../../shared/Button"

import AddEmployeeForm from "./AddEmployeeForm";

import {Table} from 'antd';

const employeeTableColumns = [
    {
        title: "Employee Name",
        dataIndex: "EmployeeName"
    }
]

const BlogItem: React.FC<blogItemPropType> = (props) => {
    const {DepartmentName, EmployeeCount, DepartmentId} = props

    const [isShowEmployeeForm, setIsShowEmployeeForm] = useState(false)

    const [isShowEmployee, setIsShowEmployee] = useState(false)

    const onShowEmployeeCallback = () => setIsShowEmployeeForm(!isShowEmployeeForm)


    const fetchEmployees = async () => {
        try {
            const result = await fetch(`http://127.0.0.1:8000/department/${DepartmentId}/employee`, {cache: "force-cache"});

            const finalData = await result.json()
            console.log(finalData)

            return finalData
        } catch (err: any) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (isShowEmployee) {
            console.log("request")
            fetchEmployees()
        }
    }, [isShowEmployee])

    return (
        <div className="border border-gray-600 bg-gray-800 rounded-md flex flex-col items-start p-4 space-y-4">
            {isShowEmployeeForm ? (
                <AddEmployeeForm setIsShowEmployeeForm={setIsShowEmployeeForm} departmentId={DepartmentId}/>
            ) : (
                <>
                    <div className="flex items-center space-x-2">
                        <Image source={hovPhoto.src} imageAlt={"Hovo Picture"}/>
                        <div className="flex flex-col items-start gap-0">
                            <Text text={DepartmentName} extraStyle={{fontFamily: "Sofia Pro", fontSize: 12}}/>
                            <Text text={`Employees ${EmployeeCount}`}
                                  extraStyle={{opacity: 0.3, fontSize: 10, fontFamily: "sans-serif"}}/>
                        </div>
                    </div>
                    <ButtonCustom buttonContext={"Add Employee"} onClickCallback={onShowEmployeeCallback}/>
                    <ButtonCustom buttonContext={`${isShowEmployee ? "Hide Employee" : "Show More"}`}
                                  onClickCallback={() => setIsShowEmployee(!isShowEmployee)}
                                  extraStyle={{backgroundColor: "none", color: "lightblue"}}/>
                    {isShowEmployee &&
                        <Table columns={employeeTableColumns} pagination={false}/>}
                </>
            )}
        </div>
    );
};

export default BlogItem;
