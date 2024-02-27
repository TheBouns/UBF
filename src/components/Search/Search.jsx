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
    <div className="flex h-full w-full items-center">
      <div id="search-container" className=" w-1/2">
        <h2 className="search-title">
          {actuacion.name}{actuacion.numero}
        </h2>
        <p className="text-2xl">Inicio:</p>
        <p className="text-2xl">{fechaInicio.toLocaleDateString("es-ES", options)}</p>
        <p className="text-2xl">Localizacion:</p>
        <p className="text-2xl">Valencia</p>
        <Unidad unidades={unidades}/>
      </div>
    </div>

  );
};
