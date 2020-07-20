import React from 'react'
import {
    CBadge,
    CDropdown,
    CDropdownMenu,
    CDropdownItem,
    CDropdownToggle,
    CImg
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {
    return (
        <CDropdown>
            <CDropdownToggle>
                <div>
                    <h2>TheHeaderDropdown</h2>
                </div>
            </CDropdownToggle>
        </CDropdown>
    )
}

export default TheHeaderDropdown;