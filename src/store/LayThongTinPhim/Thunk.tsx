import { createAsyncThunk } from "@reduxjs/toolkit";
import { QuanLyPhimService } from "services";

export const layThongTinPhimThunk = createAsyncThunk(
  "QuanLyPhim/LayThongTinphim",
  async (maPhim: any, { rejectWithValue }) => {
    try {
      const result = await QuanLyPhimService.laythongTinPhim(maPhim);
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
