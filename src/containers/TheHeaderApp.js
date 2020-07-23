import React from "react";
import styled from "styled-components";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
export default function (props) {
  return (
    <Div>
      <CButton active color="dark" aria-pressed="true">
        {props.labelBotton}
      </CButton>
    </Div>
  );
}

const Div = styled.div`
  background-color: #ebedef;
  height: 50px;
  width: 100%;
`;
const Button = styled.button`
  color: #ffffff;
  background-color: #6ec89b;
  top: 15px;
`;
