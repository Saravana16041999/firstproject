import React from 'react'

const Tour = ({tour,deleteuser}) => {
    
  return (
    <div className='first_cont' key={tour.id}>
        <div className='img_two'>
        <img src={tour.image}/>
        </div>
        <div className='div_six'><h4>{tour.name}</h4>
        </div>
        <h3 className='dive_five'>{tour.price}</h3>
        <div className='div_four'>
            <p>{tour.info}</p>
        </div>
        <button type='button' onClick={()=>{deleteuser(tour.id)}}>Delete</button>
        </div>
  )
}

export default Tour