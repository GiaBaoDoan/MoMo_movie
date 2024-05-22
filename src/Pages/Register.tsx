import { zodResolver } from "@hookform/resolvers/zod";
import { AccountSchemaType, RegisterSchema } from "schema";
import { SubmitHandler, useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { PATH } from "constant";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Input } from "components/ui";
import { quanLyNguoiDungService } from "services";
import { toast } from "react-toastify";

export const Register = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<AccountSchemaType> = async (value) => {
    try {
      setIsPending(true);
      let res = await quanLyNguoiDungService.register(value);
      if (res) {
        setIsPending(false);
      }
      toast.success("Đăng kí thành công");
      setTimeout(() => {
        navigate(PATH.login);
      }, 1000);
    } catch (err) {
      setIsPending(false);
      toast.error(err?.response?.data?.content);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-[25px] pb-[100px] w-[800px] h-full rounded-br-xl rounded-tr-xl bg-white"
    >
      {/* <ToastContainer /> */}
      <h1 className="text-3xl font-600 text-pinkTheme text-center ">Đăng ký</h1>
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-x-[10px]">
          <div>
            <p className="font-500 my-[5px]">
              {" "}
              <span className="text-red-500">*</span> Tài khoản
            </p>
            <Input
              placeholder="Tài Khoản"
              type="text"
              name="taiKhoan"
              error={errors?.taiKhoan?.message as string}
              className="outline-none block w-full p-15 border text-white rounded-lg border-gray-800 focus:ring-blue-600"
              register={register}
            />
          </div>
          <div>
            <p className="font-500 my-[5px]">
              {" "}
              <span className="text-red-500">*</span> Mật khẩu
            </p>
            <Input
              placeholder="Mật khẩu"
              type="text"
              name="matKhau"
              error={errors?.matKhau?.message as string}
              register={register}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-[10px]">
          <div className="mt-10">
            <p className="font-500 my-[5px]">
              {" "}
              <span className="text-red-500">*</span> Email
            </p>
            <Input
              placeholder="Email"
              type="text"
              name="email"
              error={errors?.email?.message as string}
              className="outline-none block w-full p-15 border text-white rounded-lg border-gray-800 focus:ring-blue-600"
              register={register}
            />
            <p className="text-red-600"></p>
          </div>
          <div className="mt-10">
            <p className="font-500 my-[5px]">
              {" "}
              <span className="text-red-500">*</span> Số điện thoại
            </p>
            <Input
              placeholder="Số Điện Thoại"
              type="text"
              name="soDt"
              error={errors?.soDt?.message as string}
              className="outline-none block w-full p-15 border text-white rounded-lg border-gray-800 focus:ring-blue-600"
              register={register}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-[10px]">
          <div className="mt-10">
            <p className="font-500 my-[5px]">
              {" "}
              <span className="text-red-500">*</span> Mã nhóm
            </p>
            <Input
              placeholder="Mã Nhóm"
              type="text"
              name="maNhom"
              error={errors?.maNhom?.message as string}
              className="outline-none block w-full p-15 border text-white rounded-lg border-gray-800 focus:ring-blue-600"
              register={register}
            />
          </div>
          <div className="mt-10">
            <p className="font-500 my-[5px] ">
              {" "}
              <span className="text-red-500">*</span> Họ tên
            </p>
            <Input
              placeholder="Họ và tên"
              type="text"
              error={errors?.hoTen?.message as string}
              className="outline-none block w-full p-15 border text-white rounded-lg border-gray-800 focus:ring-blue-600"
              register={register}
              name="hoTen"
            />
          </div>
        </div>

        <div className="mt-10">
          {isPending ? (
            <button
              disabled={true}
              className="text-white bg-slate-400 font-500 rounded text-20 w-full p-[15px]"
            >
              Resgister
              <LoadingOutlined className="ml-2" />
            </button>
          ) : (
            <button
              disabled={false}
              className="text-white bg-pinkTheme font-500 rounded text-20 w-full mt-[10px] p-10"
            >
              Resgister
            </button>
          )}
        </div>
        <div className="mt-5">
          <div className="flex justify-center space-x-3 items-center">
            <span className="text-gray-500">Đã có tài khoản?</span>
            <span
              onClick={() => navigate(PATH.login)}
              className="text-pinkTheme text-[18px] underline cursor-pointer"
            >
              {" "}
              Log in
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};
