import React, { useState, useEffect } from "react";
import "./Register.scss";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../features/auth/authSlice";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { isError, isSuccess, message } = useSelector((state) => state.auth);
  const { name, email, password, password2 } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Success",
        description: message?.message,
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({
        message: "Error",
        description: "Passwords do not match",
      });
    } else {
      dispatch(register(formData));
    }
  };
  return (
    <div id="register-form-container">
      <h2>Crear una cuenta:</h2>
      <form onSubmit={onSubmit} className="register-form">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={onChange}
          required
          className="register-form-input"
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="email"
          onChange={onChange}
          className="register-form-input"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={onChange}
          className="register-form-input"
          required
        />
        <input
          type="password"
          name="password2"
          value={password2}
          placeholder="password2"
          onChange={onChange}
          className="register-form-input"
          required
        />
        <button type="submit" className="register-form-button">
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
