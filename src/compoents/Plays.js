import React, { useRef } from 'react'

const Plays = ({setUsername}) => {
    const inputRef = useRef();
   

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value)
  
    }
    return (
      <>
   <img  style={{height:'640px',width:'700px',bottom:'0px'}} src="https://en.akinator.com/bundles/elokencesite/images/akitudes_670x1096/defi.png?v95" alt="" />
            <div className="start">
            
                <div className="quiz-game"><h1> Quiz App </h1></div>
             <input placeholder="Enter Your Name " className="startInput " ref={inputRef} />
                <button className="startButton" onClick={handleClick}>play</button>
            </div>
      </>
    )
}

export default Plays