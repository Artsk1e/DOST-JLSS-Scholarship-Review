import RadioOption from './RadioOption'

export default function QuizOptions({
  options,
  selectedAnswer,
  isAnswered,
  onSelect
}) {
  return (
    <div className="space-y-3 mb-6">
      {options.map((option, index) => {
        const answerKey = ['A', 'B', 'C', 'D'][index]
        return (
          <RadioOption
            key={answerKey}
            optionKey={answerKey}
            optionText={option}
            isSelected={selectedAnswer === answerKey}
            isAnswered={isAnswered}
            onChange={() => onSelect(answerKey)}
          />
        )
      })}
    </div>
  )
}
