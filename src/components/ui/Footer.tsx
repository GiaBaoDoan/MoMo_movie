export const Footer = () => {
  return (
    <footer className="text-lg max-sm:text-base text-white">
      <div className="bg-black py-11">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-5 max-lg:grid-cols-2 gap-5">
            <div>
              <h4 className="uppercase text-opacity-80 text-white font-bold">
                Mua vé xem phim
              </h4>
              <ul className="space-y-5 mt-5">
                <li className="text-white text-opacity-50 hover:text-opacity-100 font-medium">
                  Lịch chiếu phim
                </li>
                <li className="text-white text-opacity-50 hover:text-opacity-100 font-medium">
                  Rạp chiếu phim
                </li>
                <li className="text-white text-opacity-50 hover:text-opacity-100 font-medium">
                  Phim chiếu rạp
                </li>
                <li className="text-white text-opacity-50 hover:text-opacity-100 font-medium">
                  Top phim
                </li>
                <li className="text-white text-opacity-50 hover:text-opacity-100 font-medium">
                  Blog phim
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white uppercase text-opacity-80 font-bold">
                Dịch vụ nổi bật
              </h4>
              <ul className="space-y-5 mt-5">
                <li className="text-white flex items-center space-x-3 text-opacity-50 hover:text-opacity-100 font-medium">
                  <img
                    src="https://homepage.momocdn.net/fileuploads/svg/momo-file-230629144722.svg"
                    className="h-7"
                    alt=""
                  />
                  <span> Vé xem phim</span>
                </li>
                <li className="text-white flex items-center space-x-3 text-opacity-50 hover:text-opacity-100 font-medium">
                  <img
                    src="https://homepage.momocdn.net/fileuploads/svg/momo-file-230629144844.svg"
                    className="h-7"
                    alt=""
                  />
                  <span> Bảo hiểm Ô tô</span>
                </li>
                <li className="text-white flex items-center space-x-3 text-opacity-50 hover:text-opacity-100 font-medium">
                  <img
                    src="https://homepage.momocdn.net/fileuploads/svg/momo-file-201210145350.svg"
                    className="h-7"
                    alt=""
                  />
                  <span> Vé máy bay</span>
                </li>
                <li className="text-white flex items-center space-x-3 text-opacity-50 hover:text-opacity-100 font-medium">
                  <img
                    src="https://homepage.momocdn.net/fileuploads/svg/momo-file-210315154805.svg"
                    className="h-7"
                    alt=""
                  />
                  <span>Khách sạn</span>
                </li>
                <li className="text-white flex items-center space-x-3 text-opacity-50 hover:text-opacity-100 font-medium">
                  <img
                    src="https://homepage.momocdn.net/img/momo-upload-api-231214222240-638381893608141712.png"
                    className="h-7"
                    alt=""
                  />
                  <span> Ví nhân ái</span>
                </li>
                <li className="text-white flex items-center space-x-3 text-opacity-50 hover:text-opacity-100 font-medium">
                  <img
                    src="https://homepage.momocdn.net/img/momo-upload-api-230418101312-638174095928506551.png"
                    className="h-7"
                    alt=""
                  />
                  <span> Vay nhanh</span>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <h4 className="text-white uppercase text-opacity-80 font-bold">
                Chăm sóc khách hàng
              </h4>
              <p className="mt-5 space-y-3 text-opacity-50 text-white">
                Địa chỉ:{" "}
                <span className="text-opacity-80 text-white">
                  Lầu 6, Toà nhà Phú Mỹ Hưng, số 8 Hoàng Văn Thái, khu phố 1,
                  Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh
                </span>
                <p>
                  Hotline :{" "}
                  <span className="text-opacity-80 text-white">
                    {" "}
                    1900 5454 41 (Phí 1.000đ/phút)
                  </span>
                </p>
                <p>
                  Email :{" "}
                  <span className="text-opacity-80 text-white">
                    hotro@momo.vn
                  </span>
                </p>
                <p>
                  Tổng đài gọi ra :{" "}
                  <span className="text-opacity-80 text-white">
                    {" "}
                    028.7306.5555 - 028.9999.5555, các đầu số di động Brandname
                    MoMo
                  </span>
                </p>
              </p>
            </div>
            <div className="">
              <h4 className="text-white text-opacity-80 font-bold">
                Kết nối với chúng tôi
              </h4>
              <div className="flex space-x-5 mt-5">
                <img
                  src="https://homepage.momocdn.net/styles/desktop/images/social/facebook.svg"
                  alt=""
                  className="h-14 max-sm:h-11"
                />
                <img
                  src="https://homepage.momocdn.net/styles/desktop/images/social/linkedin.svg"
                  alt=""
                  className="h-14 max-sm:h-11"
                />
                <img
                  src="https://homepage.momocdn.net/styles/desktop/images/social/youtube.svg"
                  alt=""
                  className="h-14 max-sm:h-11"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(38,38,38,1)] py-5 h-full">
        <div className="copy-right w-[90%] mx-auto flex items-end justify-between">
          <div className="flex items-center space-x-4 max-lg:items-start max-lg:space-y-5 max-lg:flex-col">
            <div className="space-y-3">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="jsx-158e4b8c7d0d29f7 block max-sm:h-[40px] h-[60px] "
              >
                <path
                  d="M0 8C0 3.58172 3.58172 0 8 0H64C68.4183 0 72 3.58172 72 8V64C72 68.4183 68.4183 72 64 72H8C3.58172 72 0 68.4183 0 64V8Z"
                  fill="#A50064"
                  className="jsx-158e4b8c7d0d29f7"
                ></path>
                <path
                  d="M51.859 10C45.6394 10 40.5057 15.0349 40.5057 21.3533C40.5057 27.5729 45.5407 32.7065 51.859 32.7065C58.0786 32.7065 63.2123 27.6716 63.2123 21.3533C63.2123 15.1337 58.1774 10 51.859 10ZM51.859 26.1908C49.1935 26.1908 47.0215 24.0188 47.0215 21.3533C47.0215 18.6877 49.1935 16.5158 51.859 16.5158C54.5246 16.5158 56.6965 18.6877 56.6965 21.3533C56.6965 24.0188 54.5246 26.1908 51.859 26.1908Z"
                  fill="white"
                  className="jsx-158e4b8c7d0d29f7"
                ></path>
                <path
                  d="M28.7576 10C26.8818 10 25.1048 10.5923 23.6239 11.6783C22.2418 10.5923 20.4648 10 18.4903 10C13.7515 10 10 13.8502 10 18.4903V32.7065H16.5158V18.4903C16.5158 17.4043 17.4043 16.6145 18.3915 16.6145C19.4775 16.6145 20.2673 17.503 20.2673 18.4903V32.7065H26.7831V18.4903C26.7831 17.4043 27.6716 16.6145 28.6589 16.6145C29.7448 16.6145 30.5346 17.503 30.5346 18.4903V32.7065H37.0504V18.589C37.2479 13.8502 33.4963 10 28.7576 10Z"
                  fill="white"
                  className="jsx-158e4b8c7d0d29f7"
                ></path>
                <path
                  d="M51.859 37.6427C45.6394 37.6427 40.5057 42.6776 40.5057 48.996C40.5057 55.2156 45.5407 60.3492 51.859 60.3492C58.0786 60.3492 63.2123 55.3143 63.2123 48.996C63.2123 42.6776 58.1774 37.6427 51.859 37.6427ZM51.859 53.7347C49.1935 53.7347 47.0215 51.5628 47.0215 48.8972C47.0215 46.2317 49.1935 44.0598 51.859 44.0598C54.5246 44.0598 56.6965 46.2317 56.6965 48.8972C56.6965 51.6615 54.5246 53.7347 51.859 53.7347Z"
                  fill="white"
                  className="jsx-158e4b8c7d0d29f7"
                ></path>
                <path
                  d="M28.7576 37.6427C26.8818 37.6427 25.1048 38.235 23.6239 39.321C22.2418 38.235 20.4648 37.6427 18.4903 37.6427C13.7515 37.6427 10 41.4929 10 46.133V60.3492H16.5158V46.0342C16.5158 44.9483 17.4043 44.1585 18.3915 44.1585C19.4775 44.1585 20.2673 45.047 20.2673 46.0342V60.2505H26.7831V46.0342C26.7831 44.9483 27.6716 44.1585 28.6589 44.1585C29.7448 44.1585 30.5346 45.047 30.5346 46.0342V60.2505H37.0504V46.133C37.2479 41.3942 33.4963 37.6427 28.7576 37.6427Z"
                  fill="white"
                  className="jsx-158e4b8c7d0d29f7"
                ></path>
              </svg>
              <p className="text-opacity-50 lg:hidden text-white font-medium">
                ©Copyright M_Service 2024
              </p>
            </div>
            <div>
              <p className="text-white text-opacity-80 font-medium">
                CÔNG TY CỔ PHẦN DỊCH VỤ DI ĐỘNG TRỰC TUYẾN
              </p>
              <p className="text-white max-sm:text-base text-opacity-50 font-medium">
                Lầu 6, Toà nhà Phú Mỹ Hưng, số 8 Hoàng Văn Thái, khu phố 1, P.
                Tân Phú, Q. 7, Thành phố Hồ Chí Minh
              </p>
            </div>
          </div>
          <p className="text-opacity-50 max-lg:hidden text-white font-medium">
            ©Copyright M_Service 2024
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
