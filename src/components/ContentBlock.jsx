import KaTeXRenderer from './KaTeXRenderer'

const BLOCK_CONFIG = {
  analogy: {
    title: '💡 The Plain-English Analogy',
    icon: '💡'
  },
  mechanics: {
    title: '📐 Deep-Dive Mechanics & Technical Specification',
    icon: '📐'
  },
  rule: {
    title: '🎯 The Absolute Exam Rule',
    icon: '🎯'
  },
  traps: {
    title: '⚠️ Distractor Firewall (Defeating the Traps)',
    icon: '⚠️'
  }
}

export default function ContentBlock({ type, content, children }) {
  const config = BLOCK_CONFIG[type]

  if (type === 'challenge') {
    return (
      <section className="bg-white rounded-standard p-8 shadow-sm mb-6">
        <h3 className="text-2xl font-bold text-text-main mb-6">
          🧠 Sample Examination Challenge
        </h3>
        {children}
      </section>
    )
  }

  if (type === 'rule') {
    return (
      <section className="bg-white rounded-standard p-8 shadow-sm mb-6">
        <h3 className="text-2xl font-bold text-text-main mb-4">{config.title}</h3>
        <blockquote className="border-l-4 border-primary pl-6 italic text-text-main">
          {content}
        </blockquote>
      </section>
    )
  }

  return (
    <section className="bg-white rounded-standard p-8 shadow-sm mb-6">
      <h3 className="text-2xl font-bold text-text-main mb-4">{config.title}</h3>
      <div className="text-text-main prose prose-sm max-w-none">
        <KaTeXRenderer content={content} />
      </div>
    </section>
  )
}
