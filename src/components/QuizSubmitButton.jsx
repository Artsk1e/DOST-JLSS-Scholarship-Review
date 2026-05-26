export default function QuizSubmitButton({
  isAnswered,
  onClick
}) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-standard transition-all"
    >
      {isAnswered ? 'Review Another Topic' : 'Evaluate Selection'}
    </button>
  )
}
