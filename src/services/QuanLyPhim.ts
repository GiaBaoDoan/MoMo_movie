import { apiInstance } from "constant";
import { DataFilm } from "types/FormDataFilm";
import { Banner, ListFilm } from "types/QuanLyPhim";
const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_PHIM_API,
});
export const QuanLyPhimService = {
  getGP01List: () => {
    return api.get<ApiReponse<ListFilm[]>>(`/LayDanhSachPhim?maNhom=GP01`);
  },
  getBannerList: () => {
    return api.get<ApiReponse<Banner[]>>("/LayDanhSachBanner");
  },
  themPhimUpHinh: (formData) => {
    return api.post<ApiReponse<DataFilm>>("/ThemPhimUploadHinh", formData);
  },
  laythongTinPhim: (maPhim: number) => {
    return api.get<ApiReponse<DataFilm>>(`/LayThongTinPhim?maPhim=${maPhim}`);
  },
  capNhatphim: (formData) => {
    return api.post<ApiReponse<DataFilm>>("/CapNhatPhimUpload", formData);
  },
  delete: (maPhim) => {
    return api.delete<ApiReponse<any>>(`/XoaPhim?MaPhim=${maPhim}`);
  },
};
