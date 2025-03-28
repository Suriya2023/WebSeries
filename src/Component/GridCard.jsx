import React from 'react'
import './GridCard.css'

import D1 from './Images/d1 (1).webp'
import D2 from './Images/d1 (2).webp'
import D3 from './Images/d1 (3).webp'
import D4 from './Images/d1 (4).webp'
import D5 from './Images/d1 (5).webp'
import D6 from './Images/d1 (6).webp'
// import D7 from './Images/d1 (7).webp'
// import D8 from './Images/d1 (8).webp'

// import C1 from './Images/ISNUXDnamUUHrZbQdKexPE-4096x4096.webp'


function GridCard() {
    return (
        <div className='myclass'>
            <h1>Featured 3D Movies</h1>
            <p>Explore our curated collection of must-see 3D films</p>
            <div className="gallery">
                <div className="movie"><img src={D1} alt="Movie 1" /></div>
                <div className="movie"><img src={D2} alt="Movie 2" /></div>
                <div className="movie"><img src={D3} alt="Movie 3" /></div>
                <div className="movie"><img src={D4} alt="Movie 4" /></div>
                <div className="movie"><img src={D5} alt="Movie 5" /></div>
                <div className="movie"><img src={D6} alt="Movie 6" /></div>
            </div>
            <button className="explore-button">Explore More</button>
            <br id='nock' /><br id='nock' />

        </div>
    )
}

export default GridCard
