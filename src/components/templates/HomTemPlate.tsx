import { Tabs } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { getBannerList } from "store/GetBannerList/Thunk";
import { getListFilmThunk } from "store/QuanLyFilm/Thunk";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import News from "../../News.json";
import TopViews from "../../TopViews.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { getThongTinRap } from "store/GetHeThongRap/Thunk";
import styled from "styled-components";
import { getLichSuDatVeThunk } from "store/GetLichSuVeDat/Thunk";
import CardFilm from "components/ui/CardFilm";
import ListCardRap from "components/ui/ListCardRap";
import { Tab } from "components/ui/Tab";
import { getCumRap } from "store/GetThongTinCumRap/Thunk";
import Sale from "components/ui/Sale";
import Event from "components/ui/Event";
import BannerMovie from "components/ui/BannerMovie";
import Loading from "components/ui/Loading";
export const HomTemPlate = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setOpen] = useState(false);
  const [trailer, setTrailer] = useState("");
  const { listFilm, isFetchMovie } = useSelector(
    (state: RootState) => state.quanLyPhimToolKit
  );
  const { heThong } = useSelector((state: RootState) => state.quanLyRapToolkit);
  const { heThongRapChieu } = useSelector(
    (state: RootState) => state.CumRapToolkit
  );
  const titles = [
    {
      title: "Mới nhất",
      content: (
        <div className="grid grid-cols-4 font-open-sans gap-5">
          {News.map((item, index) => {
            return (
              <div key={index} className="space-y-3 cursor-pointer">
                <img className="rounded-lg" src={item.img} alt="" />
                <h4 className="font-bold hover:text-pinkTheme text-2xl text-left">
                  {item.title}
                </h4>
                <p className="text-left ">
                  <span className=" text-xl text-gray-500">
                    {item.views} lượt xem
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      title: "Xem nhiều nhất",
      content: (
        <div className="grid grid-cols-4 gap-5 font-open-sans">
          {TopViews.map((item, index) => {
            return (
              <div key={index} className="space-y-3 cursor-pointer">
                <img className="rounded-lg" src={item.img} alt="" />
                <h4 className="font-bold hover:text-pinkTheme text-2xl text-left">
                  {item.title}
                </h4>
                <p className="text-left ">
                  <span className=" text-xl text-gray-500">
                    {item.views} lượt xem
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      ),
    },
  ];
  useEffect(() => {
    dispatch(getListFilmThunk(""));
    dispatch(getBannerList());
    dispatch(getThongTinRap());
    dispatch(getLichSuDatVeThunk());
    dispatch(getCumRap());
  }, [dispatch]);
  // loading page
  if (isFetchMovie) return <Loading />;
  return (
    <Homtemplate className="relative">
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={trailer.replace("https://www.youtube.com/watch?v=", "")}
        onClose={() => setOpen(false)}
      />
      {/* banner */}
      <BannerMovie />
      <section className="bg-pinkTheme bg-opacity-10">
        <div className="py-28 flex justify-between items-center w-[90%] mx-auto">
          <div>
            <h2 className="text-5xl text-pinkTheme font-bold">
              Đặt mua vé xem phim MoMo
            </h2>
            <div className="space-y-5 mt-12">
              <p className="flex space-x-3 text-xl items-center">
                {" "}
                <div className="bg-pinkTheme w-9 flex justify-center items-center h-9 rounded-full bg-opacity-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    color="rgba(216 45 139)"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                </div>
                <span>
                  Mua vé Online,{" "}
                  <span className="font-bold text-blackTheme">
                    trải nghiệm phim hay
                  </span>
                </span>
              </p>
              <p className="flex space-x-3 text-xl items-center">
                {" "}
                <div className="bg-pinkTheme w-9 h-9 flex justify-center items-center rounded-full bg-opacity-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    color="rgba(216 45 139)"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>
                  {" "}
                  <span className="font-bold text-blackTheme">
                    {" "}
                    Đặt vé an toàn
                  </span>{" "}
                  trên MoMo
                </span>
              </p>
              <p className="flex space-x-3 text-xl items-center">
                {" "}
                <div className="bg-pinkTheme w-9 flex justify-center items-center h-9 rounded-full bg-opacity-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    color="rgba(216 45 139)"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>
                  {" "}
                  Tha hồ{" "}
                  <span className="font-bold text-blackTheme">
                    chọn chỗ ngồi, mua bắp nước
                  </span>{" "}
                  tiện lợi.
                </span>
              </p>
              <p className="flex space-x-3 text-xl items-center">
                {" "}
                <div className="bg-pinkTheme w-9 flex justify-center items-center h-9 rounded-full bg-opacity-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    color="rgba(216 45 139)"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>
                  {" "}
                  <span className="font-bold text-blackTheme">
                    Lịch sử đặt vé{" "}
                  </span>{" "}
                  được lưu lại ngay
                </span>
              </p>
            </div>
            <div className="mt-10">
              <button className="text-white capitalize p-3 hover:bg-pink-800 text-xl bg-pinkTheme rounded-md font-bold mt-5">
                Đặt vé ngay
              </button>
            </div>
          </div>
          <div>
            <img
              className="rounded-lg"
              src="https://homepage.momocdn.net/img/momo-upload-api-230912110416-638301134564267185.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* display phim đang chiếu */}
      <section
        style={{
          background:
            "url('https://homepage.momocdn.net/img/momo-upload-api-210701105436-637607336767432408.jpg')",
          backgroundPosition: "bottom center",
          backgroundSize: "cover",
        }}
        className="pb-32 pt-24"
      >
        <h2 className="text-4xl font-bold text-center text-white">
          Phim đang chiếu
        </h2>
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          slidesPerView={5}
          spaceBetween={20}
          className="mx-auto mt-14 text-white flex justify-center w-[90%]"
        >
          {listFilm?.map((film, index) => {
            return (
              <SwiperSlide>
                <CardFilm
                  setTrailer={setTrailer}
                  setOpen={setOpen}
                  index={index + 1}
                  height={"100%"}
                  width={"100%"}
                  film={film}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      {/* display phim sắp chiếu */}
      <section className="pb-24 pt-11">
        <h2 className="text-4xl font-bold text-center text-pinkTheme">
          Phim Sắp chiếu
        </h2>
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation]}
          slidesPerView={5}
          spaceBetween={20}
          className="mx-auto mt-14 text-black flex justify-center w-[90%]"
        >
          {listFilm?.map((film, index) => {
            return (
              <SwiperSlide>
                <CardFilm
                  setTrailer={setTrailer}
                  setOpen={setOpen}
                  index={index + 1}
                  width={"100%"}
                  height={"100%"}
                  film={film}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      {/* display lịch chiếu phim */}
      <section className="bg-slate-50 pt-11 pb-32">
        <h2 className="text-4xl font-bold text-center text-pinkTheme">
          Lịch chiếu phim
        </h2>
        <Tab heThongRapChieu={heThongRapChieu} />
      </section>
      {/* khuyen mãi  */}
      <Sale />
      <Event />
      {/* hệ thống rạp phim sẵn có */}
      <section className="py-24 bg-slate-50">
        <h2 className="text-pinkTheme text-center text-4xl font-bold">
          Hệ thống rạp chiếu phim
        </h2>
        <p className="text-blackTheme text-center text-2xl mt-5">
          Danh sách hệ thống rạp chiếu phim lớn có mặt khắp cả nước
        </p>
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-2 py-12 gap-12">
            {heThong.map((rap, i) => {
              return <ListCardRap rap={rap} key={i} />;
            })}
          </div>
        </div>
      </section>
      {/* blog film ảnh */}
      <section className="bg-pinkTheme py-24 bg-opacity-10">
        <div className="text-center w-[90%] mx-auto">
          <h3 className="font-bold  text-4xl text-pinkTheme">Blog phim ảnh</h3>
          <p className="text-blackTheme mt-5 text-2xl">
            Tổng hợp và Review các bộ phim hot, bom tấn, phim chiếu rạp hay mỗi
            ngày
          </p>
          <div className="mt-5">
            <Tabs
              defaultActiveKey="1"
              centered
              items={titles.map((item, i) => {
                const id = String(i + 1);
                return {
                  label: (
                    <span className="text-2xl font-medium text-blackTheme">
                      {item.title}
                    </span>
                  ),
                  key: id,
                  children: item.content,
                };
              })}
            />
          </div>
        </div>
      </section>
      {/*  */}
      <section className="py-24 w-[90%] mx-auto">
        <h3 className="text-4xl text-center font-bold text-pinkTheme">
          Đặt mua vé xem phim trên MoMo
        </h3>
        <div className="flex justify-center items-center">
          <p className="text-xl w-[85%] mt-5 font-500s">
            Việc đặt vé xem phim chưa bao giờ đơn giản và dễ dàng như thế, chỉ
            với vài thao tác trên màn hình điện thoại bạn đã có thể đặt vé xem
            bộ phim mình yêu thích mà không phải xếp hàng tại rạp. Ví MoMo đã
            liên kết tất cả các rạp chiếu phim lớn trên cả nước, rạp nào bạn
            thích Ví MoMo cũng có. Giá vé xem phim luôn ở mức giá cực kì tốt là
            một “đặc sản” với những ưu đãi độc quyền mà chỉ có ở “Mua Vé Xem
            Phim” của Ví MoMo. <br /> <br /> Nay buổi xem{" "}
            <span className="font-bold text-pinkTheme">phim chiếu rạp</span> của
            bạn sẽ càng tuyệt vời hơn với tính năng mua bắp nước trước khi đến
            rạp, bạn sẽ đa dạng hoá các món bắp hay thức uống mà bạn yêu thích,
            tạo bất ngờ cho bạn đồng hành bằng những combo cực chất lượng đến từ
            các{" "}
            <span className="text-pinkTheme font-bold">rạp chiếu phim.</span>
            <p className="mt-5 font-bold text-2xl text-pinkTheme">
              Giá vé rạp chiếu phim (Phim 2D - dành cho người lớn)
            </p>
            <table className="border w-full mt-5">
              <thead>
                <tr className="text-pinkTheme">
                  <th>Rạp</th>
                  <th>Thứ 2</th>
                  <th>Thứ 3</th>
                  <th>Thứ 4</th>
                  <th>Thứ 5</th>
                  <th>Thứ 6</th>
                  <th>Thứ 7</th>
                  <th>Chủ nhật</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="rap text-pinkTheme">Galaxys</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                </tr>
                <tr className="text-center">
                  <td className="rap text-pinkTheme">CGV</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                </tr>
                <tr className="text-center">
                  <td className="rap text-pinkTheme">BHD</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                </tr>
                <tr className="text-center">
                  <td className="rap text-pinkTheme">Lotte Cinema</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                </tr>
                <tr className="text-center">
                  <td className="rap text-pinkTheme">Cinestar</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                  <td>70K - 85K</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xl mt-5">
              Hy vọng rằng những trải nghiệm đặt vé xem phim, tra cứu lịch chiếu
              phim nhanh, tiện lợi với mức giá tốt sẽ là món ăn tinh thần tuyệt
              vời dành cho người dùng của Ví MoMo. Đặt vé xem phim online chưa
              bao giờ dễ dàng và chuyên nghiệp như thế khi có Ví MoMo đồng hành
              cùng bạn!
            </p>
          </p>
        </div>
      </section>
    </Homtemplate>
  );
};
const Homtemplate = styled.div`
  .ant-tabs .ant-tabs-ink-bar {
    background-color: rgba(216, 45, 139, 1);
    height: 3px !important;
  }
  td,
  th {
    padding: 10px;
    border: 1px solid lightgray;
  }
  .rap {
    font-weight: bold;
  }
  .swiper-button-prev {
    color: black;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 60px;
    transform: translateY(-60%);
    height: 60px;
    border-radius: 100%;
    &::after {
      font-size: 22px;
      font-weight: bold;
    }
  }
  .swiper-button-next {
    color: black;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 60px;
    height: 60px;
    font-weight: 800;
    transform: translateY(-60%);
    border-radius: 100%;
    &::after {
      font-size: 22px;
    }
  }
`;
