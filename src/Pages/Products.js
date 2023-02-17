import React from "react";
import CardIteam from "../components/atoms/CardIteam";

const Products = () => {
  return (
    <div className="container">
      <div className="row row-sm-3 row-md-4 ">
        {[...Array(20)].map(() => (
          <div className="col mt-3 tb-3">
            <CardIteam />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
