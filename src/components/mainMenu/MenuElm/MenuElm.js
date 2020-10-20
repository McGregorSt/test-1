import React from 'react'

import './MenuElm.css'

export default function MenuElm({ elm, clickMenuBtn }) {
    return (
        <div className='menuElm' onClick={clickMenuBtn}>
            { elm }
        </div>
    )
}


