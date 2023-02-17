import React from "react";
import CategoriesIcon from "../components/atoms/CategoriesIcon";
import SectionsHeaders from "../components/atoms/SectionsHeaders";
import { Link } from "react-router-dom";

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

const Categories = () => {
  return (
    <div className="container mt-4 categories">
      <SectionsHeaders headline={"All Categories"} />
      <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5">
        {categories.map((categorie) => (
          <Link to="/accordionlist">
            <div className="col">
              <CategoriesIcon categorie={categorie} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
