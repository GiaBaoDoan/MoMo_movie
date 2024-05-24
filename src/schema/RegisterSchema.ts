import { z } from "zod";
import validator from 'validator'
export const RegisterSchema = z.object({
    taiKhoan : z.string().nonempty('Vui lòng nhập tài khoản').max(20,'Nhập tối đa 32 ký tự').min(6,'Nhập tối thiểu 6 ký tự'),
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
    email : z.string().nonempty('Vui lòng nhập email').email('email không tồn tại'),
    soDt : z.string().nonempty('Vui lòng nhập số điện thoại').refine(validator.isMobilePhone,{message: 'Số điện thoại không hợp lệ',}),
    maNhom : z.string().nonempty('Vui lòng nhập số mã nhóm'),
    nhapLaiMatKhau : z.string().nonempty('Vui lòng nhập xác nhận mật khẩu').min(6,'Nhập tối thiểu 6 ký tự').max(32,'nhập tối đa 32 ký tự'),
    hoTen : z.string().nonempty('Vui lòng nhập số họ tên').min(6,'Nhập tối thiểu 6 ký tự').max(32,'nhập tối đa 32 ký tự'),
})
export type RegisterSchemaType = z.infer<typeof RegisterSchema>