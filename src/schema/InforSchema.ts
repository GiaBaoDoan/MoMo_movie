import { z } from "zod";
import validator from 'validator';
export const InforSchema = z.object({
    email : z.string().nonempty('Vui lòng nhập email').email('email không tồn tại '),
    soDt : z.string().nonempty('Vui lòng nhập số điện thoại').refine(validator.isMobilePhone,{
        message: 'Số điện thoại không hợp lệ',
      }),
  hoTen : z.string().min(8,{message : "Tên ít nhất có 8 ký tự"}).max(32,{message : "Tên chỉ chứa tối đa 32 ký tự"}).nonempty('Vui lòng nhập số họ tên')
})
export type InforSchemaType = z.infer<typeof InforSchema>