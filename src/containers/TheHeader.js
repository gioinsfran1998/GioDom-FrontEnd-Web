import React from 'react';
import CIcon from '@coreui/icons-react'


import {
    CHeader,
    CToggler,
    CHeaderBrand,
    CHeaderNav,
    CHeaderNavItem,
    CHeaderNavLink,
    CSubheader,
    CBreadcrumbRouter,
    CLink
  } from '@coreui/react'

import TheHeaderDropdown from './index'



const TheHeader = () => {

    return(
            <CHeader withSubheader>

                <CToggler inHeader className='ml-md-3 d-lg-none' />
                <CToggler inHeader className="ml-3 d-md-down-none" />

                <CHeaderBrand className="mx-auto d-lg-none" to="">
                    <CIcon name="logo" height="48" alt="Logo"/>
                </CHeaderBrand>
                
                <CHeaderNav className="d-md-down-none mr-auto">
                    <CHeaderNavItem className="px-3" >
                      <CHeaderNavLink to="">Dashboard</CHeaderNavLink>
                    </CHeaderNavItem>
                    <CHeaderNavItem  className="px-3">
                      <CHeaderNavLink to="">Users</CHeaderNavLink>
                    </CHeaderNavItem>
                    <CHeaderNavItem className="px-3">
                      <CHeaderNavLink>Settings</CHeaderNavLink>
                    </CHeaderNavItem>
                 </CHeaderNav>
                 
            </CHeader>
    );
}

export default TheHeader; 