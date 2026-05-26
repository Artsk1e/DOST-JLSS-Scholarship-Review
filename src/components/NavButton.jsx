export default function NavButton({ subject, label, icon, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-4 font-semibold whitespace-nowrap transition-colors relative border-b-2 ${
        isActive
          ? 'text-primary border-primary'
          : 'text-text-muted border-transparent hover:text-primary'
      }`}
    >
      <span className="mr-2">{icon}</span>
      {label}
    </button>
  )
}
