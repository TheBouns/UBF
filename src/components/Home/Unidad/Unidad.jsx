import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getByProvincia,
  updateActuando,
} from "../../../features/unidad/unidadesSlice";
import { Spin } from "antd";
import "./unidad.scss";

const Unidad = ({ unidades }) => {
  const { actuacion } = useSelector((state) => state.actua);
  const [tempUnidades, setTempUnidades] = useState([]);
  const provincia = actuacion?.provincia;

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getByProvincia(provincia));
    };
    fetchData();
  }, [dispatch, provincia]);

  useEffect(() => {
    setTempUnidades(unidades);
  }, [unidades]);

  const setActuando = (id) => {
    const updatedUnidades = tempUnidades.map((item) =>
      item.id === id ? { ...item, actuando: !item.actuando } : item
    );
    setTempUnidades(updatedUnidades);
    dispatch(updateActuando(id));
  };

  const listUnidades = tempUnidades.map((item) => (
    <button
      onClick={() => setActuando(item.id)}
      key={item.id}
      className={item.actuando ? "actuando" : "esperando"}
    >
      {item.name} {item.actuando ? "" : "(esperando)"}
    </button>
  ));

  return <div id="unidades-container">{listUnidades}</div>;
};

export default Unidad;
