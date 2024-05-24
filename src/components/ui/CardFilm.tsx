import { useNavigate } from "react-router-dom";
import Play from "./Play";
const CardFilm = ({ film, index, width, height, setTrailer, setOpen }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        // onClick={() => navigate(`/details/${film.maPhim}`)}
        className="cursor-pointer relative"
      >
        {film.hot && (
          <button className="bg-[#006ee6] absolute top-10 left-10 z-10 p-2 px-3 rounded-md font-medium text-white">
            Hot
          </button>
        )}
        {!film.hot && (
          <button className="bg-[#9b2020] absolute top-10 left-10 z-10 p-2 px-3 rounded-md font-medium text-white">
            Phim hay
          </button>
        )}

        <div className="h-[420px] max-lg:h-[300px] transition-all overflow-hidden relative ">
          <div
            className="h-full"
            onClick={() => navigate(`/details/${film.maPhim}`)}
          >
            <img
              style={{ height, width }}
              className="hover:scale-105 h-full w-full transition-all object-cover z-1 rounded"
              src={film.hinhAnh}
              alt=""
            />
          </div>
          <div
            onClick={() => {
              setOpen(true);
              setTrailer(film.trailer);
            }}
          >
            <Play />
          </div>
          <div className="number left-10 absolute -bottom-2 font-bold text-5xl z-1">
            <p
              style={{ textShadow: "3px 3px black" }}
              className="text-gray-200 "
            >
              {index}
            </p>
          </div>
        </div>
        <div className="mt-5 space-y-3">
          <p className="font-bold text-xl capitalize">
            {film.tenPhim.length > 20
              ? film.tenPhim.slice(0, 20) + "..."
              : film.tenPhim}
          </p>
          <div className="flex space-x-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="gold"
              color="gold"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-lg"> {film.danhGia}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFilm;
