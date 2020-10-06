import React from 'react';
import './App.css';

function Card(props) {
    return (
        <div className="App">
            <div className="Container">
                <div className="Flex-Item" style={{color: 'gray'}}>
                    {props.description}
                </div>

                <div className="Flex-Item">
                    <h3 style={{margin: 0, fontSize:'20px'}}>{props.title}</h3>
                </div>

                <div style={{display: 'flex'}}>
                    <div className="Flex-Item" style={{margin:'5px 0 5px 5px', width: `${props.progress}%`, height:'4px', backgroundColor:'black'}}></div>
                    <div className="Flex-Item" style={{margin:'5px 0 5px 0' , width:  `${100 - props.progress}%`, height:'4px', backgroundColor:'lightgray'}}></div>
                </div>


                <div className="Flex-Item">
                    <b>{props.progress}%</b> ({props.problemsSolved}/{props.totalProblems} challenges solved)
                </div>
                <div className="Flex-Item Continue-Button">
                    Continue Practice
                </div>
            </div>
        </div>
    );
}

export default Card;
