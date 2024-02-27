import axios from "axios";
const API_URL = "http://localhost:3001";

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

const actuaService = {
  getAll,
  create,
  getActuaId,
};

export default actuaService;
