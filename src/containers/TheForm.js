import React from "react";
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardGroup,
} from "@coreui/react";
export default function TheForm() {
  let history = useHistory();
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
      <CCardBody></CCardBody>
    </CCard>
  );
}
