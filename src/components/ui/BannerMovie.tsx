import styled from "styled-components";
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
    <MovieBanner className="movieBanner">
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
    </MovieBanner>
  );
};
const MovieBanner = styled.div`
  .movieBanner {
    .swiper-button-prev {
      color: black;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      width: 60px;
      height: 60px;
      border-radius: 100%;
      transform: translateY(0px) !important;
      @media only screen and (max-width: 1024px) {
        width: 40px;
        height: 40px;
      }
      &::after {
        font-size: 18px;
        font-weight: 800;
      }
    }
    .swiper-button-next {
      color: black;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      width: 60px;
      height: 60px;
      transform: translateY(0px) !important;
      @media only screen and (max-width: 1024px) {
        width: 40px;
        height: 40px;
      }
      font-weight: 800;
      border-radius: 100%;
      &::after {
        font-size: 18px;
        font-weight: 800;
      }
    }
  }
`;
export default BannerMovie;
