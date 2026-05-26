import { useContext } from 'react'
import { AppContext, AppProvider } from './context/AppContext'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'

function AppContent() {
  const { currentView } = useContext(AppContext)

  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">
      <Header />
      <Navigation />
      <main className="flex-1 container mx-auto px-6 py-8 max-w-5xl">
        {currentView === 'dashboard' && <Dashboard />}
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}
