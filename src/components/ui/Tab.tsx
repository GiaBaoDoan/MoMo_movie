import { useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
export const Tab = ({ heThongRapChieu }) => {
  const [active, setActive] = useState(0);
  const [detailRap, setDetailRap] = useState(0);
  const navigate = useNavigate();
  return (
    <section className="mx-auto mt-14 w-[90%] rounded-lg  bg-white border shadow-md ">
      <div>
        <div className="p-20">
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
        <div className="flex py-5">
          <div className="border-t border-r h-[600px] overflow-y-scroll w-[550px]">
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
          <div className="border-t flex-1 h-[600px] overflow-auto ">
            <div className="flex p-5 items-center space-x-3">
              <div className="">
                <div className="rounded-md border p-3">
                  <img
                    src={heThongRapChieu[active]?.logo}
                    className="h-9"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xl font-600">
                  Lịch chiếu phim tại{" "}
                  {heThongRapChieu[active]?.lstCumRap[detailRap]?.tenCumRap}
                </p>
                <span className="break-words text-lg text-blackTheme line-clamp-4">
                  {heThongRapChieu[active]?.lstCumRap[detailRap]?.diaChi}
                </span>
              </div>
            </div>
            <hr />
            <div>
              <div className="space-y-5 ">
                {heThongRapChieu[active]?.lstCumRap[
                  detailRap
                ].danhSachPhim?.map((phim, index) => {
                  return (
                    <div className="">
                      <div className="p-5 flex space-x-5" key={index}>
                        <div
                          onClick={() => navigate(`/details/${phim.maPhim}`)}
                          className="overflow-hidden h-[300px] rounded-lg"
                        >
                          <img
                            src={phim.hinhAnh}
                            className="w-[200px] hover:scale-105 transition-all cursor-pointer object-cover h-full"
                            alt=""
                          />
                        </div>
                        <div className="space-y-5 flex-1">
                          {phim.hot && (
                            <button className="bg-[#006ee6] p-2 px-3 rounded-md font-medium text-white">
                              Hot
                            </button>
                          )}
                          {!phim.hot && (
                            <button className="bg-[#9b2020] p-2 px-3 rounded-md font-medium text-white">
                              Phim hay
                            </button>
                          )}
                          <p className="text-xl font-medium">{phim.tenPhim}</p>
                          <p className="text-lg">
                            <span className="text-blackTheme font-medium">
                              {" "}
                              Trạng thái :{" "}
                            </span>
                            {(phim.sapChieu && (
                              <span className="font-bold text-pinkTheme uppercase">
                                Sắp chiếu
                              </span>
                            )) ||
                              (phim.dangChieu && (
                                <span className="font-bold text-pinkTheme uppercase">
                                  Đang chiếu
                                </span>
                              ))}{" "}
                            {!phim.sapChieu && !phim.dangChieu && (
                              <span className="text-xl uppercase font-bold text-[#9b2020]">
                                chưa công bố
                              </span>
                            )}
                          </p>
                          <div>
                            <p className="font-600 text-lg">2D phụ đề</p>
                          </div>
                          <div>
                            <h3 className=" font-600 text-lg text-blackTheme">
                              Lịch chiếu phim:
                            </h3>
                            <div className="grid grid-cols-4 gap-5 py-10">
                              {phim.lstLichChieuTheoPhim
                                .slice(0, 10)
                                .map((item, i) => {
                                  return (
                                    <button
                                      onClick={() =>
                                        navigate(
                                          `/checkout/${item.maLichChieu}`
                                        )
                                      }
                                      key={i}
                                      className="border 
                                        text-[#006ee6]  transition-all p-3 rounded hover:text-white hover:bg-[#006ee6] border-[#006ee6]"
                                    >
                                      <span className="font-bold">
                                        {" "}
                                        {moment(item.ngayChieuGioChieu).format(
                                          "DD/MM/YYYY"
                                        )}
                                      </span>

                                      <span className="mx-3">~</span>
                                      <span className="">
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
