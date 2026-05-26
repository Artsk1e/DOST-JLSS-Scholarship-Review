import { useEffect } from 'react'
import { useQuiz } from '../hooks/useQuiz'
import QuizQuestion from './QuizQuestion'
import QuizOptions from './QuizOptions'
import QuizSubmitButton from './QuizSubmitButton'
import QuizFeedback from './QuizFeedback'

export default function QuizSection({ topic }) {
  const {
    selectedAnswer,
    isAnswered,
    isCorrect,
    showFeedback,
    handleSelectAnswer,
    handleSubmit,
    handleReset
  } = useQuiz(topic)

  useEffect(() => {
    handleReset()
  }, [topic.id])

  return (
    <div className="w-full">
      <QuizQuestion question={topic.challenge.question} />

      <QuizOptions
        options={topic.challenge.options}
        selectedAnswer={selectedAnswer}
        isAnswered={isAnswered}
        onSelect={handleSelectAnswer}
      />

      <QuizSubmitButton
        isAnswered={isAnswered}
        onClick={isAnswered ? handleReset : handleSubmit}
      />

      <QuizFeedback
        isCorrect={isCorrect}
        explanation={topic.challenge.explanation}
        isShowing={showFeedback}
      />
    </div>
  )
}
