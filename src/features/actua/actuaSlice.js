import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import actuaService from "./actuaService";

const initialState = {
  actua: [],
  actuacion: [],
};

export const getAll = createAsyncThunk("actua/getAll", async () => {
  try {
    return await actuaService.getAll();
  } catch (error) {
    console.error(error);
  }
});
export const create = createAsyncThunk("actua/create", async (data) => {
  try {
    const res = await actuaService.create(data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
});
export const getActuaId = createAsyncThunk("actua/getActua", async (id) => {
  try {
    return await actuaService.getActuaId(id);
  } catch (error) {
    console.error(error);
  }
});

export const deleteById = createAsyncThunk("actua/deleteById", async (id) => {
  try {
    return await actuaService.deleteById(id);
  } catch (error) {
    console.error(error);
  }
});

export const ActuaSlice = createSlice({
  name: "actua",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.actua = action.payload;
    });
    builder.addCase(getActuaId.fulfilled, (state, action) => {
      state.actuacion = action.payload;
    });
    builder.addCase(deleteById.fulfilled, (state, action) => {
      state.actua = state.actua.filter(actua => actua._id !== action.payload.data.actua._id)
    })
  },
});

export default ActuaSlice.reducer;
