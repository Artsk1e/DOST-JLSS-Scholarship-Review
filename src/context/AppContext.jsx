import { createContext, useState, useCallback } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState('dashboard')
  const [currentSubject, setCurrentSubject] = useState(null)
  const [currentTopic, setCurrentTopic] = useState(null)
  const [quizState, setQuizState] = useState({
    isAnswered: false,
    selectedAnswer: null,
    isCorrect: null,
    showFeedback: false
  })

  const value = {
    currentView,
    setCurrentView: useCallback((view) => setCurrentView(view), []),
    currentSubject,
    setCurrentSubject: useCallback((subject) => setCurrentSubject(subject), []),
    currentTopic,
    setCurrentTopic: useCallback((topic) => setCurrentTopic(topic), []),
    quizState,
    setQuizState: useCallback((state) => setQuizState(state), [])
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
