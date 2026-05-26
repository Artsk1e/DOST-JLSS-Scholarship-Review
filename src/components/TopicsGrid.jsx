import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import TopicCard from './TopicCard'

export default function TopicsGrid({ topics }) {
  const { setCurrentTopic, setCurrentView } = useContext(AppContext)

  const handleSelectTopic = (topic) => {
    setCurrentTopic(topic)
    setCurrentView('content')
  }

  if (!topics || topics.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-muted">No topics found for this subject.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          onClick={() => handleSelectTopic(topic)}
        />
      ))}
    </div>
  )
}
