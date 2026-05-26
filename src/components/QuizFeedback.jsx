export default function QuizFeedback({ isCorrect, explanation, isShowing }) {
  if (!isShowing) return null

  return (
    <div
      className={`mt-6 p-6 rounded-standard ${
        isCorrect
          ? 'bg-success-bg border-2 border-success'
          : 'bg-error-bg border-2 border-error'
      } quiz-feedback-enter`}
    >
      <h4 className={`font-bold text-lg mb-3 ${
        isCorrect ? 'text-success' : 'text-error'
      }`}>
        {isCorrect ? '✓ Correct!' : '✗ Not Quite Right'}
      </h4>
      <p className="text-text-main">{explanation}</p>
    </div>
  )
}
