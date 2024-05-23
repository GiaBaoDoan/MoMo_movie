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
  const code =
    "11010010000100111011001011101111011010001110101110011001101110010010111111001011001001000011011000111010110001001110111101101001011010111000101101101001000010011101100101110111101101000111010111001100110111001001011110111011100101100100100001101100011101011000100111011110110100";
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
          className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDuocUserDat} ${classGheKhachDangDat}`}
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
                className="lucide lucide-check w-full"
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
      <Checkout className="">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-7">
            <div className="w-[80%] mx-auto flex justify-between items-center">
              <p className="font-medium text-xl">
                Giờ chiếu:{" "}
                <span className="font-bold">
                  {danhSachVe?.thongTinPhim?.gioChieu}
                </span>
              </p>
              <div
                style={{ border: "1px solid rgba(255,65,1)" }}
                className="font-medium border py-2 px-5  rounded-lg text-xl"
              >
                <p className="text-[rgba(255,65,1)] flex space-x-3 items-center">
                  {" "}
                  <span>Ghế sẽ tự hủy sau:</span>{" "}
                  <span>
                    <Countdown />
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold">Màn hình</h3>
              <img
                src="https://chieuphimquocgia.com.vn/_next/image?url=%2Fimages%2Fscreen.png&w=1200&q=75"
                alt=""
              />
              <p className="font-bold py-5 text-xl">
                Rạp chiếu {danhSachVe?.thongTinPhim.tenRap}
              </p>
              <div className="mx-auto grid grid-cols-12">{renderSeats()}</div>
              <div className="mt-5 flex justify-center">
                <table>
                  <thead>
                    <tr>
                      <th className="px-5 font-medium">Ghế thường</th>
                      <th className="px-5 font-medium">Đã đặt</th>
                      <th className="px-5 font-medium">Bạn chọn</th>
                      <th className="px-5 font-medium">Ghế vip</th>
                      <th className="px-5 font-medium">Ghế bạn thanh toán</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <button className="ghe"></button>
                      </td>
                      <td className="text-center">
                        <button className="ghe gheDaDat text-gray-400">
                          X
                        </button>
                      </td>
                      <td className="text-center">
                        <button className="ghe gheDangDat"></button>
                      </td>
                      <td className="text-center">
                        <button className="ghe gheVip"></button>
                      </td>
                      <td className="text-center">
                        <button className="ghe gheDuocUserLoginDat">
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
                            className="lucide lucide-check w-full"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-span-4 mr-10">
            <div className="shadow-md bg-white p-9 rounded-lg relative">
              <div className="bg-slate-50 w-[50px] h-[50px] -top-5 -left-5 rounded-full absolute"></div>
              <div className="bg-slate-50 w-[50px] h-[50px] rounded-full right-1/2 translate-x-1/2 -top-5 absolute"></div>
              <div className="bg-slate-50 w-[50px] h-[50px] rounded-full -top-5 -right-5 absolute"></div>
              <div className="space-y-5">
                <h3 className="text-xl text-center font-600 text-pinkTheme">
                  {danhSachVe?.thongTinPhim.tenPhim}
                </h3>
                <img
                  className="w-full mx-auto h-[400px] rounded-lg object-cover"
                  src={danhSachVe?.thongTinPhim.hinhAnh}
                  alt=""
                />
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
                  <table className="h-7">
                    <tr>
                      {code.split("").map((item) => {
                        if (item === "1") {
                          return <td className="bg-black"></td>;
                        } else {
                          return <td className="bg-white"></td>;
                        }
                      })}
                    </tr>
                  </table>
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
                    className={`border px-5 py-3  ${
                      danhSachGheDangDat.length
                        ? "bg-green-500 hover:bg-green-600 cursor-pointer border-green-500"
                        : "cursor-no-drop bg-gray-400 border-gray-400 border"
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
  h3 {
    margin: 15px 0;
    font-weight: 500;
  }
  .ghe {
    width: 35px;
    height: 35px;
    background-color: rgba(123, 122, 122);
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
    background-color: rgba(255 132 19);
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
