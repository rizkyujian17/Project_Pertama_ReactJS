import React from 'react';
import CardRegister from '../components/cardRegister';
import {useState} from 'react';

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '84vh'

};

function Register() {
    const [form,
        setForm] = useState();
    const onFinish = (values) => {
        console.log('Success:', values);
        setForm(values);
    };  
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div style={containerStyle}>
            <CardRegister onFinish={onFinish} onFinishFailed={onFinishFailed} form={form}></CardRegister>
        </div>
    );
}

export default Register;
