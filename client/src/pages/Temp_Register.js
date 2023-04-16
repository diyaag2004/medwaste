import React from 'react';
import { Form, Input, message, checkbox, email } from "antd";


function Register() {
  return (
    <>
        <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register From</h3>
          <Form.Item label="hospital name" name=" name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Form.Item label="confirm password" name=" confirm password">
            <Input type="password"required/>
          </Form.Item>
          <Form.Item label="city" name="city">
            <Input type="city"required/>
          </Form.Item>
          <Form.Item label="checkbox" name="disabled" valuepropname="checked">
            <Checkbox>checkbox</Checkbox>
          </Form.Item>
          
          
          <Link to="/login" className="m-2">
            Already user login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  )
}

export default Register