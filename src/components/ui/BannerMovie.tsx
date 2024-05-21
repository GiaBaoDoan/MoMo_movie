import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const bannerFilm = [
  "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017539.png&w=1920&q=75",
  "https://www.bhdstar.vn/wp-content/uploads/2024/03/referenceSchemeHeadOfficeallowPlaceHoldertrueheight1069ldapp.jpg",
  "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017553.png&w=1920&q=75",
  "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017575.jpg&w=1920&q=75",
  "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017551.png&w=1920&q=75",
];
const BannerMovie = () => {
  return (
    <section>
      <Swiper navigation={true} pagination={true} modules={[Navigation]}>
        {bannerFilm.map((item) => {
          return (
            <SwiperSlide>
              <img src={item} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default BannerMovie;
