import React from 'react';
import Card from './Card'
import './App.css';

function App() {
    return (
        <div className="App">
            <Card progress={13} title={'Interview Preparation Kit'} problemsSolved={13} totalProblems={69} description={'INTERVIEW PREPARATION'}/>
            <Card progress={50} title={'Problem Solving Kit'} problemsSolved={42} totalProblems={84} description={'PROBLEM SOLVING'}/>
        </div>
    );
}

export default App;
