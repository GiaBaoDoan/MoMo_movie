import Loading from "components/ui/Loading";
import PaymentCheckout from "components/ui/PaymentCheckout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RootState, useAppDispatch } from "store";
import { getVePhim } from "store/GetDanhSachDatVe/Thunk";
import { DatVeThunk } from "store/ThongTinDatVe/Thunk";
const Paymnent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const item = JSON.parse(localStorage.getItem("gheChon"));
  const { danhSachVe, isFetchListTicket } = useSelector(
    (state: RootState) => state.getVePhimToolkit
  );
  const checkOut = async () => {
    try {
      const res = await dispatch(
        DatVeThunk({
          maLichChieu: item?.id,
          danhSachVe: item.danhSachGheDangDat?.map((item) => {
            return { maGhe: item.maGhe, giaVe: item.giaVe };
          }),
        })
      );
      toast.success(res.payload);
    } catch (err: any) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!item) {
      navigate(`/`);
    }
    dispatch(getVePhim(item?.id));
  }, [item?.id]);
  if (isFetchListTicket) return <Loading />;
  return (
    <section className="py-24 bg-slate-50">
      <div className="w-[90%] mx-auto flex space-x-5">
        <div style={{ flex: "2" }} className="left space-y-5">
          <div className="left-top p-5 rounded-xl text-lg font-medium shadow bg-white space-y-5">
            <h3 className="font-bold">Thông tin phim</h3>
            <div>
              <p>Phim</p>
              <p className="font-bold">{danhSachVe?.thongTinPhim.tenPhim}</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p>Ngày giờ chiếu</p>
                <p className="font-bold">
                  <span className="text-orange-500 font-bold">
                    {" "}
                    {danhSachVe?.thongTinPhim.gioChieu}
                  </span>
                  {" ~ "}
                  <span>{danhSachVe?.thongTinPhim.ngayChieu}</span>
                </p>
              </div>
              <div className="">
                <p>Ghế</p>
                <p className="space-x-3">
                  {item?.danhSachGheDangDat?.map((ghe) => {
                    return <span className="text-pinkTheme">{ghe.tenGhe}</span>;
                  })}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p>Định dạng</p>
                <p className="font-bold">2D</p>
              </div>
              <div>
                <p>Rạp chiếu</p>
                <p className="font-bold">{danhSachVe?.thongTinPhim.tenRap}</p>
              </div>
            </div>
          </div>
          <div className="left-bottom shadow text-lg rounded-xl space-y-5 font-medium bg-white p-5">
            <h3 className="font-bold">Thông tin thanh toán</h3>
            <table className="min-w-full ring-1 text-left rounded-xl ring-gray-300 p-5">
              <thead>
                <tr>
                  <th className="p-5">Danh mục</th>
                  <th className="p-5">Số lượng</th>
                  <th className="p-5">Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-5">
                    Ghế (
                    {item?.danhSachGheDangDat?.map((ghe) => {
                      return (
                        <span className="text-pinkTheme mr-4">
                          {ghe.tenGhe},
                        </span>
                      );
                    })}
                    )
                  </td>
                  <td className="p-5">{item.danhSachGheDangDat.length}</td>
                  <td className="p-5">
                    <span className="text-right text-green-500 ">
                      {item?.danhSachGheDangDat
                        .reduce((total, gheDaDat) => {
                          return (total += gheDaDat.giaVe);
                        }, 0)
                        .toLocaleString()}
                      đ
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="right flex-1 font-medium">
          <div className="bg-white shadow rounded-xl p-5 space-y-5 text-lg">
            <h3 className="font-bold">Phương thức thanh toán</h3>
            <div className="space-y-5">
              <PaymentCheckout />
              <h4 className="font-bold">Chi phí</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <p>Thanh toán</p>
                  <p>
                    {" "}
                    <span className="text-right font-bold ">
                      {item?.danhSachGheDangDat
                        .reduce((total, gheDaDat) => {
                          return (total += gheDaDat.giaVe);
                        }, 0)
                        .toLocaleString()}
                      đ
                    </span>
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Fee (0%)</p>
                  <p className="font-bold">0đ</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Tổng cộng</p>
                  <p>
                    {" "}
                    <span className="text-right font-bold ">
                      {item?.danhSachGheDangDat
                        .reduce((total, gheDaDat) => {
                          return (total += gheDaDat.giaVe);
                        }, 0)
                        .toLocaleString()}
                      đ
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-center flex-col space-y-3">
                <button
                  onClick={checkOut}
                  className="bg-green-600 w-full text-white px-5 py-[6px] hover:bg-green-700 transition-all  rounded-full"
                >
                  Thanh toán
                </button>
                <button>Quay lại</button>
              </div>
            </div>
            <div className="text-center">
              <p className="text-orange-500">
                <span className="font-bold">Lưu ý</span> Không mua vé cho trẻ em
                dưới 13 tuổi đối với các suất chiếu phim kết thúc sau 22h00 và
                không mua vé cho trẻ em dưới 16 tuổi đối với các suất chiếu phim
                kết thúc sau 23h00.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paymnent;
