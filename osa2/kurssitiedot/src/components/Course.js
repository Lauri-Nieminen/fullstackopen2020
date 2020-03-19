import React from 'react'

const Course = (props) => {
    return (
        <div>
            <Header  course={props.course.name} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </div>   
    )
}

const Header = ({course}) => {
    return (
        <>
            <h1>{course}</h1>
        </>
    )
}
const Content = ({parts}) => {
    return (
        <>
            {parts.map( (part, i)  =>
                <Part key={part.id} part={part.name} exercises={part.exercises} />
                
            )}
        </>
    )
}

export default Course

const Part = ({part, exercises}) => {
    return (
        <>
            <p>{part} {exercises}</p>
        </>
    )
}

const Total = ({parts}) => {
    return (
        <>
            <b>total of exerices {parts.map( (part) => part.exercises ).reduce((total,exercises) => total+exercises,0) }</b>
        </>
    )
}