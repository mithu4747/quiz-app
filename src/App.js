import { useEffect, useState } from "react";
import "./App.css";
import data from "./compoents/data";
import Quiz from "./compoents/Quiz";
import Timer from "./compoents/Timer";
import Plays from "./compoents/Plays";




const App = () => {
  const [username, setUsername] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [scored, setScored] = useState("0")

  const score = [
    { id: 1, answer: "1" },
    { id: 2, answer: "2" },
    { id: 3, answer: "3" },
    { id: 4, answer: "4" },
    { id: 5, answer: "5" },
    { id: 6, answer: "6" },
    { id: 7, answer: "7" },
    { id: 8, answer: "8" },
    { id: 9, answer: "9" },
    { id: 10, answer: "10" }

  
  ].reverse();
  
  useEffect(()=>{
    questionNumber > 1 && setScored(score.find((score)=>score.id === questionNumber - 1).answer)
  }, [score, questionNumber])
  return (
    <div className="app_container">
      
      {
        username ? <><div className="main">
      {
        stop ? questionNumber - 1 === data.length ? (<div className="winner"> <div>Congratulations!</div>You Scored: <span className="scored-point">{scored}/10</span></div>) :  (<div className="scored">You Scored: {scored}/10</div>) : (<> <div className="top">
          <Timer setStop={setStop} questionNumber={questionNumber}  />
        </div>
        <div className="bottom">
         <Quiz data={data} scored={scored}  setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
        </div></>)
      }
       
      </div>
  
    </> : <Plays setUsername={setUsername}/>
      }

      </div>
  );
};

export default App;