import "./App.css";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import UnidadDetail from "./components/Home/UnidadDetail/UnidadDetail";
import Admin from "./components/Admin/Admin";
import PrivateZone from "./Guards/PrivatZone";
import AdminZone from "./Guards/AdminZone";

import Unidad from "./components/Home/Unidad/Unidad";
import { Actua } from "./components/Actua/actua";
import { Search } from "./components/Search/Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unidad" element={<Unidad />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/unidad/:id" element={<UnidadDetail />} />
          <Route path="/actuacion/:_id" element={<Search />} />
          <Route
            path="/admin"
            element={
              <AdminZone>
                <Admin />
              </AdminZone>
            }
          />
          <Route path="/actuacion" element={<Actua />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
