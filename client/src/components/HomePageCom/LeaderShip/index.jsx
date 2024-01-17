import React from 'react'
import "./index.scss"
import CardPeople from '../../CardPeop'
const Leader = () => {
  return (
    <setion id="leader">
<div className="header">
  <h3>TEAM</h3>
  <h2>Leadership</h2>
</div>
<div className="container">
  <div className="row">
    <CardPeople/>
    <CardPeople/>
    <CardPeople/>
  </div>
</div>

    </setion>
  )
}

export default Leader