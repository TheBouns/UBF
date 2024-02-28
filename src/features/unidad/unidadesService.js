import axios from "axios";

const API_URL = "https://uf-bback-2uwuasa.vercel.app/";

const create = async (datos) => {
  const res = await axios.post(API_URL + "/unidades/", datos);
  return res.data;
};

const getAllUnit = async () => {
  const res = await axios.get(API_URL + "/unidad/");
  return res.data;
};

const deleteUnidad = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + "/unidades/" + id, {
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};

const getUnidadByName = async (unidadName) => {
  const res = await axios.get(API_URL + "/unidades/name/" + unidadName);
  return res.data;
};
const getByProvincia = async (provincia) => {
  const res = await axios.get(API_URL + "/unidad/buscar/" + provincia);
  return res.data;
};
const updateActuando = async (id, data) => {
  const res = await axios.put(API_URL + "/unidad/unidad/" + id, data);

  return res.data;
};
//iajsa
const unidadesService = {
  create,
  getAllUnit,
  deleteUnidad,
  getUnidadByName,
  getByProvincia,
  updateActuando,
};

export default unidadesService;
