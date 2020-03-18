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
       <Course course={course} />
    )
}

const Course = (props) => {
    return (
        <div>
            <Header  course={props.course.name} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
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
        <>
            {props.parts.map( (part, i)  =>
                <Part part={part.name} exercises={part.exercises} />
                
            )}
        </>
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
            <p>Number of exerices {props.parts.map( (part) => part.exercises ).reduce((a,b) => a+b,0) }</p>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))