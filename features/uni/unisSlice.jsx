import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import unisService from "./unisService";


const initialState = {
    unis: [],
    isLoading: false,
    uni: {},
  };
export const create = createAsyncThunk("unis/", async (datos)=>{
    try {
      return await unisService.create(datos);
    } catch (error) {
      console.error(error);
    }
  });
  
export const getAll = createAsyncThunk("unis/getAll", async () => {
    try {
      return await unisService.getAll();
    } catch (error) {
      console.error(error);
    }
  });

export const unisSlice = createSlice({
    name: "unis",
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getAll.fulfilled, (state, action) => {
          state.unis = action.payload;
        })
      builder.addCase(getAll.pending, (state) => {
          state.isLoading = true;
        });
      
     
    },
  });


export const { reset } = unisSlice.actions;
export delfault unisSlice.reducer;