import { useState } from 'react'

const Button =(props)=>{
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal]=useState(0)


  const handleGoodClick = () => {
    const updatedGood= good +1;
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)

  };

  const handleNeutralClick=()=>{
    const updatedNeutral=neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral +good + bad)
  };

  const handleBadClick=()=>{
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