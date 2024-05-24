import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "schema/LoginSchema";
import { quanLyNguoiDungService } from "services";
export const LoginThunk = createAsyncThunk('quanlynguoidung/loginThunk',async(payload :LoginSchemaType,{rejectWithValue}) =>{
    try {
        const res = await quanLyNguoiDungService.login(payload) 
        return res.data.content
    }
    catch(err) {
        return rejectWithValue(err)
    }
})
