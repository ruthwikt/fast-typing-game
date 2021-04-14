import React from "react"
import useGame from "./useGame"
import "./App.css"

const App = () => {
 
    const { 
        inputRef, 
        handleChange, 
        text, 
        isGameRunning, 
        timeLeft, 
        startGame, 
        wordCount,
    } = useGame(4)

    return (
        <div className="container">
            <h1>Fast Typing Game <i className="fas fa-space-shuttle"></i></h1>
            <textarea 
                ref={inputRef}
                onChange={handleChange} 
                value={text} 
                disabled={!isGameRunning}
            />
            <h3>Time Remaining: {timeLeft} sec</h3>
            <button 
                onClick={startGame} 
                disabled={isGameRunning}
            > START </button>
            <h2>Word Count: {wordCount}</h2>
        </div>
    )
}

export default App