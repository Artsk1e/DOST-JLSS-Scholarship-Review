import Logo from './Logo'
import ExamBadge from './ExamBadge'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-blue-900 text-white px-6 py-6 shadow-lg">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Logo />
        <ExamBadge />
      </div>
    </header>
  )
}
