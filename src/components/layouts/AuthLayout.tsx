import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="AuthLayout " style={{ overflowX: "hidden" }}>
      <div className="h-screen w-screen relative ">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            className="w-full h-full object-cover object-center"
            src="./img/back.jpg"
          />
        </div>
        <div className="fixed top-0 left-0 w-full h-full bg-black z-10 opacity-50 "></div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="absolute p-[20px]  z-20 rounded-md  mt-12 ">
            <section className="flex h-[700px]  items-center">
              <div className="h-full">
                <img
                  src="
                  https://homepage.momocdn.net/blogscontents/momo-upload-api-230919105753-638307178737761955.jpg
              "
                  alt=""
                  className="object-cover h-full rounded-tl-xl rounded-bl-xl"
                />
              </div>
              <div className="h-full">
                <Outlet />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
