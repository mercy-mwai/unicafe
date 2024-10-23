import { useState } from 'react'

const Button =(props)=>{
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal]=useState(0)


  const handleGoodClick = () => {
    /*setGood(good + 1);*/
    const updatedGood= good +1;
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)

  };
  const handleNeutralClick=()=>{
    /*setNeutral(neutral + 1)*/
    const updatedNeutral=neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral +good + bad)
  };
  const handleBadClick=()=>{
    /*setBad(bad + 1)*/
    const updatedBad=bad +1
    setBad(updatedBad)
    setTotal(updatedBad+ good + neutral)
  };
  

  return (
    <div>
    <p>give feedback</p>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <p>Statistics</p>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total:{total}</p>
    </div>
  );
};

export default App