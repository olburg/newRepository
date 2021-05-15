import React, {useState} from "react";

export default ( {id, counter, increaseHandle, decreaseHandle}  ) => {
  const [counter, setCounter] = useState(0)

  return (
  <div>
    <button id={id}
    actionFunction={increaseHandle}
    name="+1"/>
    {/* <button onClick={ ()=> increaseHandle(id)}>+1</button> */}
    <span>{counter}</span>
    <button id={id}
    actionFunction={decreaseHandle}
    name="-1"
    disabled={!counter}/>
    <button></button>


  </div>
  );
};
