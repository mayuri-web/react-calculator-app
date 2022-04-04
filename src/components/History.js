import React, { useState } from 'react'

function History({handleback}) {
  const [dis, setDis] = useState((JSON.parse(localStorage.getItem('history')))); 
    
  const getHistory = () => {

    setDis((JSON.stringify(localStorage.removeItem('history'))));
  }
  
  return (
    <>
      <div>
        <h1>
            {dis}
        </h1>
      </div>
        <button onClick={getHistory}>Clear History</button>
        <button onClick={handleback}>Back</button>
    </>
  )
}

export default History
