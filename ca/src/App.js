import './App.css';
import React, {useState} from "react";
function App(){
  const [count,setCount] = useState(0);
  return (
    <center>
          <div className="container">
            <div className="my-1">
              <div className="card-body">
                  <h1>Counter App</h1>
                  <div className="my-5">
                      <h2 className="my-6">{count}</h2>
                      <button style={{backgroundColor: "green", color:"white"}} className="mx-2" onClick={()=>setCount(count+1)}>Increment </button>
                      <button style={{backgroundColor: "red", color:"white"}} className="mx-3"onClick={()=>setCount(count-1)}>Decrement </button>
                      <button className="mx-4"onClick={()=>setCount(0)}>Reset </button>
                  </div>
              </div>
              <div>
                <br />
                Done by : Nikhil Deore - 12013292
              </div>
          </div>
        </div>
    </center>
  );
}
export default App;
