import React from 'react'
import MovieTicket from './MovieTicket/MovieTicket'

import './MovieDisplay.css'

export default function MovieDisplay({ tickets, ticketClick, id }) {

    return (
        <div className='MovieDisplay'>
            { tickets.map(({ title, number}, index) => (
                <MovieTicket key={`${title}${number}`} movieTitle={title} movieNumber={number} ticketClick={ticketClick} id={index}/>
            ))}
        </div>
    )
}
