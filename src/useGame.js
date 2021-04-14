import { useState, useRef, useEffect } from "react"

const useGame = (startingTime) => {

    const [timeLeft, setTimeLeft] = useState(startingTime)
    const [isGameRunning, setIsGameRunning] = useState(false)
    const [text, setText] = useState("")
    const [wordCount, setWordCount] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const inputRef = useRef()

    const startGame = () => {
        setIsGameRunning(true)
        setText("")
        setWordCount("Counting!!!")
        inputRef.current.disabled = false
        inputRef.current.focus()
    }

    const endGame = () => {
        setTimeLeft(startingTime)
        setIsGameRunning(false)
        setWordCount(getWordCount(text))
        if (wordCount > highScore) {
            setHighScore(wordCount)
        }
    }

    const handleChange = (e) => {
        const { value } = e.target
        setText(value)
    }

    const getWordCount = (text) => {
        const words = text.trim().split(' ')
        return words[0] === '' ? 0 : words.length
    }

    useEffect(() => {
        if (isGameRunning && timeLeft > 0) {
            setTimeout(() => {
                setTimeLeft(time => time - 1)
            }, 1000)
        } else if (timeLeft === 0) {
            endGame()
        }
    }, [timeLeft, isGameRunning])

    return { inputRef, handleChange, text, isGameRunning, timeLeft, startGame, wordCount }
}

export default useGame