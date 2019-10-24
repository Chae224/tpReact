import React, {useState, useEffect} from 'react';

const bgColor = ["red", "blue", "green", "yellow"];

const ColorChanging = (props) => {
   const [currentColor, setCurrentColor] =  useState(localStorage.getItem("color") || bgColor[0])
   const [count, setCount] = useState(0+parseInt(localStorage.getItem("count")) || 0)
   useEffect(() => {
     localStorage.setItem("color", currentColor)
     localStorage.setItem("count", count)
   }, [currentColor, count])
   return (
    <div className="App">
      {bgColor.map(color => (
        <div
           key={color}
          style={{backgroundColor: color }}
          onClick={() => {
               setCurrentColor(color)
               setCount(count +1)
           }
          }
        >
          {color}
        </div>
      ))}
      <Mirror count={count} color={currentColor} />
    </div>
   );
}
export const Mirror = (props) => {
   const [currentColor, setCurrentColor] = useState(props.color)
   useEffect(() => {
       setCurrentColor(props.color)
   }, [props.color])
   return <div style={{ backgroundColor: currentColor }}>Mirroir : {props.count}</div>
}

export default ColorChanging;