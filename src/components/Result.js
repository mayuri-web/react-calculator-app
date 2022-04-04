import React from 'react'

function Result(props) {
    
  return (
    <>
        <div>
          <input type="text" onChange={() => props.inp.target.value}  // to avoid onchange warning error add on change function here
            value={props.inp} 
          /> 
        </div>
    </>
  )
}
export default Result
