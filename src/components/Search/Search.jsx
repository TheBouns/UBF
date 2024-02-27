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

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getActuaId(_id));
    };
    fetchData();
  }, []);
  return (
    <div id="search-container">
      <h2 className="search-title">
        {actuacion.name} {actuacion.numero}
      </h2>
      <Unidad />
    </div>
  );
};
