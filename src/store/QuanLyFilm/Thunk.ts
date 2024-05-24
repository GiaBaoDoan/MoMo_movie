import { createAsyncThunk } from "@reduxjs/toolkit";
import { QuanLyPhimService } from "services";

export const getListFilmThunk = createAsyncThunk('QuanLyPhim/LayDanhSachPhim',async(tenPhim:string ,{rejectWithValue}) => {
     try {
        const res = await QuanLyPhimService.getAllList(tenPhim);
        return res.data.content
     }
     catch(err) {
        return rejectWithValue(err)
     }
})
