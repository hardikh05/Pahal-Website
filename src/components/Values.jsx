import React from 'react'

const Values = ({value,number}) => {
  return (
    <div className='flex flex-col justify-center mt-4 border-2 p-4 shadow-md bg-[#f4f1f1]  rounded-lg md:mt-4 md:mb-4 items-center w-[25%] max-[640px]:w-[90%]'>
      <div className='text-2xl'>{number}</div>
      <div className='text-md text-center'>{value}</div>
    </div>
  )
}

export default Values
