import './App.css';
import { useState } from 'react';

function App() {
  const [otp,setOtp] = useState(new Array(6).fill(""));
  const change = (elt,index) => {
    if(isNaN(elt.value)){
      alert("please enter a valid input");
      return 
    }
    setOtp([...otp.map((dataCurrent,indexCurrent)=>(indexCurrent===index) ? elt.value : dataCurrent)])
  if(elt.value==="" && elt.previousSibling!==null){
    elt.previousSibling.focus();
  }
  if(elt.value!=="" && elt.nextSibling!==null){
    elt.nextSibling.focus();
  }
  }
  return (
    <div className="App">
      <div className="otp">
      {
      otp.map((data,index)=>{
        return <input 
        className="Boxes" 
        type="text" 
        key = {index}
        maxLength='1'
        name='otp'
        value={data}
        onChange={e=>change(e.target,index)}
        onFocus={e=> e.target.select()}
        />
      })
      }
      </div>
      <div className="button" onClick={()=>{
      alert("Submit Clicked");
      console.log(otp);
      }}>Submit</div>
    </div>
  );
}

export default App;
