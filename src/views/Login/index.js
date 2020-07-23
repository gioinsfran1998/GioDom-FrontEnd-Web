import React from 'react'
import * as L from './styles'
import CIcon from '@coreui/icons-react'
import LogoBota from '../../assets/logobota.png'

import {
  CButton,
  CInput,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'

const indexLogin = () => {
  return (
      <L.Container className="Container">
            <L.CardLogin>

              <img src={LogoBota} className="logoBota"/>

              <div className="TextCard">
                  <h1>Bienvenido</h1>
                  <h5>Ingrese a su cuenta</h5>
              </div>

              <div className="inputContainer">
                    <CInputGroup className="box-input">
                              <CInputGroupText>
                                <CIcon name="cil-user" />
                              </CInputGroupText>
                        <CInput type="text" placeholder="Username" autoComplete="username" />
                    </CInputGroup>

                    <CInputGroup className="box-input">
                           
                              <CInputGroupText>
                                <CIcon name="cil-lock-locked" />
                              </CInputGroupText>
                           
                            <CInput type="password" placeholder="Password" autoComplete="current-password" />
                    </CInputGroup> 
              </div>

              <div className="buttonContainer">
                      
                        <CButton color="primary" className="px-4 button buttonIngresar">Ingresar</CButton>
                        <CButton color="link" className="px-0 button">Olvido su contraseña?</CButton>
                     
              </div>

            </L.CardLogin>
      </L.Container>
  )
}

export default indexLogin