import React from 'react'

export default function Button({ clicked }) {
    return (
        <div>
            <button onClick={clicked}>Add movie</button>
        </div>
    )
}
