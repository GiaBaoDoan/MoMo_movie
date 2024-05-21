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
        <div className="absolute top-0 left-0 w-full h-full bg-black z-10 opacity-50 "></div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="absolute p-[20px]  z-20 rounded-md  mt-[50px] ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
