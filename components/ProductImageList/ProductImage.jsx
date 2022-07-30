import React from "react";
import "../../styles/ProductImage.module.scss";
import { productImageData } from "../../constants/NavbarData";
import styles from "../../styles/ProductImage.module.scss";
const ProductImage = () => {
  return (
    <div className={styles.ProductImageContainer}>
      {productImageData.map((imgData, index) => (
        <span className={styles.innerimage} key={index}>
          {imgData.img}
        </span>
      ))}
    </div>
  );
};

export default ProductImage;
