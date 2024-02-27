import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getByProvincia,
  updateActuando,
} from "../../../features/unidad/unidadesSlice";
import { Spin } from "antd";
import "./unidad.scss";

const Unidad = () => {
  const { unidades, isLoading } = useSelector((state) => state.unidad);
  const { actuacion } = useSelector((state) => state.actua);
  const [show, setShow] = useState(false);
  const handleFalse = () => setShow(false);
  const handleTrue = () => setShow(true);
  const provincia = actuacion.provincia;

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getByProvincia(provincia));
    };
    fetchData();
  }, [provincia]);
  const setActuando = (id) => {
    dispatch(updateActuando(id));
  };
  if (isLoading) {
    return (
      <h1>
        <Spin />
      </h1>
    );
  }
  const listUnidades = unidades.map((item) => {
    return item.actuando ? (
      <button
        onClick={() => setActuando(item._id)}
        key={item._id}
        className="actuando"
      >
        {item.name}
      </button>
    ) : (
      <button
        onClick={() => setActuando(item._id)}
        key={item._id}
        className="esperando"
      >
        {item.name}
      </button>
    );
  });
  return <div id="unidades-container">{listUnidades}</div>;
};

export default Unidad;
