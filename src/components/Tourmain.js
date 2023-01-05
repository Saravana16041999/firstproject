
import React from 'react'

import Tour from './Tour'
const Tourmain = ({tours, deleteuser }) => {
  return (
    tours.map((tour)=>{
        return(
        <Tour tour={tour} deleteuser = {deleteuser}/>
        )
    })
  )
}

export default Tourmain

