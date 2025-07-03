import React from 'react'

const Card = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Card