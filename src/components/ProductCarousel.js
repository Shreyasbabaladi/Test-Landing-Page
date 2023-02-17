import React,{useState,useEffect} from "react";
import  SectionsHeaders  from "./atoms/SectionsHeaders";
import { Swiper, SwiperSlide } from "swiper/react";
import CardIteam from "./atoms/CardIteam";
import "swiper/css";
import "swiper/css/pagination";

const ProductCarousel = (props) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      let scaleFactor = 5;
      if(screenWidth > 1252){
        scaleFactor = 5;
      }else if (screenWidth>= 1024 && screenWidth <= 1252){
        scaleFactor = 4
      }
      else if (screenWidth >= 720 && screenWidth <= 1024){
      scaleFactor = 3
      }
      else if(screenWidth <= 720 && screenWidth >= 450 ){
        scaleFactor = 3
      }
      else {
        scaleFactor = 2
      }
      setScale(scaleFactor);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // call the function once on initial render

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [scale]);


  return (
    <div className="mt-3 mb-3">
      <SectionsHeaders {...props} />
      <Swiper
        slidesPerView={scale}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        scrollbar-hide="true"
        className="mySwiper"
      >
        {[...Array(10)].map(() => (
          <SwiperSlide>
            <CardIteam  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
