import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Product from "../components/productContainer/Product";
import ProductImage from "../components/ProductImageList/ProductImage";
import MidLine from "../components/MidLine/MidLine";
import ProductGallery from "../components/ProductGalary/ProductGalary";
export default function Home() {
  return (
    <>
      <NavBar />
      <Product />
      <ProductImage />
      <MidLine />
      <ProductGallery />
    </>
  );
}
