import React from "react";
//import styles from "../styles/Product.module.css";
import Buy from "./Buy";

export default function Product({ product }) {
  const { id, name, price, description, image_url } = product;

  return (
    <div>
      <Buy itemID={id} />
    </div>
  );
}
