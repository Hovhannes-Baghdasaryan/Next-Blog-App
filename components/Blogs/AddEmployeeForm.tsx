import React, {Dispatch, SetStateAction} from 'react';
import axios from 'axios';
import {Button, Form, Input} from "antd";

interface addEmployeeType {
    EmployeeName: string;
}

const AddEmployeeForm: React.FC<{ departmentId: string | undefined; setIsShowEmployeeForm: Dispatch<SetStateAction<boolean>> }> = (props) => {
    const {departmentId, setIsShowEmployeeForm} = props;

    const employeeValidation = [{required: true, message: "Employee is required"}]

    const onBackCallback = () => setIsShowEmployeeForm(false)

    const buttonExtraStyle = {backgroundColor: "blueviolet"}

    const onEmployeeAddCallback = async (values: addEmployeeType) => {
        try {
            const result = await axios.post(`http://127.0.0.1:8000/department/${departmentId}/employee/create`, values)

            console.log(result)
        } catch (err: any) {
            console.log(err);
        }
    }

    return (
        <Form layout="vertical" onFinish={onEmployeeAddCallback}>
            <Form.Item name="EmployeeName" label="Employee Name" rules={employeeValidation}>
                <Input/>
            </Form.Item>
            <div className="flex justify-between">
                <Button type="primary" style={buttonExtraStyle} htmlType="submit">Submit</Button>
                <Button onClick={onBackCallback} type="primary" style={buttonExtraStyle}>Back</Button>
            </div>
        </Form>
    );
};

export default AddEmployeeForm;
