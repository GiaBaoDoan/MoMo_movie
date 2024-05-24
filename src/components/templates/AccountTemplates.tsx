import { useEffect, useRef, useState } from "react";
import { getLichSuDatVeThunk } from "store/GetLichSuVeDat/Thunk";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
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
const AccountTemplates = () => {
  const { LichSuDatVe, isLoading } = useSelector(
    (state: RootState) => state.LichSuVeToolkit
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDialogElement>(null);
  const [maVe, setMaVe] = useState<any>();
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
  useEffect(() => {
    if (!localStorage.getItem("USER")) return navigate("/login");
    dispatch(getLichSuDatVeThunk());
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
                  <div className="mt-3">
                    <Input
                      name="hoTen"
                      register={register}
                      error={errors?.hoTen?.message as string}
                      type="text"
                    />
                  </div>
                </p>
              </div>
              <div className="flex items-center">
                <p className="flex-1">
                  Email:{" "}
                  <span className="font-medium">{LichSuDatVe?.email}</span>
                  <div className="mt-3">
                    <Input
                      name="email"
                      register={register}
                      error={errors?.email?.message as string}
                      type="text"
                    />
                  </div>
                </p>
              </div>
              <div className="flex items-center">
                <p className="flex-1">
                  {" "}
                  Số điện thoại:{" "}
                  <span className="font-medium">{LichSuDatVe?.soDT}</span>
                  <div className="mt-3">
                    <Input
                      name="soDt"
                      register={register}
                      error={errors?.soDt?.message as string}
                      type="text"
                    />
                  </div>
                </p>
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
