import React from 'react'

import './MovieTicket.css'

export default function MovieTicket({ movieTitle, movieNumber, ticketClick, id }) {
    return (
        <div className='MovieTicket' onClick={ticketClick} id={id}>
            <span>{ movieTitle }</span> 
            <span>{ movieNumber }</span> 
        </div>
    )
}
