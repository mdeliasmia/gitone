import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgFruits from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits & Vaggies" bgImage={BgFruits} categories={['Fruits','Vegetables']}/>
    </div>
  );
};

export default Fruits;

// 5:28 mint
