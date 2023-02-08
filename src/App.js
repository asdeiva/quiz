import questions from "./components/questions";
import { useState } from "react";
import React from "react";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState(false);
  const replay = () => {
    setQuestionIndex(0);
    setScore(0);
    setResults(false);
  };
  const present_question = questions[questionIndex];
  const get_Choice = (index) => {
    if (present_question.answer === index) {
      setScore(score + 1);
    }
    const next_question = questionIndex + 1;
    if (next_question < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setResults(true);
    }
  };
  return (
    <div className="quiz_box">
      
      {results ? (
        <>
        <div className="resultDiv">
          <h1>Your Score : {score}</h1>
          <button className="againBtn" onClick={replay}>
            Play Again
          </button>
          </div>
        </>
      ) : ( 
        <div className="quiz_question">
          <div className="qustions">{present_question.question}</div>
          

          <div className="quiz_box_options"></div>
          <ul className="quiz_ul">
            {present_question.options.map((option, i) => {
              return (
                <li className="quiz_li" onClick={() => get_Choice(i)}>
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
function car({ make, model }) {
  return (
    <h1>
      {make} {model}
    </h1>
  );
}
export default App;
