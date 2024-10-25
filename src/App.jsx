import { useState } from 'react';

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

const StatisticLine = ({ text, value }) => (
  <div>
    {text}: {value}
  </div>
);

const Statistics= (props) => {
  const { good, neutral, bad } = props;

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  if(total===0){
    return(
      <div>
        <p>No feedback given </p>
      </div>
    )
  }
  return (
    <div>
    <table>
      <tbody>
        <tr>
          <td>Good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{average.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>{positivePercentage.toFixed(2)}%</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <p>Give feedback</p>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <p>Statistics</p>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
