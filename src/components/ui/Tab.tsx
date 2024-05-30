import { useRef, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ListRapPopUp from "./ListRapPopUp";
export const Tab = ({ heThongRapChieu }) => {
  const [active, setActive] = useState(0);
  const [detailRap, setDetailRap] = useState(0);
  const navigate = useNavigate();
  const listRapRef = useRef<HTMLDialogElement>();
  return (
    <section className="mx-auto w-[90%] max-sm:mt-5 mt-12 rounded-lg bg-white border shadow-md ">
      <ListRapPopUp
        heThongRap={heThongRapChieu[active]}
        detailRap={detailRap}
        setDetailRap={setDetailRap}
        listRapRef={listRapRef}
      />
      <div>
        <div className="p-20 max-lg:hidden">
          <div className="flex space-x-7 mt-5">
            {heThongRapChieu?.map((heThong, i) => {
              return (
                <div>
                  <div
                    onClick={() => {
                      setActive(i);
                      setDetailRap(0);
                    }}
                    className="flex flex-col cursor-pointer items-center"
                  >
                    <div
                      className={`border p-3 rounded-md  ${
                        active === i ? "border-pinkTheme" : ""
                      }`}
                    >
                      <img src={heThong.logo} className="h-14 w-14" alt="" />
                    </div>
                    <p
                      className={`text-base text-blackTheme ${
                        active === i ? "text-pinkTheme font-bold" : ""
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
        <Swiper
          navigation={false}
          pagination={true}
          modules={[Navigation]}
          slidesPerView={3}
          className="pt-5 lg:hidden"
          spaceBetween={10}
          breakpoints={{
            450: {
              slidesPerView: 4,
            },
            640: {
              slidesPerView: 5,
            },
          }}
        >
          {heThongRapChieu?.map((heThong, i) => {
            return (
              <SwiperSlide>
                <div
                  onClick={() => {
                    setActive(i);
                    setDetailRap(0);
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
                      className="h-14 w-14 max-sm:w-9 max-sm:h-9"
                      alt=""
                    />
                  </div>
                  <p
                    className={`text-base text-blackTheme ${
                      active === i ? "text-pinkTheme font-bold" : ""
                    }`}
                  >
                    {heThong.tenHeThongRap.length > 10
                      ? heThong.tenHeThongRap.slice(0, 6) + "..."
                      : heThong.tenHeThongRap}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex py-5">
          <div className="border-t max-2xl:hidden border-r h-[600px] overflow-y-scroll w-[550px]">
            <div className="p-5">
              <div className="flex border items-center justify-between w-full px-5 py-3 rounded outline-none">
                <input
                  type="text"
                  className="outline-none flex-1"
                  placeholder="Tìm theo cụm rạp..."
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
            <div>
              {heThongRapChieu[active]?.lstCumRap.map((item, i) => {
                const hr = i !== heThongRapChieu[active]?.lstCumRap.length;
                return (
                  <div className=" " onClick={() => setDetailRap(i)}>
                    {hr && <hr />}
                    <div
                      className={`p-5 hover:bg-gray-100 cursor-pointer justify-between flex items-center ${
                        detailRap === i ? "bg-pinkTheme bg-opacity-10" : ""
                      }`}
                    >
                      <div className="flex space-x-5 items-center">
                        <div className="border rounded-md p-3">
                          <img
                            src={heThongRapChieu[active]?.logo}
                            className="h-9"
                            alt=""
                          />
                        </div>
                        <p className="text-lg font-medium">{item.tenCumRap}</p>
                      </div>
                      <div>
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
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-t flex-1 h-[600px]  overflow-auto ">
            <div
              onClick={() => listRapRef.current.showModal()}
              className="flex cursor-pointer p-5 items-center space-x-3"
            >
              <div className="">
                <div className="rounded-md border p-3 max-sm:p-8">
                  <img
                    src={heThongRapChieu[active]?.logo}
                    className="h-9 max-sm:h-7"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xl font-600 max-sm:text-base">
                  <span className="max-sm:hidden">Lịch chiếu phim tại</span>
                  {heThongRapChieu[active]?.lstCumRap[detailRap]?.tenCumRap}
                </p>
                <span className="break-words max-sm:text-sm text-lg text-blackTheme line-clamp-6">
                  {heThongRapChieu[active]?.lstCumRap[detailRap]?.diaChi}
                </span>
              </div>
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
                className="lucide lucide-chevron-down max-sm:w-[16px]"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <hr />
            <div>
              <div className="space-y-5">
                {heThongRapChieu[active]?.lstCumRap[
                  detailRap
                ].danhSachPhim?.map((phim, index) => {
                  return (
                    <div className="">
                      <div
                        className="p-5 flex space-x-5 items-start max-sm:text-base"
                        key={index}
                      >
                        <div
                          onClick={() => navigate(`/details/${phim.maPhim}`)}
                          className=""
                        >
                          <img
                            src={phim.hinhAnh}
                            className="w-[200px] hover:scale-105 rounded-lg max-lg:w-[120px] max-sm:w-[100px] max-lg:h-auto transition-all cursor-pointer object-cover h-full"
                            alt=""
                          />
                        </div>
                        <div className="space-y-5  max-lg:space-y-3 max-sm:space-y-8  flex-1">
                          {phim.hot && (
                            <button className="bg-[#006ee6] max-sm:text-sm p-2 px-3 max-sm:px-8 rounded-md font-medium text-white">
                              Hot
                            </button>
                          )}
                          {!phim.hot && (
                            <button className="bg-[#9b2020] text-base max-sm:text-sm p-2 max-sm:px-8 px-3 rounded-md font-medium text-white">
                              Phim hay
                            </button>
                          )}
                          <p className="text-xl font-medium max-sm:text-base">
                            {phim.tenPhim}
                          </p>
                          <p className="text-lg">
                            <span className="text-blackTheme max-sm:hidden font-medium">
                              {" "}
                              Trạng thái :{" "}
                            </span>
                            {(phim.sapChieu && (
                              <span className="font-bold max-sm:text-base text-pinkTheme uppercase">
                                Sắp chiếu
                              </span>
                            )) ||
                              (phim.dangChieu && (
                                <span className="font-bold max-sm:text-base text-pinkTheme uppercase">
                                  Đang chiếu
                                </span>
                              ))}{" "}
                            {!phim.sapChieu && !phim.dangChieu && (
                              <span className="text-xl uppercase max-sm:text-base font-bold text-[#9b2020]">
                                chưa công bố
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="px-5">
                        <h3 className="font-600 text-lg max-sm:text-base text-blackTheme">
                          2D có lồng phụ đề
                        </h3>
                        <div className="grid max-2xl:grid-cols-3 grid-cols-4 max-sm:grid-cols-3 max-[450px]:grid-cols-2 max-md:gap-3 gap-5 py-10">
                          {phim.lstLichChieuTheoPhim
                            .slice(0, 6)
                            .map((item, i) => {
                              return (
                                <button
                                  onClick={() =>
                                    navigate(`/checkout/${item.maLichChieu}`)
                                  }
                                  key={i}
                                  className="border 
                                        text-[#006ee6] transition-all space-x-2 py-8 max-md:p-2 rounded hover:text-white hover:bg-[#006ee6] border-[#006ee6]"
                                >
                                  <span className="font-bold max-sm:text-sm">
                                    {" "}
                                    {moment(item.ngayChieuGioChieu).format(
                                      "DD/MM/YYYY"
                                    )}
                                  </span>
                                  <span className="max-lg:hidden">~</span>
                                  <span className="max-lg:hidden">
                                    {" "}
                                    {moment(item.ngayChieuGioChieu).format(
                                      "hh:mm"
                                    )}
                                  </span>
                                </button>
                              );
                            })}
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};
