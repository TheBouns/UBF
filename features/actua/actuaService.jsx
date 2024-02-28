import axios from "axios";

const API_URL ="http://https://uf-bback-2uwuasa.vercel.app";
const user = JSON.parse(localStorage.getItem("user"));

const create = async (actuaData)=> {
    return await axios.post(API_URL + "/actua/", actuaData);
};

const actuaService = {
    create
};

export default actuaService;