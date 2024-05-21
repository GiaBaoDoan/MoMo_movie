import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { getDetailFilm } from "store/GetDetailFilm/Thunk";
import "../assets/Css/circle.css";
import moment from "moment";
import "../assets/style.css";
import "../assets/Scss/BlurBG.scss";
import { useNavigate, useParams } from "react-router-dom";
import { Spin } from "components/ui/LoadingPages";
import Sale from "components/ui/Sale";
import Event from "components/ui/Event";
import { getListFilmThunk } from "store/QuanLyFilm/Thunk";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import Loading from "components/ui/Loading";
const Details = () => {
  const [isOpen, setOpen] = useState(false);
  const { DetailFilm, isFetchDetail } = useSelector(
    (state: RootState) => state.GetDetail
  );
  const { listFilm } = useSelector(
    (state: RootState) => state.quanLyPhimToolKit
  );
  const [trailer, setTrailer] = useState("");
  const [showMore, setShowMore] = useState(0);
  const [showRap, setShowRap] = useState(3);
  const [readMore, setReadMore] = useState(false);
  const [active, setActive] = useState(0);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [moreFilm, setMoreFilm] = useState(5);
  useEffect(() => {
    dispatch(getDetailFilm(id));
    dispatch(getListFilmThunk(""));
  }, [dispatch, id]);
  const handelMoreFilm = () => {
    setMoreFilm(moreFilm + 5);
  };
  const handelShowRap = () => {
    setShowRap(showRap + 5);
  };
  const handelText = (text: string) => {
    return text?.length > 300 ? (
      !readMore ? (
        <p onClick={() => setReadMore(true)}>
          {text.slice(0, 200)}{" "}
          <span className="text-yellow-400 cursor-pointer hover:underline">
            ...Xem thêm
          </span>
        </p>
      ) : (
        <p onClick={() => setReadMore(false)}>
          {text}{" "}
          <span className="text-yellow-400 underline cursor-pointer">
            Thu gọn
          </span>
        </p>
      )
    ) : (
      text
    );
  };
  if (isFetchDetail) return <Loading />;

  return (
    <section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={trailer.replace("https://www.youtube.com/watch?v=", "")}
        onClose={() => setOpen(false)}
      />
      <div className="w-[90%] mx-auto py-9">
        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-home"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
          <h4 className="text-lg uppercase">Chi tiết phim</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
          <p className="text-lg font-medium uppercase text-blackTheme ">
            {DetailFilm?.tenPhim}
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${DetailFilm?.hinhAnh})`,
          backgroundSize: "cover",
          backgroundRepeat: "none",
        }}
        className="h-full py-24 relative"
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 1) 150px, rgba(0, 0, 0, .6) 100%)",
          }}
          className="overlay top-0  absolute left-0 w-full h-full z-2 bg-opacity-80"
        ></div>
        <div className="w-[90%] mx-auto">
          <div className="flex relative space-x-14 z-2">
            <div className="relative w-[400px] h-[500px]">
              <img
                src={DetailFilm?.hinhAnh}
                className="rounded-lg z-2 h-full w-full relative object-cover"
                alt=""
              />
              <div
                onClick={() => {
                  setOpen(true);
                  setTrailer(DetailFilm.trailer);
                }}
              >
                <div className="absolute top-1/2 left-1/2 w-24 hover:scale-105 cursor-pointer transition-all h-24 flex justify-center items-center bg-black/20 rounded-full border-[4px] border-white -translate-x-1/2  -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="white"
                    color="white"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="infor flex-1 space-y-5">
              <p>
                {DetailFilm?.hot && (
                  <button className="bg-[#006ee6] p-2 px-3 rounded-md font-medium text-white">
                    Hot
                  </button>
                )}
                {!DetailFilm?.hot && (
                  <button className="bg-[#9b2020] p-2 px-3 rounded-md font-medium text-white">
                    Phim Hay
                  </button>
                )}
              </p>

              <p className="text-white capitalize text-5xl font-bold">
                {DetailFilm?.tenPhim}
              </p>
              <div className="text-white flex items-center space-x-[6px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  color="gold"
                  viewBox="0 0 24 24"
                  fill="gold"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="text-white text-4xl font-bold">
                  {DetailFilm?.danhGia}
                </span>
                <div className="text-white/70 text-sm">
                  <p>50k</p>
                  <p>đánh giá</p>
                </div>
              </div>
              <div className="text-lg flex space-x-3">
                <p className="text-white/80">Trạng thái</p>
                <p className="text-white text-lg font-bold">
                  {DetailFilm?.sapChieu && (
                    <span className="uppercase">Sắp khởi chiếu</span>
                  )}
                  {DetailFilm?.dangChieu && (
                    <span className="uppercase">Đang công chiếu</span>
                  )}
                </p>
              </div>
              <div>
                <span className="text-xl text-white font-bold">Nội dung</span>
                <p className="text-xl text-opacity-70 text-white mt-3">
                  {handelText(DetailFilm?.moTa)}
                </p>
              </div>

              <div className="flex space-x-5">
                <div className="text-white text-lg">
                  <p className="text-white/70">Ngày chiếu</p>{" "}
                  <p className="font-bold mt-2">
                    {moment(DetailFilm?.ngayKhoiChieu).format("DD/MM/YYYY")}
                  </p>
                </div>
                <div className="text-white text-lg">
                  <p className="text-white/70">Thể loại</p>{" "}
                  <p className="font-bold mt-2">Lãng mạng</p>
                </div>
                <div className="text-white text-lg">
                  <p className="text-white/70">Quốc gia</p>{" "}
                  <p className="font-bold mt-2">Việt Nam</p>
                </div>
              </div>
              <div className="flex items-center space-x-5">
                <div className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-full border-pink-600 flex justify-center items-center border-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                      color="white"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-play"
                    >
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </div>
                  <p
                    onClick={() => {
                      setOpen(true);
                      setTrailer(DetailFilm.trailer);
                    }}
                    className="font-medium hover:underline cursor-pointer text-white"
                  >
                    Xem Trailer
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-full border-yellow-400 flex justify-center items-center border-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      color="white"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <p className="font-medium hover:underline cursor-pointer  text-white">
                    Xem Review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-6  py-12 space-x-5">
          <div className="col-span-4 ">
            {DetailFilm?.heThongRapChieu.length > 0 ? (
              <div className="w-[90%]  mx-auto">
                <h3 className="text-2xl font-bold ">
                  Lịch chiếu phim {DetailFilm?.tenPhim}
                </h3>
                <section className="mt-5 rounded-lg   bg-white border shadow-md ">
                  <div>
                    <div className="p-5">
                      <div className="flex space-x-7 mt-5">
                        {DetailFilm?.heThongRapChieu?.map((heThong, i) => {
                          return (
                            <div>
                              <div
                                onClick={() => {
                                  setActive(i);
                                  setShowMore(0);
                                }}
                                className="flex flex-col cursor-pointer items-center"
                              >
                                <div
                                  className={`border p-3 rounded-md  ${
                                    active === i ? "border-pinkTheme" : ""
                                  }`}
                                >
                                  <img
                                    src={heThong.logo}
                                    className="h-14 w-14"
                                    alt=""
                                  />
                                </div>
                                <p
                                  className={`text-base text-blackTheme ${
                                    active === i
                                      ? "text-pinkTheme font-bold"
                                      : ""
                                  }`}
                                >
                                  {heThong.tenHeThongRap.length > 10
                                    ? heThong.tenHeThongRap.slice(0, 6) + "..."
                                    : heThong.tenHeThongRap}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <hr />
                    <div>
                      {DetailFilm?.heThongRapChieu[active]?.cumRapChieu
                        .slice(0, showRap)
                        .map((rapChieu, i) => {
                          return (
                            <div>
                              <div
                                className="cursor-pointer hover:bg-black/5 flex justify-between items-center"
                                onClick={() => setShowMore(i)}
                              >
                                <div className="flex flex-1 p-20 space-x-5 items-center text-lg text-blackTheme">
                                  <img
                                    src={rapChieu.hinhAnh}
                                    className="h-16 rounded-md"
                                    alt=""
                                  />
                                  <div className="space-y-3">
                                    <p className="font-bold text-xl">
                                      {rapChieu.tenCumRap}
                                    </p>
                                    <p className="font-medium">
                                      {rapChieu.diaChi}
                                    </p>
                                    <p className="font-medium">
                                      <span>Tên rạp: </span>
                                      <span>
                                        {rapChieu.lichChieuPhim[0].tenRap}
                                      </span>
                                    </p>

                                    <p>
                                      <span className="font-medium">
                                        Thời lượng phim{": "}
                                      </span>
                                      <span className="text-green-500 font-medium">
                                        {rapChieu.lichChieuPhim[0].thoiLuong}{" "}
                                        phút
                                      </span>
                                    </p>
                                    <p className="font-medium flex space-x-5 items-center">
                                      <span>
                                        Giá vé:{" "}
                                        <span className="text-pinkTheme font-medium">
                                          {rapChieu.lichChieuPhim[0].giaVe.toLocaleString()}
                                          VND
                                        </span>{" "}
                                      </span>

                                      <button
                                        onClick={() =>
                                          navigate(`${rapChieu.lichChieuPhim}`)
                                        }
                                        className="bg-pinkTheme hover:bg-pink-700  font-medium text-white px-3 rounded"
                                      >
                                        Đặt vé ngay
                                      </button>
                                    </p>
                                  </div>
                                </div>
                                {showMore === i ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-chevron-down"
                                  >
                                    <path d="m6 9 6 6 6-6" />
                                  </svg>
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-chevron-right"
                                  >
                                    <path d="m9 18 6-6-6-6" />
                                  </svg>
                                )}
                              </div>
                              {showMore == i && (
                                <div className="px-5 pb-5">
                                  <p className="text-xl font-bold text-blackTheme">
                                    Lịch chiếu phim
                                  </p>
                                  <div className="flex flex-wrap gap-10 mt-3">
                                    {rapChieu?.lichChieuPhim
                                      .slice(0, 5)
                                      .map((lichChieu, i) => {
                                        return (
                                          <div
                                            onClick={() =>
                                              navigate(
                                                `/checkout/${lichChieu?.maLichChieu}`
                                              )
                                            }
                                          >
                                            <button
                                              key={i}
                                              className="border 
                                              text-[#006ee6] transition-all p-3 rounded hover:text-white hover:bg-[#006ee6] border-[#006ee6]"
                                            >
                                              <span className=" font-medium">
                                                {" "}
                                                {moment(
                                                  lichChieu?.ngayChieuGioChieu
                                                ).format("DD/MM/YYYY")}
                                              </span>

                                              <span className="mx-3">~</span>
                                              <span className="">
                                                {" "}
                                                {moment(
                                                  lichChieu?.ngayChieuGioChieu
                                                ).format("hh:mm")}
                                              </span>
                                            </button>
                                          </div>
                                        );
                                      })}
                                  </div>
                                </div>
                              )}

                              <hr />
                            </div>
                          );
                        })}
                      {DetailFilm?.heThongRapChieu[active]?.cumRapChieu.length >
                        5 &&
                        (showRap <
                        DetailFilm?.heThongRapChieu[active]?.cumRapChieu
                          .length ? (
                          <div className="flex justify-center p-5 items-center">
                            <button
                              onClick={handelShowRap}
                              className="border rounded-full border-pinkTheme font-medium text-pinkTheme px-5 py-2"
                            >
                              Xem Thêm
                            </button>
                          </div>
                        ) : (
                          <div className="flex justify-center p-5 items-center">
                            <button
                              onClick={() => setShowRap(3)}
                              className="border rounded-full border-pinkTheme font-medium text-pinkTheme px-5 py-2"
                            >
                              Thu gọn
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>
                </section>
              </div>
            ) : (
              <p className="text-center text-xl font-bold">
                Hiện chưa có trên các Rạp chiếu!!
              </p>
            )}

            <Sale />
            <Event />
          </div>
          <div className="col-span-2">
            <h3 className="font-bold text-2xl">Phim đang chiếu</h3>
            <div className="mt-5 space-y-5">
              {listFilm.slice(0, moreFilm).map((film, index) => {
                return (
                  <div onClick={() => navigate(`/details/${film.maPhim}`)}>
                    <div className="flex space-x-5">
                      <div className="relative">
                        <img
                          src={film.hinhAnh}
                          className="w-[100px] hover:scale-110 cursor-pointer transition-all h-[150px] object-cover rounded-lg"
                          alt=""
                        />
                        <div className="number left-10 absolute -bottom-0 font-bold text-xl z-1">
                          <p
                            style={{ textShadow: "3px 3px black" }}
                            className="text-gray-200 "
                          >
                            {index + 1}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {film.hot ? (
                          <button className="bg-[#006ee6] uppercase p-[4px] text-sm font-medium  rounded-md text-white">
                            Hot
                          </button>
                        ) : (
                          <button className="bg-[#9b2020] uppercase p-[4px] text-sm   rounded-md font-medium text-white">
                            Hay
                          </button>
                        )}
                        <p className="font-bold text-lg capitalize">
                          {film.tenPhim}
                        </p>
                        <p className="text-pinkTheme font-bold uppercase">
                          Đang chiếu
                        </p>
                        <div className="flex space-x-[8px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="gold"
                            color="gold"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <p className="text-blackTheme font-medium">
                            {film.danhGia}
                          </p>
                        </div>
                      </div>
                    </div>
                    <br />
                    <hr />
                  </div>
                );
              })}
            </div>
            <div className="mt-5">
              {listFilm.length > 5 &&
                (moreFilm < listFilm.length ? (
                  <button
                    onClick={handelMoreFilm}
                    className="border rounded-full border-pinkTheme font-medium text-pinkTheme px-5 py-2"
                  >
                    Xem thêm
                  </button>
                ) : (
                  <button
                    onClick={() => setMoreFilm(5)}
                    className="border rounded-full border-pinkTheme font-medium text-pinkTheme px-5 py-2"
                  >
                    Thu gọn
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
