import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import unidadesService from "./unidadesService";

const initialState = {
  unidades: [],
  isLoading: false,
  unidad: {},
};
export const create = createAsyncThunk("unidades/", async (datos) => {
  try {
    return await unidadesService.create(datos);
  } catch (error) {
    console.error(error);
  }
});
export const getAll = createAsyncThunk("unidades/getAll", async () => {
  try {
    return await unidadesService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const deleteUnidad = createAsyncThunk(
  "unidades/deleteUnidad",
  async (id) => {
    try {
      return await unidadesService.deleteUnidad(id);
    } catch (error) {
      console.error(error);
    }
  }
);
export const getUnidadByName = createAsyncThunk(
  "unidades/getUnidadByName",
  async (unidadName) => {
    try {
      return await unidadesService.getUnidadByName(unidadName);
    } catch (error) {
      console.error(error);
    }
  }
);
export const getById = createAsyncThunk("unidades/getById", async (id) => {
  try {
    return await unidadesService.getById(id);
  } catch (error) {
    console.error(error);
  }
});

export const unidadesSlice = createSlice({
  name: "unidades",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.unidades = action.payload;
    });
    // builder.addCase(getAll.pending, (state, action) => {
    //   state.isLoading = true;
    //   state.unidades = action.payload;
    // });

    builder.addCase(deleteUnidad.fulfilled, (state, action) => {
      console.log(action.payload);
      state.unidades = state.unidades.filter(
        (unidades) => unidades.id !== +action.payload.id
      );
    });
    builder.addCase(getById.fulfilled, (state, action) => {
      state.unidad = action.payload;
    });
    builder.addCase(getUnidadByName.fulfilled, (state, action) => {
      state.unidades = action.payload;
    });
  },
});

export const { reset } = unidadesSlice.actions;
export default unidadesSlice.reducer;
