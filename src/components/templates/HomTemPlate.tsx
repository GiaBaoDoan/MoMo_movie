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
      title: <span className="max-sm:text-lg">Mới nhất</span>,
      content: (
        <div className="grid grid-cols-4 max-xl:grid-cols-2 max-lg:grid-cols-1 font-open-sans gap-5">
          {News.map((item, index) => {
            return (
              <div>
                <div
                  key={index}
                  className="lg:space-y-3 max-lg:flex flex-row-reverse justify-between items-center cursor-pointer"
                >
                  <img
                    className="rounded-lg  max-lg:w-[200px] object-cover max-sm:h-[80px] max-sm:w-[120px]"
                    src={item.img}
                    alt=""
                  />
                  <div className="pr-3 space-y-3">
                    <h4 className="font-bold max-sm:text-lg hover:text-pinkTheme text-2xl text-left">
                      {item.title}
                    </h4>
                    <p className="text-left">
                      <span className="text-xl max-sm:text-base text-gray-500">
                        {item.views} lượt xem
                      </span>
                    </p>
                  </div>
                </div>
                <div className="lg:hidden">
                  <br />
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      title: <span className="max-sm:text-lg">Xem nhiều nhất</span>,
      content: (
        <div className="grid grid-cols-4 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-5 font-open-sans">
          {TopViews.map((item, index) => {
            return (
              <div>
                <div
                  key={index}
                  className="lg:space-y-3 max-lg:flex justify-between flex-row-reverse items-center cursor-pointer"
                >
                  <div>
                    <img
                      className="rounded-lg object-cover max-sm:h-[80px] max-sm:w-[120px] max-lg:w-[200px]"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className="pr-3 space-y-3">
                    <h4 className="font-bold max-sm:text-lg hover:text-pinkTheme text-2xl text-left">
                      {item.title}
                    </h4>
                    <p className="text-left">
                      <span className=" text-xl max-sm:text-base text-gray-500">
                        {item.views} lượt xem
                      </span>
                    </p>
                  </div>
                </div>
                <div className="lg:hidden">
                  <br />
                  <hr />
                </div>
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
    <Homtemplate className="relative text-black overflow-x-hidden">
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={trailer.replace("https://www.youtube.com/watch?v=", "")}
        onClose={() => setOpen(false)}
      />
      {/* banner */}
      <BannerMovie />
      <section className="bg-pinkTheme/20">
        <div className="py-24 max-lg:py-12 flex lg:space-x-5 justify-between max-lg:space-y-7 items-center max-lg:items-start max-lg:flex-col w-[90%] mx-auto">
          <div>
            <h2 className="text-4xl text-pinkTheme max-sm:text-2xl font-bold">
              Đặt mua vé xem phim MoMo
            </h2>
            <div className="space-y-5 mt-5">
              <p className="flex space-x-3 text-xl max-sm:text-base items-center">
                <div>
                  <div className="bg-pinkTheme w-9 flex justify-center items-center h-9 max-sm:h-7 max-sm:w-7 rounded-full bg-opacity-30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      color="rgba(216 45 139)"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check max-sm:w-[12px]"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>{" "}
                  </div>
                </div>
                <span>
                  Mua vé Online,{" "}
                  <span className="font-bold text-blackTheme">
                    trải nghiệm phim hay
                  </span>
                </span>
              </p>
              <p className="flex space-x-3 text-xl max-sm:text-base items-center">
                <div>
                  <div className="bg-pinkTheme w-9 h-9 max-sm:h-7 max-sm:w-7 flex justify-center items-center rounded-full bg-opacity-30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      color="rgba(216 45 139)"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check max-sm:w-[12px]"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                </div>
                <span>
                  <span className="font-bold text-blackTheme">
                    Đặt vé an toàn
                  </span>{" "}
                  trên MoMo
                </span>
              </p>
              <p className="flex space-x-3 text-xl max-sm:text-base items-center">
                {" "}
                <div>
                  <div className="bg-pinkTheme  w-9 h-9 max-sm:h-7 max-sm:w-7 flex justify-center items-center  rounded-full bg-opacity-30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      color="rgba(216 45 139)"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check max-sm:w-[12px]"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                </div>
                <span>
                  Tha hồ{" "}
                  <span className="font-bold text-blackTheme">
                    chọn chỗ ngồi, mua bắp nước
                  </span>{" "}
                  tiện lợi.
                </span>
              </p>
              <p className="flex space-x-3 text-xl max-sm:text-base items-center">
                {" "}
                <div>
                  <div className="bg-pinkTheme w-9 h-9 max-sm:h-7 max-sm:w-7 flex justify-center items-center  rounded-full bg-opacity-30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      color="rgba(216 45 139)"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check max-sm:w-[12px]"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
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
              <button className=" capitalize p-3 max-sm:p-8 hover:bg-pink-800  bg-pinkTheme rounded-md  mt-5">
                <span className="text-xl max-sm:text-base text-white font-600">
                  Đặt vé ngay
                </span>
              </button>
            </div>
          </div>
          <div className="max-2xl:w-[60%] max-lg:w-full">
            <img
              className="rounded-lg w-full"
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
        className="py-24 max-lg:py-12"
      >
        <h2 className="text-4xl max-sm:text-2xl font-bold text-center text-white">
          Phim đang chiếu
        </h2>
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 5,
            },
          }}
          className="mx-auto mt-5 text-white flex justify-center w-[90%]"
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
      <section className="py-24 max-lg:py-12 bg-white">
        <h2 className="text-4xl font-bold max-sm:text-2xl text-center text-pinkTheme">
          Phim Sắp chiếu
        </h2>
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 5,
            },
          }}
          className="mx-auto mt-5 text-black flex justify-center w-[90%]"
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
      <section className="bg-slate-50 max-lg:py-12 py-24">
        <h2 className="text-4xl font-bold text-center max-sm:text-2xl text-pinkTheme">
          Lịch chiếu phim
        </h2>
        <Tab heThongRapChieu={heThongRapChieu} />
      </section>
      {/* khuyen mãi  */}
      <Sale />
      <Event />
      {/* hệ thống rạp phim sẵn có */}
      <section className="py-24 max-lg:py-12 bg-slate-50">
        <div className="w-[90%] mx-auto">
          <h2 className="text-pinkTheme text-center text-4xl max-sm:text-2xl font-bold">
            Hệ thống rạp chiếu phim
          </h2>
          <p className="text-blackTheme text-center text-2xl max-sm:text-lg mt-5">
            Danh sách hệ thống rạp chiếu phim lớn có mặt khắp cả nước
          </p>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 py-12 gap-12">
            {heThong.map((rap, i) => {
              return <ListCardRap rap={rap} key={i} />;
            })}
          </div>
        </div>
      </section>
      {/* blog film ảnh */}
      <section className="bg-pinkTheme/20 py-24 max-lg:py-12">
        <div className="text-center w-[90%] mx-auto">
          <h3 className="font-bold  text-4xl max-sm:text-2xl text-pinkTheme">
            Blog phim ảnh
          </h3>
          <p className="text-blackTheme mt-5 text-2xl max-sm:text-lg">
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
      <section className="py-24 max-lg:py-12 bg-white w-[90%] mx-auto">
        <h3 className="text-4xl max-sm:text-2xl text-center font-bold text-pinkTheme">
          Đặt mua vé xem phim trên MoMo
        </h3>
        <div className="flex justify-center items-center">
          <p className="text-xl w-[85%] max-sm:text-lg max-lg:w-full mt-5 font-500">
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
            <p className="mt-5 font-bold text-2xl max-sm:text-xl text-pinkTheme">
              Giá vé rạp chiếu phim (Phim 2D - dành cho người lớn)
            </p>
            <div className="max-sm:overflow-scroll">
              {/* <table className="border w-full mt-5">
                <thead>
                  <tr className="text-pinkTheme text-lg">
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
                    <td className="rap text-lg text-pinkTheme">Galaxys</td>
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
              </table> */}
            </div>
            <p className="text-xl max-sm:text-lg mt-5">
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
    font-size: 18px;
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
    transform: translateY(-100%);
    height: 60px;
    border-radius: 100%;
    @media only screen and (max-width: 1024px) {
      width: 40px;
      height: 40px;
    }
    &::after {
      font-size: 18px;
      font-weight: 800;
    }
  }
  .swiper-button-next {
    color: black;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 60px;
    height: 60px;
    @media only screen and (max-width: 1024px) {
      width: 40px;
      height: 40px;
    }
    font-weight: 800;
    transform: translateY(-100%);
    border-radius: 100%;
    &::after {
      font-size: 18px;
      font-weight: 800;
    }
  }
`;
