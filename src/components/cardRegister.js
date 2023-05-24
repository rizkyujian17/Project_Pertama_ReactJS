import React from 'react'
import {Card, Row, Col} from 'antd';
import {Form, Input, Checkbox, Button} from 'antd'
const {Meta} = Card;
function CardRegister({onFinish, onFinishFailed, form}) {

    console.log('hasil data yang terkirim',form)
  return (
    <div>
                  <Row justify="center">
                <Col lg={24} xs={24} xl={24}>

                    <Card bordered={true}>
                        <Row>
                            <Col xl={4} lg={4} xs={0}>
                                <img
                                    src="https://images.unsplash.com/photo-1570206916435-745fc43bb9c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJheSUyMG11c2xpbXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="Pray Image"/>
                            </Col>

                            <Col lg={8} xs={24}  xl={{span:8,offset:12}}>
                              <Meta title="Pendaftaran Pengguna" style={{paddingTop:'20px',paddingBottom:'20px'}}></Meta>
                              <hr></hr>
                                <Form
                                    name="basic"
                                    labelCol={{
                                    span: 8
                                }}
                                    wrapperCol={{
                                    span: 16
                                }}
                                    style={{
                                    maxWidth: 600,
                                    // padding:'20px',
                                }}
                                    initialValues={{
                                    remember: true
                                }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off">
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[{
                                            required: true,
                                            message: 'Please input your username!'
                                        }
                                    ]}>
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label='Email'
                                        name='email'
                                        type= 'email'
                                        rules={[{
                                            required: true,
                                            message: 'Please input your email'
                                        }
                                    ]}>
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{
                                            required: true,
                                            message: 'Please input your password!'
                                        }
                                    ]}>
                                        <Input.Password/>
                                    </Form.Item>

                                    <Form.Item
                                        name="remember"
                                        valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <Form.Item
                                        wrapperCol={{
                                        offset: 16,
                                        span: 16
                                    }}>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>

                    </Card>
                </Col>
            </Row>

    </div>
  )
}

export default CardRegister
