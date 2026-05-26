export default function TopicCard({ topic, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-standard p-6 shadow-sm hover:shadow-lg cursor-pointer transition-all border border-color-border hover:border-primary"
    >
      <div className="mb-3">
        <span className="inline-block bg-bg-primary text-primary px-3 py-1 rounded text-sm font-semibold">
          {topic.module}
        </span>
      </div>
      <h3 className="text-xl font-bold text-text-main mb-2">{topic.title}</h3>
      <p className="text-text-muted text-sm line-clamp-2">{topic.analogy}</p>
    </div>
  )
}
