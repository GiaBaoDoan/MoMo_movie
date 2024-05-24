import { SwiperSlide, Swiper } from "swiper/react";
import Data from "../../data.json";
const Sale = () => {
  return (
    <section className="py-24 max-lg:py-12">
      <h2 className="text-center text-pinkTheme font-bold text-4xl max-sm:text-2xl">
        Khuyến mãi
      </h2>
      <Swiper
        navigation={false}
        pagination={true}
        slidesPerView={1}
        autoplay={true}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mx-auto mt-5 text-black flex justify-center w-[90%]"
      >
        {Data?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="space-y-3">
                <img src={item.img} alt="" />
                <p className="title text-pinkTheme text-xl max-sm:text-base font-bold">
                  {item.title}
                </p>
                <p className="font-medium text-lg capitalize max-sm:text-sm">
                  {item.date}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Sale;
