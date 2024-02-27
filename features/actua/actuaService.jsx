import axios from "axios";

const API_URL ="https://localhost:3001";
const user = JSON.parse(localStorage.getItem("user"));

const create = async (actuaData)=> {
    return await axios.post(API_URL + "/actua/", actuaData);
};

const actuaService = {
    create
};

export default actuaService;