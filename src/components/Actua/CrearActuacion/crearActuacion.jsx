import { useState } from "react";
import { BsInfoSquare } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { create } from "../../../features/actua/actuaSlice";
import "../../Login/Login.scss";
import "./crearActuacion.scss";

export const CrearActuacion = () => {
  const [formData, setFormData] = useState({
    name: "",
    numero: "",
    provincia: "",
    zona: "",
    subzona: "",
  });
  const { name, numero, provincia, zona, subzona } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mouse, setMouse] = useState(false);
  const mouseOver = () => setMouse(true);
  const mouseOut = () => setMouse(false);

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
    <div id="crearActuacion-container">
      <form className="login-form" onSubmit={onSubmit}>
        <BsInfoSquare
          className="input-icon"
          onMouseOver={() => mouseOver()}
          onMouseOut={() => mouseOut()}
        />
        {mouse ? (
          <div className="input-info">
            <p>Provincia: Valencia:1 Castellon:2 Alicante:3</p>
            <p>
              Zona: Valencia [1,2,3,4,5], Castellon [2,3,4,5,6], Alicante
              [1,2,3,4]
            </p>
            <p>Subzona: 1,2,3</p>
          </div>
        ) : null}
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          className="login-form-input"
          value={name}
          onChange={onChange}
          required
        />
        <input
          type="number"
          placeholder="Numero"
          name="numero"
          className="login-form-input"
          value={numero}
          onChange={onChange}
          required
        />
        <input
          type="number"
          name="provincia"
          placeholder="Provincia"
          className="login-form-input"
          value={provincia}
          onChange={onChange}
          required
        />
        <input
          type="number"
          name="zona"
          placeholder="Zona"
          className="login-form-input"
          value={zona}
          onChange={onChange}
          required
        />
        <input
          type="number"
          placeholder="Subzona"
          name="subzona"
          className="login-form-input"
          value={subzona}
          onChange={onChange}
          required
        />
        <button type="submit" className="btn btn-accent">
          Enviar
        </button>
      </form>
    </div>
  );
};
