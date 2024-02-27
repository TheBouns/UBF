import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import unidad from "../features/unidad/unidadesSlice";
import actua from "../features/actua/actuaSlice";

export const store = configureStore({
  reducer: {
    unidad,
    auth,
    actua,
  },
});
