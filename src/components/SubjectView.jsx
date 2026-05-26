import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { topicsBySubject } from '../data/topics'
import SubjectHeader from './SubjectHeader'
import TopicsGrid from './TopicsGrid'

export default function SubjectView() {
  const { currentSubject } = useContext(AppContext)
  const topics = topicsBySubject(currentSubject)

  return (
    <div className="w-full">
      <SubjectHeader />
      <TopicsGrid topics={topics} />
    </div>
  )
}
