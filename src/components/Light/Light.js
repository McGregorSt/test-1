import React from 'react'

import './Light.css'

export default function Light({ styles, turnOn }) {

    return (
        <div className={styles} onClick={turnOn}>
            
        </div>
    )
}
