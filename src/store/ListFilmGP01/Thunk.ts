import { createAsyncThunk } from "@reduxjs/toolkit";
import { QuanLyPhimService } from "services";

export const getListFilmGP01Thunk = createAsyncThunk(
  "QuanLyPhim/LayDanhSachPhim",
  async (_, { rejectWithValue }) => {
    try {
      const res = await QuanLyPhimService.getGP01List();
      return res.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
