import { useSelector, useDispatch } from "react-redux";
import { getAll, deleteById } from "../../features/actua/actuaSlice";
import { getAllUnit } from "../../features/unidad/unidadesSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./actua.scss";
import { CrearActuacion } from "./CrearActuacion/crearActuacion";
import { FaCarSide, FaTruck, FaHelicopter, FaHelmetSafety   } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";



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

  
  const onClickDelete = (id) => {
    dispatch(deleteById(id.toString()));
  };

  return (
    <div id="actua-container">
      <span className="actua-title">
        <h3 className="text-7xl">Bienvenido a la lista de actuaciones</h3>
        <h4 className="text-4xl">Aqui podrás consultar las actuaciones activas o crear una nueva</h4>
      </span>
      <table className="table w-1/2">
        <thead>
          <tr className="text-3xl text-black">
            <th>Nombre</th>
            <th>Número</th>
            <th>Código</th>
            <th>Fecha</th>
            <th>Vehículos</th>
            <th>Activo</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            actua.map(item => {
              const date = "23/02/2024";
              const active = Math.floor(Math.random() * 2);
              const vehicle = [<FaCarSide/> , <FaHelicopter/>, <FaTruck/>, <FaHelmetSafety/>];
              const selected = [];
              const random = Math.floor(Math.random() * 5);
              for(let i=0; i< random; i++) {
                const getVehicle = Math.floor(Math.random() * 3);
                selected.push(vehicle[getVehicle]);
              }

              const selectedVehicles = selected.map(item =>{ return (
                <div className="" key={item.name}>
                  {item}
                </div>
              )})

              return (
                <tr className={ active? "text-3xl text-left hover:bg-green-700 z-0" : "text-3xl text-left hover:bg-red-700 z-0"}>
                  <td  onClick={() => onClick(item._id)}>{item.name}</td>
                  <td>{item.numero}</td>
                  <td>{item.provincia}{item.zona}{item.subzona}</td>
                  <td>{date}</td>
                  <td className="flex gap-1">{selectedVehicles}</td>
                  <td>{active? 'SI' : 'NO'}</td>
                  <td className="text-4xl z-40" onClick={() => onClickDelete(item._id)}><TiDelete/></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className="w-full flex justify-center ">
        <button className="btn btn-accent w-1/6 mt-5" onClick={() => handleTrue()}>Crear</button>
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
