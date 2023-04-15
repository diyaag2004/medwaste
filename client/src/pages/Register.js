import React from 'react';
import "../styles/RegiserStyles.css";
import { Form, Input, message, Checkbox , email } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/register", values);
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <div>
        <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register From</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already user login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
          {/* <h3 className="text-center">Register From</h3>
          <Form.Item label="hospital name" name=" name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Form.Item label="confirm password" name="password">
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
          </button> */}
        </Form>
      </div>
    </div>
  )
}

export default Register