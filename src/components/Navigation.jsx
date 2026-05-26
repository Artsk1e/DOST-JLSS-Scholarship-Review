import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import NavButton from './NavButton'

const SUBJECTS = [
  { key: 'dashboard', label: 'Dashboard', icon: '🏠' },
  { key: 'math', label: 'Math', icon: '🧮' },
  { key: 'science', label: 'Science', icon: '🧬' },
  { key: 'english', label: 'English', icon: '🖥️' },
  { key: 'ict', label: 'ICT Specialization', icon: '💾' }
]

export default function Navigation() {
  const { currentSubject, setCurrentSubject, setCurrentView } = useContext(AppContext)

  const handleNavigate = (subject) => {
    if (subject === 'dashboard') {
      setCurrentView('dashboard')
    } else {
      setCurrentSubject(subject)
      setCurrentView('subject')
    }
  }

  return (
    <nav className="bg-white border-b-2 border-color-border sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex overflow-x-auto">
        {SUBJECTS.map((subj) => (
          <NavButton
            key={subj.key}
            subject={subj.key}
            label={subj.label}
            icon={subj.icon}
            isActive={
              subj.key === 'dashboard'
                ? false
                : currentSubject === subj.key
            }
            onClick={() => handleNavigate(subj.key)}
          />
        ))}
      </div>
    </nav>
  )
}
