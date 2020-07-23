import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardGroup,
} from "@coreui/react";

export default function TheGrid(props) {
  return (
    <CCard style={{ backgroundColor: "#ebedef" }}>
      <CCardHeader>
        <CButton color="success">Nuevo</CButton>
      </CCardHeader>
      <CCardBody>
        <CCardGroup columns className="cols-1 p-2">
          {props.itens &&
            props.itens.map((pro) => (
              <CCard
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
                        right: 5,
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
  );
}
