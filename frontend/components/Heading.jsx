import React from 'react'

export function Heading({label}){
  return (
    <div className={'font-bold xl:text-4xl pt-6 min-[400px]:text-lg  min-[320px]:text-lg min-[280px]:text-lg'}>
      {label}
    </div>
  )
}