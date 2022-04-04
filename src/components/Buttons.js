import React from 'react'
import '../App.css';

function Buttons(props) {

  return (
    <>
        <div>
          <button name={props.name}  onClick={props.click}>{props.name}</button>
        </div>
    </>
  )
}

export default Buttons
