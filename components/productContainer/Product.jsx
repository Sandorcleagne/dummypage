import React from "react";
import "../../styles/Product.module.scss";
import styles from "../../styles/Product.module.scss";
import { productlist } from "../../constants/ProductList";
const Product = () => {
  return (
    <div className={styles.productcontainer}>
      {productlist.map((listitem, index) => (
        <div className={styles.productname} key={index}>
          {listitem.name}
        </div>
      ))}
    </div>
  );
};

export default Product;
