import { createSlice } from "@reduxjs/toolkit";
import { getLichSuDatVeThunk } from "./Thunk";
import { LichSuVeDat } from "types/LichSuDatVe";
type lichSuVe = {
  LichSuDatVe?: LichSuVeDat;
  isLoading?: boolean;
};
const initialState: lichSuVe = {
  isLoading: false,
};
const LichSuVeSlice = createSlice({
  name: "LayThongTinLichSuVeDat",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getLichSuDatVeThunk.fulfilled, (state, { payload }) => {
      state.LichSuDatVe = payload;
      state.isLoading = false;
    });
    builder.addCase(getLichSuDatVeThunk.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const {} = LichSuVeSlice.actions;

export default LichSuVeSlice.reducer;
