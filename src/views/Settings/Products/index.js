import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CHeader,
} from "@coreui/react";
import TheHeaderApp from "../../../containers/TheHeaderApp";
import "./styles.css";
export default function Products() {
  return (
    <CCard>
      <CCardHeader>
        <CButton color="success">Nuevo</CButton>
      </CCardHeader>

      <CCardBody>
        <CCard>
          <CCardBody style={{ width: "18px" }}></CCardBody>
        </CCard>
      </CCardBody>
    </CCard>

    // <div className="containerApp">

    //   <TheHeaderApp labelBotton="Nuevo" />
    //   <h1>Produtos</h1>
    // </div>
  );
}
