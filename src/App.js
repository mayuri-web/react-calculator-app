import React, {useState} from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Result from './components/Result';
import History from './components/History';

function App() {
  const [result, setResult] = useState('');
  const [showHistory, setShowHistory] = useState(false);

  const handleClick = (e) => {
    let val = e.target.name;

    if(val === '=') {
      let initialValue = result;
      let output;
      try 
      {
        output = eval(result);
        setResult(output);
      } 
      catch (error)
      {
        setResult("Error");
      }
      let calculations = JSON.parse(localStorage.getItem('history')) || [];
        calculations.push(`${initialValue} = ${output},  ` );
        localStorage.setItem('history', JSON.stringify(calculations));
    }
    else if( val === 'Clear'){
      setResult('');
    }
    else if(val === 'C'){
      setResult(result.slice(0, -1));
    }
    else if(val === 'H'){
      setShowHistory(true)
    }
    else{
      setResult(result.concat(val));
    }
  }

  const backBtn = () => {
    setShowHistory(!showHistory);
  }

  return (
    <>
      {
        showHistory == true ? <History handleback={backBtn}/> 
          :  (
            <div className='container'>
              <Result inp={result} />
              <div className='keypad'>
                  <Buttons name="Clear" id="clear" click={handleClick}/>
                  <Buttons name="H" id="historybtn" click={handleClick} /> 
                  <Buttons name="C" id="backspace" click={handleClick} />
                  <Buttons name="/" click={handleClick} />
                  <Buttons name="7" click={handleClick} />
                  <Buttons name="8" click={handleClick} />
                  <Buttons name="9" click={handleClick} />          
                  <Buttons name="-" click={handleClick} />
                  <Buttons name="4" click={handleClick} />
                  <Buttons name="5" click={handleClick} />
                  <Buttons name="6" click={handleClick} />
                  <Buttons name="+" click={handleClick} />
                  <Buttons name="1" click={handleClick} />
                  <Buttons name="2" click={handleClick} />
                  <Buttons name="3" click={handleClick} />
                  <Buttons name="*" click={handleClick} />
                  <Buttons name="0" click={handleClick} />
                  <Buttons name="." click={handleClick} />
                  <Buttons name="=" click={handleClick}  />
              </div>
            </div>
          )
      }
    </>
  );
}

export default App;
