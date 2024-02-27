import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, reset } from "../../../features/unidad/unidadesSlice";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

import "antd/dist/antd.css";

const UpUnidad = () => {
  const [formData, setFormData] = useState({
    name: "",
    codigo: "",
  });

  const { name, codigo } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      notification.error({ message: "Error", description: message.msg });
    }
    if (isSuccess) {
      notification.success({
        message: "Success",
        description: message?.message,
      });
      setTimeout(() => {
        navigate("/admin");
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
    dispatch(create(formData));
  };
  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={onChange}
          required
        />

        <input
          type="number"
          name="codigo"
          value={codigo}
          placeholder="codigo"
          onChange={onChange}
          required
        />
        <button type="submit">UpUnidad</button>
      </form>
    </div>
  );
};
export default UpUnidad;
