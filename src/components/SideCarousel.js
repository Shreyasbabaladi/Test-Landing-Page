import React, { useState, useEffect } from "react";
import SectionsHeaders from "./atoms/SectionsHeaders";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoriesIcon from "./atoms/CategoriesIcon";
import { Link } from "react-router-dom";
import {
  FaLaptop,
  FaTshirt,
  FaUtensils,
  FaBook,
  FaDumbbell,
  FaGamepad,
  FaShoppingBasket,
  FaGem,
  FaCar,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const categories = [
  { name: "Electronics", icon: "FaLaptop" },
  { name: "Fashion", icon: "FaTshirt" },
  { name: "Home and Kitchen", icon: "FaUtensils" },
  { name: "Health and Beauty", icon: "FaDumbbell" },
  { name: "Sports and Fitness", icon: "FaBook" },
  { name: "Toys and Games", icon: "FaGamepad" },
  { name: "Books and Stationery", icon: "FaShoppingBasket" },
  { name: "Grocery and Gourmet", icon: "FaGem" },
  { name: "Jewelry and Accessories", icon: "FaCar" },
];

const SideCarousel = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      let scaleFactor = 5;
      if (screenWidth > 1252) {
        scaleFactor = 5;
      } else if (screenWidth >= 1024 && screenWidth <= 1252) {
        scaleFactor = 4;
      } else if (screenWidth >= 720 && screenWidth <= 1024) {
        scaleFactor = 3;
      } else if (screenWidth <= 720 && screenWidth >= 350) {
        scaleFactor = 3;
      } else {
        scaleFactor = 2;
      }
      setScale(scaleFactor);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // call the function once on initial render

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [scale]);

  const props = {
    headline: "Explore Popular Categories",
    cta: {
      text: "View all",
      link: "/categories",
    },
  };

  return (
    <div>
      <SectionsHeaders {...props} />
      <Swiper
        slidesPerView={scale}
        spaceBetween={30}
        scrollbar-hide="true"
        className="mySwiper"
      >
        {categories.map((categorie) => (
          <SwiperSlide>
            <Link to='/products'>
            <CategoriesIcon categorie={categorie} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SideCarousel;
