import React from "react";
import TheGrid from "../../../containers/TheGrid";
import foto from "../../../assets/camera.svg";
export default function Users() {
  const users = ["Domenico", "Giovanni", "Marcelo"];
  return <TheGrid itens={users} foto={foto} />;
}
