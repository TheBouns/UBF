import { Link } from "react-router-dom";
import SGISE from "../Home/Imagen/SGISERED.png";
import "./Home.scss";
import Inicio from "./inicio/inicio";
import Login from "../Login/Login";

const Home = () => {
  return (
    <div id="home-container">
      <Login />
    </div>
  );
};

export default Home;
