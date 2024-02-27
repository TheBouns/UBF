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
export const getAllUnit = createAsyncThunk("unidades/getAll", async () => {
  try {
    return await unidadesService.getAllUnit();
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
export const getByProvincia = createAsyncThunk(
  "unidades/getByProvincia",
  async (provincia) => {
    try {
      return await unidadesService.getByProvincia(provincia);
    } catch (error) {
      console.error(error);
    }
  }
);
export const updateActuando = createAsyncThunk(
  "unidades/actuando",
  async (id, data) => {
    try {
      return await unidadesService.updateActuando(id, data);
    } catch (error) {
      console.error(error);
    }
  }
);

export const unidadesSlice = createSlice({
  name: "unidades",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUnit.fulfilled, (state, action) => {
      state.unidades = action.payload;
    });
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
    builder.addCase(getByProvincia.fulfilled, (state, action) => {
      state.unidades = action.payload;
    });
    builder.addCase(updateActuando.fulfilled, (state, action) => {
      const unidadUpdate = state.unidades.map((item) => {
        if (item._id === action.payload._id) {
          item = action.payload;
        }
        return item;
      });
      state.unidades = unidadUpdate;
    });
  },
});

export const { reset } = unidadesSlice.actions;
export default unidadesSlice.reducer;
