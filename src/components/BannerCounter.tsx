import React from 'react'

type countAll = {
    countDetails:{
        digit: string,
        discription: string
    }
}

const BannerCounter = ({countDetails}: countAll) => {
  return (
    <div className='count--div p-3 shadow-sm m-2 rounded text-justify'>
        <h1>{countDetails.digit}</h1>
        <p className='count--discription'>{countDetails.discription}</p>
    </div>
  )
}

export default BannerCounter