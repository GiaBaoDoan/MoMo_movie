import { apiInstance } from "constant"
import { AccountSchemaType, RegisterSchemaType } from "schema"
import { LoginSchemaType } from "schema/LoginSchema"
import { LichSuVeDat } from "types/LichSuDatVe"
import { user } from "types/QuanLyNguoiDung"

const api = apiInstance({
    baseURL : import.meta.env.VITE_QUAN_LY_NGUOI_DUNG
})
export const quanLyNguoiDungService = {
    register: (payload :RegisterSchemaType)=> api.post('/dangky',payload),
    login : (payload:LoginSchemaType) => api.post<ApiReponse<user>>('Dangnhap',payload),
    GetLichSuDatVe : () => api.post<ApiReponse<LichSuVeDat>>('/ThongTinTaiKhoan'),   
    updateUser : (payload : AccountSchemaType) =>api.put<ApiReponse<AccountSchemaType>>('CapNhatThongTinNguoiDung',payload)
}