import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { subjectTitle } from '../data/topics'

export default function SubjectHeader() {
  const { currentSubject, setCurrentView } = useContext(AppContext)

  const handleBack = () => {
    setCurrentView('dashboard')
  }

  return (
    <div className="mb-8">
      <button
        onClick={handleBack}
        className="mb-4 px-4 py-2 text-primary hover:bg-bg-primary rounded-standard transition-colors font-semibold"
      >
        ← Back to Dashboard
      </button>
      <h2 className="text-3xl font-bold text-text-main mb-2">
        {subjectTitle(currentSubject)} Review
      </h2>
      <p className="text-text-muted">
        Select a core competency model below to explore its deep specification.
      </p>
    </div>
  )
}
