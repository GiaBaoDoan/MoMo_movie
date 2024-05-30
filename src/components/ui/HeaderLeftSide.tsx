import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { RootState } from "store";
const navContent = [
  "Trang chủ",
  "Lịch chiếu",
  "Tin tức",
  "Khuyễn mãi",
  "Giới thiệu",
  "Giá vé",
];
const HeaderLeftSide = ({ openHeader, registerRef, loginRef }) => {
  const { user } = useSelector(
    (state: RootState) => state.quanLyNguoiDungToolkit
  );

  return (
    <section
      className={`fixed shadow-lg transition-all border z-10 top-50 left-0  w-[100vw]  bg-white  ${
        openHeader ? "-translate-y-[900px]" : "translate-y-0"
      }`}
    >
      <div className="flex flex-col ">
        {navContent.map((item, i) => {
          return (
            <NavLink
              to={"/"}
              className={"hover:text-pinkTheme text-xl"}
              key={i}
            >
              <p className="px-3 text-center py-5 font-600 max-sm:text-base">
                {item}
              </p>
              {i !== navContent.length - 1 && <hr />}
            </NavLink>
          );
        })}
        <hr />
        {!user?.taiKhoan && (
          <div className="flex space-x-3 m items-center justify-center p-5">
            <button
              onClick={() => registerRef.current.showModal()}
              className="border-black/80 border text-base hover:bg-black/80 hover:text-white text-black/80 rounded-full p-2 px-5"
            >
              Đăng ký
            </button>
            <button
              onClick={() => loginRef?.current.showModal()}
              className="bg-pinkTheme font-500 text-base hover:bg-pink-800 text-white rounded-full p-2 px-5"
            >
              Đăng nhập
            </button>
          </div>
        )}
        {user?.taiKhoan && (
          <div>
            <NavLink to={"/account"} className={"hover:text-pinkTheme text-xl"}>
              <p className="px-3 text-center py-5 font-600 max-sm:text-base">
                Thông tin cá nhân
              </p>
            </NavLink>
            <hr />
            <div
              onClick={() => {
                localStorage.removeItem("USER");
                toast.error("Đã Đăng xuất");
                window.location.reload();
              }}
              className={
                "hover:text-pinkTheme cursor-pointer text-center flex justify-center text-xl"
              }
            >
              <p className="px-3 text-center py-5 font-600 max-sm:text-base">
                Đăng xuất
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeaderLeftSide;
