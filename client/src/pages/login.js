import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading,hideloading } from "../redux/features/alertslice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/login", values);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
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
          
          <Form.Item label="Email" name="email" value="name">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password" value="password">
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
  );
};

  
export default Login;
