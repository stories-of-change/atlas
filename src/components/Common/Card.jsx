import React from 'react'
import cardimg from '../../assets/card-img.png'

export default function Card({ title, district, description, country, thumbnailUrl, url }) {
    return (
        <a href={url}>
            <div className='custom-card'>
                <div className='card-img'>
                    <img src={thumbnailUrl} />
                </div>
                <div className='card-body'>
                    <span>Impact</span>
                    <h2>{title}</h2>
                    {/* <ul className='card-tags'>
                    <li>Urban</li>
                    <li>Pollution</li>
                </ul> */}
                    {/* <h3>Shidhulai Sanivar Sangstha</h3>
                <div className='infos'>
                    <p>OPERATES IN <span>{district}</span></p><p>BASED IN <span>{country}</span></p>
                </div> */}
                </div>
            </div>
        </a>
    )
}
