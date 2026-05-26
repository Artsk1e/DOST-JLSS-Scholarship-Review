import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ContentNavigation from './ContentNavigation'
import TopicArticle from './TopicArticle'

export default function ContentView() {
  const { currentTopic } = useContext(AppContext)

  if (!currentTopic) {
    return <div>No topic selected</div>
  }

  return (
    <div className="w-full">
      <ContentNavigation />
      <TopicArticle />
    </div>
  )
}
