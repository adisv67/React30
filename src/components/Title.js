import React from 'react'

const Title = ({classes, text}) => {
  return (
    <div>
        <h1 className={!classes ? 'text-6xl text-cyan-700 font-bold' : classes}>
            {!text ? "Your name here" : text}
        </h1>
        
    </div>
  )
}

export default Title