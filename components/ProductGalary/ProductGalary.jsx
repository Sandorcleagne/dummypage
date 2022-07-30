import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/ProductGallery.module.scss";
import axios from "axios";
import { productData } from "../../constants/ProductGalary";
const ProductGalary = () => {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const call = async () => {
    setIsLoading(true);
    const res = await axios.get(
      "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json"
    );
    const products = res.data.data.products;
    setApiData(products);
    setIsLoading(false);
  };

  useEffect(() => {
    call();
  }, []);

  return (
    <>
      {isLoading && <div className={styles.loading}>Loading...</div>}
      <div className={styles.maincardcontainer}>
        {apiData.map((curelm, index) => {
          return (
            <div className={styles.cardcontainer} key={index}>
              <div className={styles.card}>
                <div className={styles.bookmark}>{productData.icon1}</div>
                <div className={styles.imagecontainer}>
                  {curelm.plpimaage ? (
                    <Image
                      src={curelm.plpimaage}
                      alt={curelm.name}
                      height={432.53}
                      width={288.39}
                    />
                  ) : (
                    <Image
                      src={"/placeholder.png"}
                      width={288.39}
                      height={432.53}
                      alt="default img"
                    />
                  )}
                </div>
              </div>
              <div className={styles.bottomitemcontainer}>
                <div title={curelm.name} className={styles.productname}>
                  {curelm.name}
                </div>
                <div className={styles.price_box}>
                  <div className={styles.pricecontainer}>
                    <span className={styles.mktprice}>
                      &#8377;{curelm.special_price}
                    </span>
                    <span className={styles.actualprice}>{curelm.price}</span>
                    <span
                      className={styles.discount}
                    >{`(${curelm.discount}%off)`}</span>
                  </div>
                  <div className={styles.bagicon}>{productData.icon2}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductGalary;
