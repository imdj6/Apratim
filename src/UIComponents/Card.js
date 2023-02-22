import React from 'react';
import './Card.css';

export default function Card({title, banner, para, time, venue, type}) {
  return (
    <div className='card'>
        <img className='card-img' alt={title} src={banner} />
        <div className='card-heading'>{title}</div>
        <div className='card-para'>{para}</div>
        <div className='card-footer'>
          <div className='card-left'>
            <div className='card-time'>
              Time: {time}
            </div>
            <div className='card-venue'>
              Venue: {venue}
            </div>
          </div>
          <div className='card-right'>
            <div className='card-badge'>
              {type}
            </div>
          </div>
        </div>
    </div>
  )
}