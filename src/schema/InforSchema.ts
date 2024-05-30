import { z } from "zod";
import validator from 'validator';
export const InforSchema = z.object({
    email  : z.string().nonempty('Vui lòng nhập email').email('email không tồn tại '),
    soDt : z.string().nonempty('Vui lòng nhập số điện thoại').refine(validator.isMobilePhone,{message: 'Số điện thoại không hợp lệ',}),
    hoTen : z.string().min(8,{message : "Tên ít nhất có 8 ký tự"}).max(32,{message : "Tên chỉ chứa tối đa 32 ký tự"}).nonempty('Vui lòng nhập số họ tên'),
    matKhau : z.string().nonempty('Vui lòng nhập mật khẩu').max(20,'Nhập tối đa 32 ký tự').min(6,'Nhập tối thiểu 6 ký tự').refine((value) => {
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /[0-9]/;
        return (
          uppercaseRegex.test(value) &&
          lowercaseRegex.test(value) &&
          digitRegex.test(value)
        );
      }, 'Mật khẩu phải chứa ít nhất một chữ cái viết hoa, một chữ cái viết thường và một chữ số'),
})
export type InforSchemaType = z.infer<typeof InforSchema>