import React from 'react';
import"../styles/RegisterStyles.css";
import { Form, Input, message, checkbox, email } from "antd";

function Login() {
  return (
    <div>
        <h1>login Page</h1>
        <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="login-form"
        >
          <h3 className="text-center">login From</h3>
          
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
        
         
          <Link to="/register" className="m-2">
            Not a user Register here
          </Link>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </div>
    </div>
  )
}

export default Login