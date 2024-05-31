import { CloseOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { sortBy } from "lodash";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "store";
import { getVePhim } from "store/GetDanhSachDatVe/Thunk";
import { addGhe } from "store/GetDanhSachDatVe/slice";
import styled from "styled-components";
import { getLichSuDatVeThunk } from "store/GetLichSuVeDat/Thunk";
import Loading from "components/ui/Loading";
import Countdown from "components/ui/CountDown";
// checkout
const CheckoutTemplate = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { user } = useSelector(
    (state: RootState) => state.quanLyNguoiDungToolkit
  );
  const {
    danhSachVe,
    danhSachGheDangDat,
    isFetchListTicket,
    danhSachGheKhachDat,
  } = useSelector((state: RootState) => state.getVePhimToolkit);
  const { isLoading } = useSelector(
    (state: RootState) => state.ThongTinVeDatToolkit
  );
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getVePhim(id));
    dispatch(addGhe(null));
    getLichSuDatVeThunk();
  }, []);
  const handelPayment = () => {
    localStorage.setItem("gheChon", JSON.stringify({ id, danhSachGheDangDat }));
    navigate("/payment");
  };
  if (isLoading || isFetchListTicket) return <Loading />;
  const renderSeats = () => {
    return danhSachVe?.danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";
      let classGheDuocUserDat = "";
      let classGheKhachDangDat = "";
      let indexGheKhachDangDat = danhSachGheKhachDat?.findIndex((gheKD) => {
        return gheKD.maGhe == ghe.maGhe;
      });
      if (indexGheKhachDangDat != -1) {
        classGheKhachDangDat = "gheKhachDangDat";
      }
      let indexGheDangDat = danhSachGheDangDat?.findIndex((gheDD) => {
        return gheDD.tenGhe == ghe.tenGhe;
      });
      if (indexGheDangDat != -1) {
        classGheDangDat = "gheDangDat";
      }
      if (user && user?.taiKhoan == ghe.taiKhoanNguoiDat) {
        classGheDuocUserDat = "gheDuocUserLoginDat";
      }
      return (
        <button
          onClick={() => dispatch(addGhe(ghe))}
          disabled={ghe.daDat || classGheKhachDangDat !== ""}
          className={`ghe ${classGheVip} flex justify-center items-center max-sm:text-xs ${classGheDaDat} ${classGheDangDat} ${classGheDuocUserDat} ${classGheKhachDangDat}`}
          key={index}
        >
          {ghe.daDat ? (
            classGheDuocUserDat != "" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                color="rgba(59 130 246)"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide max-sm:w-[14px] lucide-check w-full"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
              <CloseOutlined />
            )
          ) : (
            ghe.stt
          )}
        </button>
      );
    });
  };
  return (
    <div>
      <Checkout className="overflow-hidden">
        <div className="lg:grid grid-cols-12 gap-10">
          <div className="lg:hidden w-[90%] flex-col max-sm:text-base space-y-5 mx-auto flex text-lg">
            <div className="flex justify-center">
              <img
                className="rounded-xl w-auto max-sm:h-auto object-cover"
                src={danhSachVe?.thongTinPhim.hinhAnh}
                alt=""
              />
            </div>
            <div className="space-y-5 max-sm:space-y-3 font-medium">
              <p className="text-pinkTheme">
                <span className=" text-black">Tên phim : </span>
                {danhSachVe?.thongTinPhim?.tenPhim}
              </p>
              <p>
                <span className="">Ngày chiếu : </span>
                {danhSachVe?.thongTinPhim?.gioChieu} ~{" "}
                {danhSachVe?.thongTinPhim?.ngayChieu}
              </p>
              <p>
                <span className="">Ten cụm rạp:</span>{" "}
                {danhSachVe?.thongTinPhim.tenCumRap}
              </p>
              <p>
                <span className=" text-black">Địa điểm: </span>
                {danhSachVe?.thongTinPhim?.diaChi} ~{" "}
                {danhSachVe?.thongTinPhim?.tenRap}
              </p>
            </div>
          </div>
          <div className="lg:hidden py-5">
            <hr />
          </div>
          <div className="col-span-7 max-lg:w-[90%] mx-auto">
            <div className="w-[90%] max-lg:w-full mx-auto flex justify-between items-center">
              <p className="font-medium text-lg max-sm:text-base">
                Giờ chiếu:{" "}
                <span className="text-green-500">
                  {danhSachVe?.thongTinPhim?.gioChieu}
                </span>
              </p>
              {
                <p className="sm:hidden text-pinkTheme font-medium">
                  <Countdown />
                </p>
              }
              <div className="font-medium max-sm:hidden border border-[#006ee6] py-2 px-5  rounded-lg text-lg max-sm:text-base">
                <p className="text-[#006ee6] flex space-x-3 items-center">
                  {" "}
                  <span>Ghế sẽ tự hủy sau:</span>{" "}
                  <span>
                    <Countdown />
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl max-sm:text-lg text-orange-500 font-bold">
                Màn Hình
              </h3>
              <img
                src="https://chieuphimquocgia.com.vn/_next/image?url=%2Fimages%2Fscreen.png&w=1200&q=75"
                alt=""
                className="lg:w-[90%]"
              />
              <p className="font-bold py-5 text-xl max-sm:text-base">
                {danhSachVe?.thongTinPhim.tenRap}
              </p>
              <div className="mx-auto grid lg:grid-cols-12 grid-cols-10">
                {renderSeats()}
              </div>
              <div className="mt-5 flex space-x-5 flex-wrap justify-center">
                <div className="flex items-center space-x-2">
                  <button className="ghe max-sm:!w-[20px] max-sm:!text-sm max-sm:!h-[20px] gheDaDat">
                    X
                  </button>
                  <span className="max-sm:text-sm text-base">Đã đặt</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="ghe max-sm:!w-[20px] max-sm:!h-[20px] gheDangDat"></button>
                  <span className="max-sm:text-sm text-base">Ghế bạn chọn</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="ghe max-sm:!w-[20px] max-sm:!h-[20px] gheVip"></button>
                  <span className="max-sm:text-sm text-base">Ghế vip</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="ghe max-sm:!w-[20px] max-sm:!h-[20px]"></button>
                  <span className="max-sm:text-sm text-base">Ghế thường</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="ghe max-sm:!w-[20px] flex justify-center items-center space-x-2 max-sm:text-sm max-sm:!h-[20px] gheDuocUserLoginDat">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      color="rgba(59 130 246)"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check w-full max-sm:w-[14px]"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </button>
                  <span className="max-sm:text-sm text-base">
                    Ghế bạn thanh toán
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:hidden text-lg max-sm:text-base font-medium py-5">
              <p>
                Ghế bạn chọn:{" "}
                {sortBy(danhSachGheDangDat, ["stt"]).map((gheDaDat) => {
                  return (
                    <span className="font-medium text-pinkTheme">
                      {gheDaDat.tenGhe},{" "}
                    </span>
                  );
                })}
              </p>
              <p>
                Tổng tiền thanh toán:{" "}
                <span className="text-green-500">
                  {danhSachGheDangDat
                    .reduce((total, gheDaDat) => {
                      return (total += gheDaDat.giaVe);
                    }, 0)
                    .toLocaleString()}
                  VND
                </span>
              </p>
              <div className="flex justify-between mt-5 space-x-3">
                <button
                  onClick={() => dispatch(addGhe(null))}
                  className="border px-5 py-3 max-sm:p-3 rounded-full font-medium  hover:text-green-500  hover:border-green-500"
                >
                  <span className="text-base">Hủy ghế</span>
                </button>
                <button
                  disabled={danhSachGheDangDat.length ? false : true}
                  onClick={handelPayment}
                  className={`px-5 py-3 max-sm:p-3  ${
                    danhSachGheDangDat.length
                      ? "bg-green-500 hover:bg-green-600 cursor-pointer"
                      : "cursor-no-drop bg-gray-400"
                  } text-white  rounded-full `}
                >
                  <span className="font-medium text-base">Thanh toán</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-4 max-2xl:col-span-5 max-lg:hidden mr-10">
            <div className="shadow-md bg-white p-9 rounded-lg relative">
              <div className="bg-slate-50 w-[50px] h-[50px] -top-5 -left-5 rounded-full absolute"></div>
              <div className="bg-slate-50 w-[50px] h-[50px] rounded-full right-1/2 translate-x-1/2 -top-5 absolute"></div>
              <div className="bg-slate-50 w-[50px] h-[50px] rounded-full -top-5 -right-5 absolute"></div>
              <div className="space-y-5">
                <h3 className="text-xl text-center font-600 text-pinkTheme">
                  {danhSachVe?.thongTinPhim.tenPhim}
                </h3>
                <div className="flex justify-center">
                  <img
                    className="rounded-xl h-[400px] w-[300px]"
                    src={danhSachVe?.thongTinPhim.hinhAnh}
                    alt=""
                  />
                </div>
                <p className="text-xl">
                  Địa điểm:{" "}
                  <span className="font-medium">
                    {" "}
                    {danhSachVe?.thongTinPhim.diaChi}
                  </span>
                </p>
                <p className="text-xl">
                  Ngày chiếu:{" "}
                  <span className="font-medium">
                    <span className="">
                      {danhSachVe?.thongTinPhim.ngayChieu} {"~ "}
                      {danhSachVe?.thongTinPhim.gioChieu}
                    </span>{" "}
                    {danhSachVe?.thongTinPhim.tenRap}
                  </span>
                </p>
                <p className="text-xl font-medium">
                  <span className="">Tên cụm rạp: </span>
                  {danhSachVe?.thongTinPhim?.tenCumRap}
                </p>
                <hr />
                <div className="flex items-center justify-between">
                  <div className="space-y-3">
                    <p className="text-xl">
                      <span className="font-medium">Ghế bạn đã chọn: </span>
                      {sortBy(danhSachGheDangDat, ["stt"]).map((gheDaDat) => {
                        return (
                          <span className="font-medium text-pinkTheme">
                            {gheDaDat.tenGhe},{" "}
                          </span>
                        );
                      })}
                    </p>
                    <p className="text-xl font-medium">
                      <span>Tổng tiền: </span>
                      <span className="text-right text-green-500">
                        {danhSachGheDangDat
                          .reduce((total, gheDaDat) => {
                            return (total += gheDaDat.giaVe);
                          }, 0)
                          .toLocaleString()}
                        VND
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="border-dashed border-t-2 py-5 relative">
                    <div className="bg-slate-50 w-[50px] h-[50px] rounded-full absolute top-[-25px] left-[-50px]"></div>
                    <div className="bg-slate-50 w-[50px] h-[50px] rounded-full absolute top-[-25px] right-[-50px]"></div>
                  </div>
                  {/* <table className="h-7">
                    <tr>
                      {code.split("").map((item) => {
                        if (item === "1") {
                          return <td className="bg-black"></td>;
                        } else {
                          return <td className="bg-white"></td>;
                        }
                      })}
                    </tr>
                  </table> */}
                </div>
                <div className="text-base space-x-3">
                  <button
                    onClick={() => dispatch(addGhe(null))}
                    className="border px-5 py-3 rounded-full font-medium hover:text-green-500  hover:border-green-500"
                  >
                    <span>Hủy ghế</span>
                  </button>
                  <button
                    disabled={danhSachGheDangDat.length ? false : true}
                    onClick={handelPayment}
                    className={`px-5 py-3  ${
                      danhSachGheDangDat.length
                        ? "bg-green-500 hover:bg-green-600 cursor-pointer"
                        : "cursor-no-drop bg-gray-400"
                    } text-white  rounded-full `}
                  >
                    <span className="font-medium">Thanh toán</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Checkout>
    </div>
  );
};
const Checkout = styled.div`
  color: black;
  h3 {
    margin: 15px 0;
    font-weight: 500;
  }
  .ghe {
    width: 35px;
    height: 35px;
    background-color: rgba(123, 122, 122);
    @media only screen and (max-width: 640px) {
      width: 28px;
      height: 28px;
    }
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin: 5px;
  }
  /* ghế được người khác đặt */
  .gheDaDat {
    cursor: no-drop;
    opacity: 0.8;
  }
  .gheDangDat {
    background-color: rgba(59 130 246) !important;
  }
  .gheVip {
    background-color: rgba(216 45 139);
  }
  /*  ghế được chính mình đặt*/
  .gheDuocUserLoginDat {
    border: 2px solid rgba(59 130 246) !important;
    opacity: 1;
    background-color: transparent;
  }
  .gheKhachDangDat {
    background-color: rgba(242, 25, 191);
    cursor: no-drop;
  }
`;

export default CheckoutTemplate;
