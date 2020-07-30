import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";

import camera from "../assets/camera.svg";

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
} from "@coreui/react";

export default function TheForm(props) {
  const [thumbnail, setThumbnail] = useState(null);
  const [name, setName] = useState("");

  let history = useHistory();

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  function Salve() {
    history.push("/settings/products");
  }

  return (
    <CCard style={{ backgroundColor: "#ebedef" }}>
      <CCardHeader>
        <CButton color="secondary" onClick={Salve} style={{ width: 80 }}>
          Cancelar
        </CButton>{" "}
        <CButton color="success" onClick={Salve} style={{ width: 80 }}>
          Guardar
        </CButton>
      </CCardHeader>
      <CCardBody>
        <CRow
          style={{
            marginLeft: "180px",
            marginBottom: "30px",
            marginRight: "380px",
            alignItems: "center",
          }}
        >
          <CCol xs="12">
            <CFormGroup row>
              <label
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? "has-thumbnail" : ""}
              >
                <input
                  type="file"
                  onChange={(event) => setThumbnail(event.target.files[0])}
                />
                <img src={camera} alt="Selecione tu producto" />
              </label>
              <span style={{ fontSize: 48 }}>{name}</span>
            </CFormGroup>
          </CCol>
        </CRow>

        <CRow style={{ marginLeft: "180px", marginRight: "380px" }}>
          <CCol xs="12">
            <CFormGroup>
              <CInput
                id="ccnumber"
                placeholder={`Nombre del ${props.match.params.name}`}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </CFormGroup>
          </CCol>
        </CRow>
        {props.match.params.type === "producto" ? (
          <CRow style={{ marginLeft: "180px", marginRight: "380px" }}>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="ccmonth">Categoria</CLabel>
                <CSelect custom name="ccmonth" id="ccmonth">
                  <option>Selecione una categoria</option>
                  <option value="combustible">Combustible</option>
                  <option value="insumo">Insumos</option>
                </CSelect>
              </CFormGroup>
            </CCol>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="ccyear">Costo</CLabel>
                <CInput
                  id="cost"
                  placeholder="costo de la mercaderia"
                  type="Number"
                />
              </CFormGroup>
            </CCol>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="price">Precio</CLabel>
                <CInput
                  id="cvv"
                  placeholder="precio de venta"
                  type="number"
                  required
                />
              </CFormGroup>
            </CCol>
          </CRow>
        ) : (
          <CRow style={{ marginLeft: "180px", marginRight: "380px" }}>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="price">Contacto</CLabel>
                <CInput
                  id="contactName"
                  placeholder="Nombre del contato"
                  type="text"
                  required
                />
              </CFormGroup>
            </CCol>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="celphone">Celualar</CLabel>
                <CInput id="cost" placeholder="Numero de contacto" />
              </CFormGroup>
            </CCol>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="price">Direccion</CLabel>
                <CInput
                  id="cvv"
                  placeholder="Direccion o referencia"
                  type="text"
                  required
                />
              </CFormGroup>
            </CCol>
          </CRow>
        )}
      </CCardBody>
    </CCard>
  );
}
