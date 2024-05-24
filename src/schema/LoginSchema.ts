import {z} from 'zod';
export const LoginSchema = z.object({
    taiKhoan : z.string().nonempty('Vui lòng nhập tài khoản').max(32,'Nhập tối đa 32 ký tự').min(6,'Nhập tối thiểu 6 ký tự'),
    matKhau : z.string().nonempty('Vui lòng nhập mật khẩu').max(32,'Nhập tối đa 32 ký tự').min(6,'Nhập tối thiểu 6 ký tự').refine((value) => {
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
export type LoginSchemaType = z.infer<typeof LoginSchema>