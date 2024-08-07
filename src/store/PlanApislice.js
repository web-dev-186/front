// src/store/planApiSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPlans = createAsyncThunk("plans/fetchPlans", async () => {
  const response = await axios.get("https://back-5rnx.onrender.com/api/plans");
  return response.data;
});

const planSlice = createSlice({
  name: "plans",
  initialState: { plans: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlans.fulfilled, (state, action) => {
      state.plans = action.payload;
    });
  },
});

export default planSlice.reducer;
