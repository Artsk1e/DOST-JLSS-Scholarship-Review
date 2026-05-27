import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ContentBlock from './ContentBlock'
import QuizSection from './QuizSection'
import ProgressiveTopicView from './enriched/ProgressiveTopicView'
import { getEnrichedTopic } from '../data/enriched-math-topics'

export default function TopicArticle() {
  const { currentTopic } = useContext(AppContext)

  if (!currentTopic) {
    return <div>No topic selected</div>
  }

  // Check if we have enriched content for this topic
  const enrichedTopic = getEnrichedTopic(currentTopic.id)

  // If enriched content exists, use the progressive view with LaTeX rendering
  if (enrichedTopic) {
    return <ProgressiveTopicView topic={enrichedTopic} />
  }

  // Fallback to old content view
  return (
    <article className="w-full">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-text-main mb-3">{currentTopic.title}</h1>
        <div className="inline-block bg-primary text-white px-3 py-1 rounded-standard text-sm font-semibold">
          {currentTopic.module}
        </div>
      </header>

      <ContentBlock type="analogy" content={currentTopic.analogy} />
      <ContentBlock type="mechanics" content={currentTopic.mechanics} />
      <ContentBlock type="rule" content={currentTopic.examRule} />
      <ContentBlock type="traps" content={currentTopic.traps} />

      <ContentBlock type="challenge">
        <QuizSection topic={currentTopic} />
      </ContentBlock>
    </article>
  )
}
