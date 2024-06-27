import { combineReducers } from "@reduxjs/toolkit";
import quanLyNguoiDungReducer from "./QuanLyNguoiDung/slice";
import ListFilmGP01 from "./ListFilmGP01/slice";
import getBannerSlice from "./GetBannerList/Slice";
import quanLyRapSlice from "./GetHeThongRap/Slice";
import CumRapSlice from "./GetThongTinCumRap/slice.tsx";
import getDetailFilmSlice from "./GetDetailFilm/Slice.tsx";
import QuanLyVeDatSlice from "./GetDanhSachDatVe/slice.tsx";
import DatVeSlice from "./ThongTinDatVe/slice.tsx";
import LichSuVeSlice from "./GetLichSuVeDat/Slice.tsx";
import ThemPhimSlice from "./ThemPhim/Slice.tsx";
import LayThongTinPhimSlice from "./LayThongTinPhim/Slice.tsx";
import CapNhatPhimSlice from "./CapNhatFilm/slice.tsx";
import XoaPhimSlice from "./XoaPhim/Slice.tsx";
import CapNhatNguoiDungSlice from "./CapNhatNguoiDung/Slice.tsx";

export const rootReducer = combineReducers({
  quanLyNguoiDungToolkit: quanLyNguoiDungReducer,
  GP01Store: ListFilmGP01,
  layDanhSachBannerToolkit: getBannerSlice,
  quanLyRapToolkit: quanLyRapSlice,
  CumRapToolkit: CumRapSlice,
  GetDetail: getDetailFilmSlice,
  getVePhimToolkit: QuanLyVeDatSlice,
  ThongTinVeDatToolkit: DatVeSlice,
  LichSuVeToolkit: LichSuVeSlice,
  ThemPhimSliceToolKit: ThemPhimSlice,
  LayThongTinPhimToolkit: LayThongTinPhimSlice,
  CapNhatPhimToolkit: CapNhatPhimSlice,
  XoaPhimToolKit: XoaPhimSlice,
  CapNhatNguoiDungToolKit: CapNhatNguoiDungSlice,
});
