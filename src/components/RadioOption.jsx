export default function RadioOption({
  optionKey,
  optionText,
  isSelected,
  isAnswered,
  onChange
}) {
  const optionMatch = optionText.match(/^([A-D])\)\s(.+)$/)
  const [, letter, text] = optionMatch || [null, optionKey, optionText]

  return (
    <label className="flex items-start gap-4 p-4 rounded-standard border-2 cursor-pointer transition-all hover:bg-bg-subtle"
      style={{
        borderColor: isSelected ? '#1E88E5' : '#CFD8DC',
        backgroundColor: isSelected ? '#E3F2FD' : 'white'
      }}>
      <input
        type="radio"
        name="quiz-option"
        value={optionKey}
        checked={isSelected}
        onChange={onChange}
        disabled={isAnswered}
        className="mt-1 accent-primary"
      />
      <span>
        <strong className="text-primary">{letter})</strong> {text}
      </span>
    </label>
  )
}
