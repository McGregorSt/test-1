import React from 'react'

export default function Input({ placeholder, onChange }) {
    return (
        <div>
            <input placeholder={placeholder} onChange={onChange}></input>
        </div>
    )
}
