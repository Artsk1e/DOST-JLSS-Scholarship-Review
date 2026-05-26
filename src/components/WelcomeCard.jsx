import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function WelcomeCard() {
  const { setCurrentSubject, setCurrentView } = useContext(AppContext)

  const handleStartReview = () => {
    setCurrentSubject('math')
    setCurrentView('subject')
  }

  return (
    <div className="bg-white rounded-large p-8 shadow-md mb-8">
      <h2 className="text-3xl font-bold text-text-main mb-4">
        Welcome, Fellow DOST JLSS Taker! 🚀
      </h2>
      <p className="text-text-main mb-6 leading-relaxed">
        This web application is optimized to help you master the rigorous engineering, mathematical,
        linguistic, and scientific logic models tested on the{' '}
        <strong>Junior Level Science Scholarships (JLSS)</strong> examination.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-bg-subtle rounded-standard p-4">
          <h3 className="text-lg font-bold text-primary mb-2">⚡ Syntax Rules</h3>
          <p className="text-text-muted text-sm">
            Every topic is structured as a software codebase: Plain-English Analogies first,
            deep functional mechanics, and clear defensive design against exam traps.
          </p>
        </div>
        <div className="bg-bg-subtle rounded-standard p-4">
          <h3 className="text-lg font-bold text-primary mb-2">🎮 Interactive Audits</h3>
          <p className="text-text-muted text-sm">
            Test your systems architecture knowledge instantly on live examination challenge
            components at the bottom of each study module.
          </p>
        </div>
      </div>

      <button
        onClick={handleStartReview}
        className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-standard transition-all"
      >
        Initialize Study Session →
      </button>
    </div>
  )
}
