import { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const useQuiz = (topic) => {
  const { setQuizState } = useContext(AppContext)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleSelectAnswer = (answer) => {
    if (!isAnswered) {
      setSelectedAnswer(answer)
    }
  }

  const handleSubmit = () => {
    if (!selectedAnswer) return

    const correct = selectedAnswer === topic.challenge.correct
    setIsCorrect(correct)
    setIsAnswered(true)
    setShowFeedback(true)

    setQuizState({
      isAnswered: true,
      selectedAnswer,
      isCorrect: correct,
      showFeedback: true
    })
  }

  const handleReset = () => {
    setSelectedAnswer(null)
    setIsAnswered(false)
    setIsCorrect(null)
    setShowFeedback(false)

    setQuizState({
      isAnswered: false,
      selectedAnswer: null,
      isCorrect: null,
      showFeedback: false
    })
  }

  return {
    selectedAnswer,
    isAnswered,
    isCorrect,
    showFeedback,
    handleSelectAnswer,
    handleSubmit,
    handleReset
  }
}
