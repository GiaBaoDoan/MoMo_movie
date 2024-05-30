import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType } from "schema/LoginSchema";
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
import { toast } from "react-toastify";
export const Logins = ({ registerRef, loginRef }: any) => {
  const { isLoading } = useSelector(
    (state: RootState) => state.quanLyNguoiDungToolkit
  );
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
  });
  const dispacth = useAppDispatch();
  const onSubmit: SubmitHandler<LoginSchemaType> = async (value) => {
    await dispacth(LoginThunk(value))
      .unwrap()
      .then((_) => {
        toast.success("Đăng nhập thành công");
        loginRef.current.close();
      })
      .catch((err) => {
        toast.error(err?.response?.data?.content);
      });
  };
  return (
    <form
      className="bg-white h-full rounded-tr-xl rounded-br-xl py-5 max-sm:p-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl max-sm:text-xl font-600 text-pinkTheme text-center">
        Đăng nhập
      </h1>
      <div className="mt-5 max-sm:text-base">
        <p className="font-500 my-[5px]">
          {" "}
          <span className="text-red-500">*</span> Tài khoản
        </p>
        <Input
          register={register}
          error={errors?.taiKhoan?.message as string}
          name="taiKhoan"
          type="text"
          placeholder="Tài khoản"
        />
        <p className="font-500 my-[5px]">
          {" "}
          <span className="text-red-500">*</span> Mật khẩu
        </p>
        <Input
          register={register}
          error={errors?.matKhau?.message as string}
          placeholder="Mật khẩu"
          name="matKhau"
          type="password"
        ></Input>
        <p className="text-pinkTheme text-right mt-5">Quên mật khẩu?</p>
        <div className="mt-5">
          {!isLoading ? (
            <div>
              <button
                disabled={false}
                className="text-white bg-pinkTheme rounded-md font-500 text-xl max-sm:text-base w-full p-10"
              >
                Đăng nhập
              </button>
            </div>
          ) : (
            <button
              disabled={true}
              className="text-white  justify-center bg-slate-400 font-500 roundedtext-xl max-sm:text-base w-full p-10"
            >
              <LoadingOutlined className="ml-2" />
            </button>
          )}
        </div>
        <div className="flex items-center mt-10 space-x-5 ">
          <div className="w-1/2 bg-gray-300 h-[2px]"></div>
          <span className="text-xl max-sm:text-base">Or</span>
          <div className="w-1/2 bg-gray-300 h-[2px]"></div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-3 gap-x-10">
            <div className="border border-gray-600 flex items-center rounded-md hover:bg-pinkTheme transition-all hover:text-white cursor-pointer hover:border-pinkTheme justify-center p-10">
              <GoogleOutlined className="text-[25px] max-sm:text-2xl" />
            </div>
            <div className="border border-gray-600 flex items-center rounded-md hover:bg-pinkTheme transition-all hover:text-white cursor-pointer hover:border-pinkTheme justify-center p-10">
              <GithubOutlined className="text-[25px] max-sm:text-2xl" />
            </div>
            <div className="border border-gray-600 flex items-center rounded-md hover:bg-pinkTheme transition-all hover:text-white cursor-pointer hover:border-pinkTheme justify-center p-10">
              <TwitterOutlined className="text-[25px] max-sm:text-2xl" />
            </div>
          </div>
        </div>
        <div className="my-5 max-sm:text-base">
          <div className="flex justify-center space-x-3 items-center">
            <span className="text-gray-500">Chưa có tài khoản?</span>
            <span
              onClick={() => {
                registerRef?.current.showModal();
                loginRef?.current.close();
              }}
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
