import axios from "axios";
const API_URL = "https://uf-bback-2uwuasa.vercel.app/";

const getAll = async () => {
  const res = await axios.get(API_URL + "/actua");
  return res.data;
};
const create = async (data) => {
  return await axios.post(API_URL + "/actua", data);
};
const getActuaId = async (id) => {
  const res = await axios.get(API_URL + "/actua/search/" + id);
  return res.data;
};

const deleteById = async (id)=> {
  return await axios.delete(API_URL + "/actua/" + id);
};

const actuaService = {
  getAll,
  create,
  getActuaId,
  deleteById,
};

export default actuaService;
