import React from 'react'
import Image from 'next/image'

const Tag = ({tag, handleEditTag}) => {
  return (
    <div className='flex justify-between px-6 py-6 w-[722px] ml-20 items-center border border-[#CECFD8] rounded-lg'>
        <div className='flex gap-4 items-center'>
          <Image src="/icons/tag.svg" alt='tag' width={40} height={40}/>
          <div className='text-xl text-[#0B103A]'>{tag.name}</div>
        </div>
        <Image src="/icons/arrow.svg" alt='arrow' width={40} height={40} onClick={()=>{
          handleEditTag(tag)
        }}/>
    </div>
  )
}

export default Tag