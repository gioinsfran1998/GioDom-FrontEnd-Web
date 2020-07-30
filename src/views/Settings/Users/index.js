import React from "react";
import TheGrid from "../../../containers/TheGrid";
import foto from "../../../assets/avatar.jpg";
export default function Users() {
  const users = [
    "Usuario 1",
    "Usuario 2",
    "Usuario 3",
    "Usuario 4",
    "Usuario 5",
    "Usuario 6",
    "Usuario 7",
    "Usuario 8",
    "Usuario 9",
    "Usuario 10",
    "Usuario 11",
    "Usuario 12",
    "Usuario 13",
    "Usuario 14",
    "Usuario 15",
    "Usuario 16",
    "Usuario 17",
    "Usuario 18",
    "Usuario 19",
    "Usuario 20",
  ];
  return <TheGrid itens={users} foto={foto} name="usuario" />;
}
