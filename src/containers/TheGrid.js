import React from "react";

import { useHistory } from "react-router-dom";

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardGroup,
} from "@coreui/react";

import TheFormik from "./TheFormik";

const handleSubmit = (values) => alert(JSON.stringify(values));
const initialValues = {};

export default function TheGrid(props) {
  let history = useHistory();
  function New() {
    history.push(
      `/settings/form/${props.price ? "producto" : "otros"}/${props.name}`,
      { some: "state" }
    );
  }
  return (
    <>
      <TheFormik handleSubmit={handleSubmit} initialValues={initialValues} />
      <CCard style={{ backgroundColor: "#ebedef" }}>
        <CCardHeader>
          <CButton
            color="primary"
            onClick={New}
            style={{
              width: 80,
              backgroundColor: "#3399ff",
              borderColor: "#3399ff",
            }}
          >
            Nuevo
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CCardGroup columns className="cols-1 p-2">
            {props.itens &&
              props.itens.map((pro, index) => (
                <CCard
                  key={index}
                  style={{
                    width: 150,
                    height: 150,
                    marginLeft: 30,
                    marginBottom: 20,
                    backgroundColor: "#ffffff",
                    borderRadius: 0,
                    borderTop: 0,
                    borderLeft: 0,
                    borderRight: 0,
                    borderBottomWidth: 2,
                    cursor: "pointer",
                  }}
                  onClick={New}
                >
                  <CCardBody>
                    {props.price && (
                      <div
                        style={{
                          backgroundColor: "#3399FF",
                          width: 75,
                          height: 22,
                          textAlign: "center",
                          borderRadius: 2,
                          right: 1,
                          position: "absolute",
                          top: 5,
                        }}
                      >
                        <p style={{ color: "#fff" }}>5.830 Gs</p>
                      </div>
                    )}
                    {props.foto && (
                      <img
                        src={props.foto}
                        style={{
                          height: 100,
                          width: 100,
                        }}
                      />
                    )}
                    <p
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 10,
                        color: "#999",
                      }}
                    >
                      {pro}
                    </p>
                  </CCardBody>
                </CCard>
              ))}
          </CCardGroup>
        </CCardBody>
      </CCard>
    </>
  );
}
