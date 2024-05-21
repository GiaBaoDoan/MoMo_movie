import { SwiperSlide, Swiper } from "swiper/react";
import Data from "../../Event.json";
import { Pagination } from "swiper/modules";
const Event = () => {
  return (
    <section className="pb-24">
      <h2 className="text-center text-pinkTheme font-bold text-4xl">Sự kiện</h2>
      <Swiper
        navigation={false}
        pagination={true}
        slidesPerView={3}
        autoplay={true}
        modules={[Pagination]}
        spaceBetween={20}
        className="mx-auto mt-14 text-black flex justify-center w-[90%]"
      >
        {Data?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="space-y-3">
                <img src={item.img} className="rounded-lg" alt="" />
                <p className="title text-pinkTheme text-xl font-bold">
                  {item.title}
                </p>
                <p className="font-medium text-lg capitalize">{item.date}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Event;
