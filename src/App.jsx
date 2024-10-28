import { useState } from 'react';

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

const StatisticLine = ({ text, value }) => {
  return(
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}

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
    <StatisticLine value={good} text="good" />
    <StatisticLine value={neutral} text="Neutral" />
    <StatisticLine value={bad} text="Bad" />
    <StatisticLine value={average.toFixed(2)} text="Average" />
    <StatisticLine value={`${positivePercentage.toFixed(2)}%`} text="Positive" />
    </tbody>
    </table>
  </div>
  );
};

const App = () => {

const anecdotes=[
 'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
    "Good code is its own best documentation. As you're about to add a comment, ask yourself, 'How can I improve the code so that this comment isn't needed?' Improve the code and then document it to make it even clearer."

]

const displayRandomAnecdote = () => {
  const randomIndex = Math.floor(Math.random() * anecdotes.length);
  setSelected(randomIndex);
};

const voteForAnecdote = () => {
  const copy = [...votes];
  copy[selected] += 1;
  setVotes(copy);
};

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [selected,setSelected]=useState(0)
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
      <p>{anecdotes[selected]}</p>
      <button onClick={displayRandomAnecdote}>Next anecdote</button>
      <p>Votes: {votes[selected]}</p>
      <button onClick={voteForAnecdote}>Vote</button>
    </div>
  );
};

export default App;
