import React from 'react';
import './Event.css';


const Event = () => {
    return (
        <div className='event'>
            <div className='left'>
                <ul>
                    <li>july 28, 2024</li>
                    <li>sunset sessions</li>
                </ul>
            </div>
            <div className='middle'>
                <ul>
                    <li>dallas, tx</li>
                </ul>
            </div>
            <div className='right'>
                <ul>
                    <button className='ticketBtn'>tickets</button>
                </ul>
            </div>
        </div>
    )
}

export default Event;