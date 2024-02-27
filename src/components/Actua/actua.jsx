import { useSelector, useDispatch } from "react-redux";
import { getAll } from "../../features/actua/actuaSlice";
import { getAllUnit } from "../../features/unidad/unidadesSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./actua.scss";
import { CrearActuacion } from "./CrearActuacion/crearActuacion";

export const Actua = () => {
  const { actua } = useSelector((state) => state.actua);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleFalse = () => setShow(false);
  const handleTrue = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAll());
      await dispatch(getAllUnit());
    };
    fetchData();
  }, [show]);
  const onClick = (id) => {
    return navigate("/actuacion/" + id);
  };
  const actuacion = actua.map((item) => {
    return (
      <div
        className="actuacion"
        key={item._id}
        onClick={() => onClick(item._id)}
      >
        <p className="actuacion-value">{item.name}</p>
        <p className="actuacion-value numero">{item.numero}</p>
        <p className="actuacion-value codigo">
          {item.provincia}
          {item.zona}
          {item.subzona}
        </p>
      </div>
    );
  });
  return (
    <div id="actua-container">
      <span className="actua-title">
        <h3>Bienvenido a la lista de actuaciones</h3>
        <h4>Aqui podras consultar las actuaciones activas o crear una nueva</h4>
      </span>
      <div className="actuacion-container">
        <span className="actuacion-title">
          <h3>Nombre</h3>
          <h3>Numero</h3>
          <h3>Codigo</h3>
        </span>
        {actuacion}
        <button className="actuacion-button" onClick={() => handleTrue()}>
          Crear
        </button>
      </div>
      <div id="modal">
        <div className="modal-content">
          {show ? (
            <button className="modal-button" onClick={() => handleFalse()}>
              X
            </button>
          ) : null}
          {show ? <CrearActuacion /> : null}
        </div>
      </div>
    </div>
  );
};
