// import { useEffect } from "react";
// import { Tabs } from "antd";
// import styled from "styled-components";
// import { useSelector } from "react-redux";
// import { RootState, useAppDispatch } from "store";
// import { Button, Input } from "components/ui";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { AccountSchema, AccountSchemaType } from "schema";
// import { upDateThunk } from "store/CapNhatNguoiDung/Thunk";
// import _ from "lodash";
// import moment from "moment";
// import { useNavigate } from "react-router-dom";
// import { PATH } from "constant";
import { useEffect, useRef, useState } from "react";
import { getLichSuDatVeThunk } from "store/GetLichSuVeDat/Thunk";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import moment from "moment";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "components/ui";
import { upDateThunk } from "store/CapNhatNguoiDung/Thunk";
import { InforSchema, InforSchemaType } from "schema/InforSchema";
import Loading from "components/ui/Loading";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// const AccountTemplates = () => {
//   const navigate = useNavigate();
//   const { LichSuDatVe } = useSelector(
//     (state: RootState) => state.LichSuVeToolkit
//   );
//   const { isLoading } = useSelector(
//     (state: RootState) => state.CapNhatNguoiDungToolKit
//   );
//   const { language } = useSelector(
//     (state: RootState) => state.setUpNgonNguToolkit
//   );

//   const dispatch = useAppDispatch();
//   const {
//     handleSubmit,
//     register,
//     reset,
//     formState: { errors },
//   } = useForm({
//     mode: "onChange",
//     resolver: zodResolver(AccountSchema),
//   });

//   const onSubmit: SubmitHandler<AccountSchemaType> = async (data) => {
//     await dispatch(upDateThunk(data));
//     dispatch(getLichSuDatVeThunk());
//   };
//   useEffect(() => {
//     reset({ ...LichSuDatVe, soDt: LichSuDatVe?.soDT });
//     if (!localStorage.getItem("USER")) {
//       navigate(PATH.login);
//     }
//   }, [LichSuDatVe, reset]);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="!text-black">
//         <label className="block  mb-2 text-sm font-medium !text-white">
//           {language == "en" ? "Account" : "Tài Khoản"}
//         </label>
//         <Input
//           register={register}
//           name="taiKhoan"
//           type="text"
//           error={errors?.taiKhoan?.message as string}
//           className="bg-gray-50 border border-gray-300  !text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         />
//       </div>
//       <div className="!text-black">
//         <label className="block mb-2 text-sm  font-medium text-white my-[10px]">
//           {language == "en" ? "Full name" : "Họ tên"}
//         </label>
//         <Input
//           name="hoTen"
//           register={register}
//           type="text"
//           error={errors?.hoTen?.message as string}
//           className="bg-gray-50 border border-gray-300 !text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         />
//       </div>
//       <div className="!text-black">
//         <label className="block mb-2 text-sm font-medium text-white my-[10px]">
//           {language == "en" ? "Phone number" : "Họ tên"}
//         </label>
//         <Input
//           name="soDt"
//           register={register}
//           error={errors?.soDt?.message as string}
//           type="text"
//           className="bg-gray-50 border border-gray-300 !text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         />
//       </div>
//       <div className="!text-black">
//         <label className="block mb-2 text-sm font-medium text-white my-[10px]">
//           {language == "en" ? "Email" : "Email"}
//         </label>
//         <Input
//           name="email"
//           register={register}
//           error={errors?.email?.message as string}
//           type="text"
//           className="bg-gray-50 border border-gray-300 !text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         />
//       </div>
//       <div className="!text-black">
//         <label className="block mb-2 text-sm font-medium text-white my-[10px]">
//           {language == "en" ? "Group code" : "Mã nhóm"}
//         </label>
//         <Input
//           name="maNhom"
//           register={register}
//           error={errors?.maNhom?.message as string}
//           type="text"
//           className="bg-gray-50 border border-gray-300 !text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         />
//       </div>
//       <div className="!text-black">
//         <label className="block mb-2 text-sm font-medium text-white my-[10px]">
//           {language == "en" ? "User type" : "Loại người dùng"}
//         </label>
//         <Input
//           name="maLoaiNguoiDung"
//           register={register}
//           error={errors?.maLoaiNguoiDung?.message as string}
//           type="text"
//           className="bg-gray-50 border border-gray-300 !text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         />
//         <label className="block mb-2 text-sm font-medium text-white my-[10px]">
//           {language == "en" ? "Password" : "Mật khẩu"}
//         </label>
//         <Input
//           name="matKhau"
//           register={register}
//           error={errors?.matKhau?.message as string}
//           type="text"
//           className="bg-gray-50 border border-gray-300 !text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         />
//       </div>
//       <div className="text-left mt-10">
//         <Button
//           disabled={isLoading}
//           htmlType="submit"
//           type="primary"
//           className=" bg-slate-500"
//         >
//           {language == "en" ? "Save change" : "Lưu thay đổi"}
//         </Button>
//       </div>
//     </form>
//   );
// };
// const TabsAccount = () =
//   const { LichSuDatVe } = useSelector(
//     (state: RootState) => state.LichSuVeToolkit
//   );
//   const renderLichSuVeDat = () => {
//     return LichSuDatVe?.thongTinDatVe?.map((item) => {
//       return (
//         <div className="p-2 lg:w-[50%]  md:w-1/2 w-full text-xl">
//           <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
//             <img
//               alt="team"
//               className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
//               src={item.hinhAnh}
//             />
//             <div className="flex-grow">
//               <h2 className="text-red-500 text-2xl title-font font-medium">
//                 {item.tenPhim}
//               </h2>
//               <p className="text-gray-500 ">
//                 <span className="font-600 ">Ngày chiếu</span>:{" "}
//                 {moment(item.ngayDat).format("DD-MM-YYYY")}{" "}
//                 <span className="font-600 ">Giờ chiếu</span> :{" "}
//                 {moment(item.ngayDat).format("hh:mm")}
//               </p>

//               <p>
//                 Địa điểm : {_.first(item.danhSachGhe).tenHeThongRap}{" "}
//                 {_.first(item.danhSachGhe).tenRap}{" "}
//               </p>
//               <p>
//                 Số ghế đã chọn
//                 {item?.danhSachGhe.map((soGhe) => {
//                   return (
//                     <span className="mx-4 text-green-500">{soGhe.tenGhe}</span>
//                   );
//                 })}
//               </p>
//             </div>
//           </div>
//         </div>
//       );
//     });
//   };
//   const { language } = useSelector(
//     (state: RootState) => state.setUpNgonNguToolkit
//   );
//   return (
//     <div>
//       <TabsAcc className="container mx-auto h-[100vh] p-[150px]  ">
//         <Tabs
//           tabPosition="left"
//           className="mt-100 !text-white text-[25px] font-500"
//           defaultActiveKey="1"
//           items={[
//             {
//               label:
//                 language == "en" ? "Personal information" : "Thông tin cá nhân",
//               key: "1",
//               className: "",
//               children: <AccountTemplates />,
//             },
//             {
//               label: language == "en" ? "Tickets purchased" : "Vé đã mua",
//               key: "2",
//               children: (
//                 <div className="flex flex-wrap !text-white">
//                   {renderLichSuVeDat()}
//                 </div>
//               ),
//             },
//           ]}
//         />
//       </TabsAcc>
//     </div>
//   );
// };
// export default TabsAccount;
// const TabsAcc = styled.div`
//   /* .css-dev-only-do-not-override-17a39f8.ant-tabs > .ant-tabs-nav {
//     margin-top: 200px !important;
//   } */
// `;

const AccountTemplates = () => {
  const { LichSuDatVe, isLoading } = useSelector(
    (state: RootState) => state.LichSuVeToolkit
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // handelForm
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(InforSchema),
  });
  const handelDetailVe = (phim: any) => {
    modalRef?.current?.showModal();
    setMaVe(phim);
  };
  const modalRef = useRef<HTMLDialogElement>(null);
  const [maVe, setMaVe] = useState<any>();
  const onSubmit: SubmitHandler<InforSchemaType> = async (data) => {
    await dispatch(
      upDateThunk({
        ...data,
        maNhom: LichSuDatVe?.maNhom,
        taiKhoan: LichSuDatVe?.taiKhoan,
        maLoaiNguoiDung: LichSuDatVe?.maLoaiNguoiDung,
        matKhau: LichSuDatVe?.matKhau,
      })
    );
    dispatch(getLichSuDatVeThunk());
  };
  const heartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#FE251B"
      color="#FE251B"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-heart"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
  const penIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide cursor-pointer lucide-pencil"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
  useEffect(() => {
    dispatch(getLichSuDatVeThunk());
    if (!localStorage.getItem("USER")) return navigate("/login");
  }, []);
  if (isLoading) return <Loading />;
  return (
    <AccountCSS>
      <section className="w-[90%] mx-auto space-y-5">
        <dialog ref={modalRef} className="modal">
          <div className="bg-white modal-box w-[1440px]">
            <div className="space-y-3 font-medium text-lg">
              <h3 className="text-pinkTheme font-medium text-center text-xl">
                {maVe?.tenPhim}
              </h3>
              <img
                className="w-full rounded-xl h-[400px] object-cover"
                src={maVe?.hinhAnh}
                alt=""
              />
              <div className="space-y-3">
                <p className="text-orange-500">
                  <span className="text-black">Địa điểm:</span>{" "}
                  {maVe?.danhSachGhe[0].tenHeThongRap} -{" "}
                  <span>{maVe?.danhSachGhe[0].tenRap}</span>
                </p>
                <p>
                  Thời lượng phim
                  <span className="text-green-500">
                    : {maVe?.thoiLuongPhim} phút
                  </span>
                </p>
                <p>
                  <span>Ghế bạn chọn: </span>
                  {maVe?.danhSachGhe.map((ghe) => {
                    return (
                      <span className="text-pinkTheme mr-3">{ghe.tenGhe}</span>
                    );
                  })}
                </p>
                <p>
                  Tổng tiền:{" "}
                  <span className="font-bold">
                    {(maVe?.danhSachGhe.length * maVe?.giaVe).toLocaleString()}
                    VND
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <div className="flex space-x-5 justify-center ">
          <div className="left shadow flex-2  rounded-xl  bg-white  p-24 px-12">
            <div className="flex text-lg flex-col space-y-3 justify-center items-center">
              <p className="flex items-center mb-5 space-x-2">
                <p className="typewriter">
                  {" "}
                  Xin chào,{" "}
                  <span className="font-medium">{LichSuDatVe?.hoTen}</span>
                </p>
                <span>{heartIcon}</span>
              </p>
              <img
                className="h-[150px]"
                src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
                alt=""
              />
              <p>
                Tài khoản:{" "}
                <span className="font-medium">{LichSuDatVe?.taiKhoan}</span>
              </p>
              <p>
                Phân loại:{" "}
                <span className="font-medium">
                  {LichSuDatVe?.loaiNguoiDung.tenLoai}
                </span>
              </p>
            </div>
          </div>
          <div className="right flex-1 bg-white shadow  rounded-xl space-y-5">
            <div className="text-lg space-y-5 p-14 px-12">
              <h3
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ee00ff 0%, #fbff00 100%)",
                  color: "transparent",
                  WebkitBackgroundClip: "text",
                }}
                className="font-medium text-xl"
              >
                Thông tin chi tiết
              </h3>

              <div className="flex space-x-3">
                <p className="flex-1">
                  Họ tên:{" "}
                  <span className="font-medium">{LichSuDatVe?.hoTen}</span>
                  <div className="w-[95%] mt-3">
                    <Input
                      name="hoTen"
                      register={register}
                      error={errors?.hoTen?.message as string}
                      type="text"
                    />
                  </div>
                </p>
                <div>
                  <span>{penIcon}</span>
                </div>
              </div>
              <div className="flex items-center">
                <p className="flex-1">
                  Email:{" "}
                  <span className="font-medium">{LichSuDatVe?.email}</span>
                  <div className="w-[95%] mt-3">
                    <Input
                      name="email"
                      register={register}
                      error={errors?.email?.message as string}
                      type="text"
                    />
                  </div>
                </p>
                <span>{penIcon}</span>
              </div>
              <div className="flex items-center">
                <p className="flex-1">
                  {" "}
                  Số điện thoại:{" "}
                  <span className="font-medium">{LichSuDatVe?.soDT}</span>
                  <div className="w-[95%] mt-3">
                    <Input
                      name="soDt"
                      register={register}
                      error={errors?.soDt?.message as string}
                      type="text"
                    />
                  </div>
                </p>
                <span>{penIcon}</span>
              </div>
              <div>
                <button
                  onClick={handleSubmit(onSubmit)}
                  className="bg-pinkTheme  hover:bg-pink-700 px-5 py-3 text-white font-medium rounded"
                >
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl space-y-5 shadow p-[24px]">
          <p
            style={{
              backgroundImage:
                "linear-gradient(to right, #ee00ff 0%, #fbff00 100%)",
              color: "transparent",
              WebkitBackgroundClip: "text",
            }}
            className="font-medium text-xl"
          >
            Lịch sử đặt vé của bạn
          </p>
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            slidesPerView={3}
            spaceBetween={20}
          >
            {LichSuDatVe?.thongTinDatVe.map((card) => {
              return (
                <SwiperSlide>
                  <div className="flex">
                    <div className="flex flex-1 items-center space-x-5">
                      <img
                        className="rounded-xl h-[150px] object-cover"
                        src={card.hinhAnh}
                        alt=""
                      />
                      <div className="space-y-3 font-medium">
                        <h3 className="text-pinkTheme font-bold">
                          {card.tenPhim}
                        </h3>
                        <p>
                          Ngày đặt: {moment(card?.ngayDat).format("DD/MM/YYYY")}
                        </p>

                        <p>
                          Địa điểm: {card.danhSachGhe[0].tenHeThongRap} -{" "}
                          <span className="font-bold">
                            {card.danhSachGhe[0].tenRap}{" "}
                          </span>
                        </p>
                        <p>
                          Thời lượng phim:{" "}
                          <span className="text-green-500">
                            {card?.thoiLuongPhim} phút
                          </span>{" "}
                        </p>
                        <div>
                          <button
                            onClick={() => handelDetailVe(card)}
                            className="text-pinkTheme underline"
                          >
                            <span>Chi tiết vé</span>
                          </button>
                        </div>
                      </div>
                      <div className="bg-pinkTheme hover:bg-pink-700 rounded text-white font-medium flex items-center justify-center"></div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </AccountCSS>
  );
};
const AccountCSS = styled.div`
  .typewriter h1 {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;
export default AccountTemplates;
