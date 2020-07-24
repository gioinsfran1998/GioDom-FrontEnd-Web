import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";

import camera from "../assets/camera.svg";

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardGroup,
} from "@coreui/react";
export default function TheForm() {
  const [thumbnail, setThumbnail] = useState(null);

  let history = useHistory();

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  function Salve() {
    console.log(history);
    history.push("/settings/products");
  }

  return (
    <CCard style={{ backgroundColor: "#ebedef" }}>
      <CCardHeader>
        <CButton color="success" onClick={Salve}>
          Guardar
        </CButton>
      </CCardHeader>
      <CCardBody>
        <label
          id="thumbnail"
          style={{ backgroundImage: `url(${preview})` }}
          className={thumbnail ? "has-thumbnail" : ""}
        >
          <input
            type="file"
            onChange={(event) => setThumbnail(event.target.files[0])}
          />
          <img src={camera} alt="Selecione una image" />
        </label>
      </CCardBody>
    </CCard>
  );
}
