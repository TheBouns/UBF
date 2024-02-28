import axios from "axios";

const API_URL = "https://uf-bback-2uwuasa.vercel.app/";

const create = async (datos) => {
    const res = await axios.post(API_URL + "/unis", datos);
    return res.data;
  };
  
  const getAll = async () => {
    const res = await axios.get(API_URL + "/unis");
    return res.data;
  };
  
  const unisService = {
    create,
    getAll
  };

  export default unisService;