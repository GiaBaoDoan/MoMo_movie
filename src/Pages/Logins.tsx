import { useNavigate } from "react-router-dom";
import { PATH } from "../constant/config";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "schema/LoginSchema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { RootState, useAppDispatch } from "store";
import { LoginThunk } from "store/QuanLyNguoiDung/Thunk";
import { Input } from "components/ui/Input";
import { useSelector } from "react-redux";
import {
  GithubOutlined,
  LoadingOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { GoogleOutlined } from "@ant-design/icons";

export const Logins = () => {
  const navigate = useNavigate();
  const { isLoading } = useSelector(
    (state: RootState) => state.quanLyNguoiDungToolkit
  );
  useEffect(() => {
    if (localStorage.getItem("USER")) {
      navigate("/");
    }
  }, []);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
  });
  const dispacth = useAppDispatch();
  const onSubmit = async (value) => {
    dispacth(LoginThunk(value))
      .unwrap()
      .then(() => {
        toast.success("Đăng nhập thành công");
        navigate("/");
      })
      .catch((err) => toast.error(err?.response?.data?.content));
  };
  return (
    <form
      className="bg-white h-full rounded-tr-xl rounded-br-xl p-5 w-[600px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl font-600 text-pinkTheme text-center">
        Đăng nhập
      </h1>
      <div className="mt-20">
        <p className="font-500 my-[5px]">
          {" "}
          <span className="text-red-500">*</span> Tài khoản
        </p>
        <Input
          value=""
          register={register}
          error={errors?.taiKhoan?.message as string}
          name="taiKhoan"
          type="text"
          placeholder=""
        />
        <p className="font-500 my-[5px]">
          {" "}
          <span className="text-red-500">*</span> Mật khẩu
        </p>
        <Input
          className=""
          value=""
          register={register}
          error={errors?.matKhau?.message as string}
          placeholder=""
          name="matKhau"
          type="password"
        ></Input>
        <p className="text-pinkTheme mt-[5px]">Forgot your password ?</p>
        <div className="mt-40">
          {!isLoading ? (
            <div className="">
              <button
                disabled={false}
                className="text-white bg-pinkTheme rounded-[5px] font-500  text-20 w-full p-10"
              >
                Đăng nhập
              </button>
            </div>
          ) : (
            <button
              disabled={true}
              className="text-white  justify-center bg-slate-400 font-500 rounded text-20 w-full p-10"
            >
              Sign In
              <LoadingOutlined className="ml-2" />
            </button>
          )}
        </div>
        <div className="flex items-center mt-[10px] space-x-[20px] ">
          <div className="w-[50%] bg-gray-300 h-[2px] "></div>
          <span className="text-[20px]">Or</span>
          <div className="w-[50%] bg-gray-300 h-[2px] "></div>
        </div>
        <div className="mt-[10px]">
          <div className="grid grid-cols-3 gap-x-[10px]">
            <div className="border border-gray-600 flex   items-center rounded-[5px] hover:bg-pinkTheme transition-all hover:text-white cursor-pointer hover:border-pinkTheme justify-center p-[10px]">
              <GoogleOutlined className="text-[25px]" />
            </div>
            <div className="border border-gray-600 flex items-center rounded-[5px] hover:bg-pinkTheme transition-all hover:text-white cursor-pointer hover:border-pinkTheme justify-center p-[10px]">
              <GithubOutlined className="text-[25px]" />
            </div>
            <div className="border border-gray-600 flex items-center rounded-[5px] hover:bg-pinkTheme transition-all hover:text-white cursor-pointer hover:border-pinkTheme justify-center p-[10px]">
              <TwitterOutlined className="text-[25px]" />
            </div>
          </div>
        </div>
        <div className="my-[20px]">
          <div className="flex justify-center space-x-3 items-center">
            <span className="text-gray-500">Chưa có tài khoản?</span>
            <span
              onClick={() => navigate(PATH.resgister)}
              className="text-pinkTheme text-[18px] underline cursor-pointer"
            >
              {" "}
              Đăng ký
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};
