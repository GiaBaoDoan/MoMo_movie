import { createSlice } from "@reduxjs/toolkit";
import { upDateThunk } from "./Thunk";
import { toast } from "react-toastify";
const initialState = {
  thongTinCapNhat: null,
  isLoading: false,
};
const CapNhatNguoiDungSlice = createSlice({
  name: "CapNhatNguoiDung",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(upDateThunk.fulfilled, (state, { payload }) => {
      state.thongTinCapNhat = payload;
      state.isLoading = false;
      toast.success("Cap nhat thanh cong");
    });
    builder.addCase(upDateThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(upDateThunk.rejected, (state, { payload }: any) => {
      state.isLoading = false;
      toast.error(payload.response.data.content);
    });
  },
});
export const {} = CapNhatNguoiDungSlice.actions;
export default CapNhatNguoiDungSlice.reducer;
