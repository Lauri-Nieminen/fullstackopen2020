import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header  course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>   
    )
}

const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}
const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
            <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
            <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
        </div>
    )
}

const Part = (props) => {
    return (
        <>
            <p>{props.part} {props.exercises}</p>
        </>
    )
}

const Total = (props) => {
    return (
        <>
            <p>Number of exerices {props.parts[0].exercises + props.parts[1].exercises +props.parts[2].exercises}</p>
        </>
    )
}
/*
    return (
        <div>
            <h1>{course}</h1>
            <p>
                {part1} {exercises1}
            </p>
            <p>
                {part2} {exercises2}
            </p>
            <p>
                {part3} {exercises3}
            </p>
            <p>Number of exerices {exercises1 + exercises2 + exercises3}</p>

        </div>
    )
*/


ReactDOM.render(<App />, document.getElementById('root'))