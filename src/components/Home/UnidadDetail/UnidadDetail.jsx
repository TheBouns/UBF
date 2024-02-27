import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../../features/unidad/unidadesSlice";

const UnidadDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { unidad } = useSelector((state) => state.unidades);
  useEffect(() => {
    dispatch(getById(id));
  }, []);

  return (
    <div>
      <h1>UnidadDetail</h1>
      <p>{unidad.name}</p>
      <p>{unidad.body}</p>
    </div>
  );
};

export default UnidadDetail;
