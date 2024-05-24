const ListCardRap = ({ rap }) => {
  return (
    <div className="flex space-x-5  hover:shadow-lg items-center border cursor-pointer hover: p-5 text-blackTheme rounded-lg bg-white">
      <img src={rap.logo} className="h-24 max-sm:h-12" alt="" />
      <div className="infor space-y-5 max-sm:space-y-3">
        <p className="font-bold text-pinkTheme  text-2xl max-sm:text-lg">
          {rap.tenHeThongRap}
        </p>
        <p className="text-xl max-sm:text-base">
          Hệ thống rạp phim lớn nhất việt nam
        </p>
        <div className="flex items-center space-x-1 sm:space-x-3">
          <p className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <svg
                  key={item}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  color="gold"
                  viewBox="0 0 24 24"
                  fill="gold"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star max-sm:w-[15px] max-sm:h-[15px]"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              );
            })}
          </p>
          <span className="text-base max-sm:text-sm">3000 lượt đánh giá</span>
        </div>
        <p className="flex space-x-2 items-center">
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
            className="lucide lucide-map-pin max-sm:w-[15px] max-sm:h-[15px]"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-base max-sm:text-sm">26 rạp</span>
        </p>
      </div>
    </div>
  );
};

export default ListCardRap;
