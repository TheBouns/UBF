import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getActuaId } from "../../features/actua/actuaSlice";
import Unidad from "../Home/Unidad/Unidad";
import "./search.scss";

export const Search = () => {
  const { _id } = useParams();
  const { actuacion } = useSelector((state) => state.actua);
  const dispatch = useDispatch();
  const fechaActual =  new Date();
  const fechaInicio = fechaActual;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getActuaId(_id));
    };
    fetchData();
  }, []);
  
  const unidades = [{ id: '1111', name: 'Camion 1', actuando: true } , { id: '2222', name: 'Helicoptero', actuando: false }, { id: '3333', name: 'Camion 2', actuando: true }]
  return (
    <div id="search-container" className="search-container">
    <h2 className="search-title">
      {actuacion.name} {actuacion.numero}
    </h2>
    <p className="search-text">Inicio:</p>
    <p className="search-text">{fechaInicio.toLocaleDateString("es-ES", options)}</p>
    <p className="search-text">Localizacion:</p>
    <p className="search-text">Valencia</p>
      <Unidad unidades={unidades}/>
    </div>
  );
};
