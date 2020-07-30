import React from "react";
import TheGrid from "../../../containers/TheGrid";
import foto from "../../../assets/avatar.jpg";
export default function Customers() {
  const customers = [
    "cliente 1",
    "cliente 2",
    "cliente 3",
    "cliente 4",
    "cliente 5",
    "cliente 6",
    "cliente 8",
    "cliente 9",
    "cliente 10",
    "cliente 11",
  ];
  return <TheGrid itens={customers} foto={foto} name="cliente" />;
}
