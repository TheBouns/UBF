import axios from "axios";

const API_URL = "https://uf-bback-2uwuasa.vercel.app/";

const create = async (datos) => {
  const res = await axios.post(API_URL + "/unidades/", datos);
  return res.data;
};

const getAll = async () => {
  const res = await axios.get(API_URL + "/unidades/");
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

const unidadesService = {
  create,
  getAll,
  deleteUnidad,
  getUnidadByName,
};

export default unidadesService;
