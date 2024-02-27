import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, reset } from "../../features/auth/authSlice";
import { notification } from "antd";

import "antd/dist/antd.css";

import "./Login.scss";
import Unidad from "../Home/Unidad/Unidad";

const Login = () => {
  const { isError, isSuccess, message } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      notification.error({ message: "Error", description: message });
    }
    if (isSuccess) {
      notification.success({
        message: "Success",
        description: message?.message,
      });
      setTimeout(() => {
        navigate("/actuacion");
      }, 2000);
    }
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img src="https://res.cloudinary.com/ducxt7zb3/image/upload/v1709074575/Logotip_d_SGISE_bb0rad.png"/>
      </div>

      <form className="login-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Email"
          className="login-form-input"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="login-form-input"
          name="password"
          value={password}
          onChange={onChange}
        />
        <div className="login-form-button">
          <button className="login-form-button-register">
            <Link to="/register" className="form-link">
              Crear una cuenta
            </Link>
          </button>
          <button type="submit" className="btn btn-accent">
            Acceder
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
