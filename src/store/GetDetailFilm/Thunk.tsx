import { createAsyncThunk } from "@reduxjs/toolkit";
import { QuanLyRapService } from "services/QuanLyHeThongRap";

export const getDetailFilm = createAsyncThunk(
  "QuanLyRap/LayThongTinPhim",
  async (maPhim: string, { rejectWithValue }) => {
    try {
      const result = await QuanLyRapService.getDetailFilm(maPhim);
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
