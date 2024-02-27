import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import actuaService from "./actuaService";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
    actuas: [],
    isLoading: false,
    actua: {},
  };
  export const create = createAsyncThunk("actuas/", async (datos) => {
    try {
      return await actuasService.create(datos);
    } catch (error) {
      console.error(error);
    }
  });

  export const actuaSlice = createSlice({
      name: "actuas",
      initialState,
      reducers:{
          reset: (state)=> {
              state.isLoading = false;
          }
      }
  });

  export const {reset} = actuaSlice.actions;
  export default actuaSlice.reducer;