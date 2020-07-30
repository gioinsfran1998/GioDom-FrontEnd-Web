import React from "react";
import TheGrid from "../../../containers/TheGrid";
import foto from "../../../assets/avatar2.png";
export default function Providers() {
  const providers = [
    "proveedor 1",
    "proveedor 2",
    "proveedor 3",
    "proveedor 4",
    "proveedor 5",
    "proveedor 6",
    "proveedor 7",
    "proveedor 8",
    "proveedor 9",
    "proveedor 10",
    "proveedor 11",
    "proveedor 12",
    "proveedor 13",
    "proveedor 14",
    "proveedor 15",
    "proveedor 16",
    "proveedor 17",
    "proveedor 18",
    "proveedor 19",
    "proveedor 20",
  ];
  return <TheGrid itens={providers} foto={foto} name="proveedor" />;
}
