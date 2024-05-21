import { useState, useEffect } from "react";
import { useAppDispatch } from "store";
import { addGhe } from "store/GetDanhSachDatVe/slice";
const Countdown = () => {
  const dispatch = useAppDispatch();
  const [seconds, setSeconds] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer); // Dừng countdown khi seconds đạt giá trị 0;
          dispatch(addGhe(null));
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
    // Clear interval when component is unmounted or seconds reach 0
    return () => clearInterval(timer);
  }, []);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div>
      <p>{formatTime(seconds)}</p>
    </div>
  );
};

export default Countdown;
