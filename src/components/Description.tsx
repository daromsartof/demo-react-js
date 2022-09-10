import React from 'react'

function Description(_props:any):JSX.Element {
  return (
    <div className="kl-title">
        <h3>{_props._title}</h3>
        <p>{_props._more}</p>
    </div>
  )
}

export default Description