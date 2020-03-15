import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState([0,0,0,0,0,0])
    const randomAnecdote = () => {
        const random = Math.floor(Math.random() * anecdotes.length)
        console.log("random", random) 
        setSelected(random)
    }

    const vote = () => {
        const newResults = [...votes]
        newResults[selected] += 1
        setVotes(newResults)
        console.log("Voted ",selected, newResults)
    }

    const getMostVotedIndex = () => (
        votes.indexOf(Math.max(...votes))
    )

    return (
        <div>
            <Anecdote text={props.anecdotes[selected]} voteCount={votes[selected]} title="Anecdote of the day"/>
            <Button text="vote" clickHandler={vote} />
            <Button text="next anecdote" clickHandler={randomAnecdote} />
            <Anecdote text={props.anecdotes[getMostVotedIndex()]} voteCount={votes[getMostVotedIndex()]} title="Anecdote with most votes"/>
        </div>
    )
}
const Anecdote = (props) => {
    return (
        <> 
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <p>has {props.voteCount} votes</p>
        </>
    )
}

const Button = (props) => (
    <button onClick={props.clickHandler}>{props.text}</button>
)

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));
