import { useRef, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import {clearInput, setInput,calc} from "./libs/Func";

function App() {
  const refScreen= useRef(null);
  return (
    <>
      <h1 align="center" style={{ marginTop:"20px" }}>Calculator</h1>
      <div className='container'>
        <div className='screen'>
          <p ref={refScreen}>5+5</p>
        </div>
        <div className='action'>
          <div className='row'>
            <Button text="C" click={()=>clearInput(refScreen)}/>
            <Button text="X" />
          </div>
          <div className='row'>
            <Button text="+" click={()=>setInput(refScreen,"+")} />
            <Button text="-" click={()=>setInput(refScreen,"-")}/>
            <Button text="/" click={()=>setInput(refScreen,"/")}/>
            <Button text="*" click={()=>setInput(refScreen,"*")}/> {
              [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                0,
                "00"
              ].map((num, key) => < Button click={()=>setInput(refScreen,num)} key={
                key
              }
                text={
                  num
                } />)
            }
            <Button text="=" click={()=>calc(refScreen)}/>
          </div>
        </div>


      </div>
    </>
  );
}

export default App;
