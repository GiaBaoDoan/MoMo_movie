import { createSlice } from "@reduxjs/toolkit";
import { getListFilmGP01Thunk } from "./Thunk";
import { ListFilm } from "types/QuanLyPhim";
type DanhSachPhim = {
  listFilmGP01?: ListFilm[];
  isFetchMovie: boolean;
};
const initialState: DanhSachPhim = {
  listFilmGP01: [],
  isFetchMovie: false,
};
const LisFilmGP01Slice = createSlice({
  name: "QuanLyPhim",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getListFilmGP01Thunk.pending, (state) => {
      state.isFetchMovie = true;
    });
    builder.addCase(getListFilmGP01Thunk.fulfilled, (state, { payload }) => {
      state.listFilmGP01 = payload;
      state.isFetchMovie = false;
    });
    builder.addCase(getListFilmGP01Thunk.rejected, (state) => {
      state.isFetchMovie = false;
    });
  },
});
export const {} = LisFilmGP01Slice.actions;
export default LisFilmGP01Slice.reducer;
