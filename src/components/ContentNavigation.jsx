import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { subjectTitle } from '../data/topics'

export default function ContentNavigation() {
  const { currentSubject, currentTopic, setCurrentView } = useContext(AppContext)

  const handleBack = () => {
    setCurrentView('subject')
  }

  return (
    <div className="mb-8 flex items-center justify-between">
      <button
        onClick={handleBack}
        className="px-4 py-2 text-primary hover:bg-bg-primary rounded-standard transition-colors font-semibold"
      >
        ← Back to Topics
      </button>
      <span className="text-text-muted text-sm">
        {subjectTitle(currentSubject)} &gt; {currentTopic?.title}
      </span>
    </div>
  )
}
