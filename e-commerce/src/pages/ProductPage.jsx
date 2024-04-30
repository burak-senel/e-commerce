import React from "react";
import ProductDetailPage from "../layout/ProductPageLayout/ProductDetailPage";
import ProductDetailsMiddle from "../layout/ProductPageLayout/ProductDetailsMiddle";
import FooterClients from "../components/FooterClients";
import ProductBestSeller from "../layout/ProductPageLayout/ProductBestSeller";

function ProductPage() {
  return (
    <div>
      <ProductDetailPage />
      <ProductDetailsMiddle />
      <ProductBestSeller />
      <FooterClients />
    </div>
  );
}

export default ProductPage;
