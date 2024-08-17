import React from 'react'

const Values = ({value,number}) => {
  return (
    <div className='flex flex-col justify-center items-center w-[25%] max-[640px]:w-[90%]'>
      <div className='text-2xl'>Value {number}</div>
      <div className='underline underline-offset-4 decoration-dashed text-lg text-justify'>{value}</div>
    </div>
  )
}

export default Values
