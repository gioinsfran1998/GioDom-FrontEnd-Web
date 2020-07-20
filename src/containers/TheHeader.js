import React from 'react';
import CIcon from '@coreui/icons-react'
import {
    CHeader,
    CToggler,
    CHeaderBrand
  } from '@coreui/react'

import TheHeaderDropdown from './index'


const TheHeader = () => {

    return(
            <CHeader withSubheader>

                <CToggler inHeader className='ml-md-3 d-lg-none' />
                <CToggler inHeader className="ml-3 d-md-down-none" />

                <CHeaderBrand className="mx-auto d-lg-none" to="/">
                </CHeaderBrand>
                
            </CHeader>
    );
}

export default TheHeader; 