import React, { useState } from 'react'
import Button from './Button/Button'
import Input from './Input/Input'

import './InputForm.css'

export default function InputForm({ onTitleChange, onNumberChange, clicked }) {
    
    return (
        <div className='InputForm'>
            Input Form
            <Input placeholder='Title' onChange={onTitleChange} />
            <Input placeholder='Number' onChange={onNumberChange} />
            <Button clicked={clicked}/>
        </div>
    )
}
