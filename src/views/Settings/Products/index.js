import React from "react";
import TheGrid from "../../../containers/TheGrid";
import foto from "../../../assets/img/nafta-92.png";

export default function Products({ history }) {
  const products = [
    "nafta96",
    "nafta85",
    "disel normal",
    "disel podium",
    "nafta92+",
    "nafta85",
    "disel normal",
    "disel podium",
    "nafta92+",
    "nafta85",
    "disel normal",
    "disel podium",
    "nafta92+",
  ];
  return <TheGrid itens={products} foto={foto} price />;
}
