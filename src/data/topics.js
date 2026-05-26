import mathTopics from '../../math-topics.js'
import scienceTopics from '../../science-topics.js'
import englishTopics from '../../english-topics.js'
import ictTopics from '../../ict-topics.js'

export const TOPICS = {
  math: mathTopics,
  science: scienceTopics,
  english: englishTopics,
  ict: ictTopics
}

export const topicsBySubject = (subject) => {
  return TOPICS[subject] || []
}

export const topicById = (id) => {
  for (const subject in TOPICS) {
    const topic = TOPICS[subject].find(t => t.id === id)
    if (topic) return topic
  }
  return null
}

export const subjectTitle = (subject) => {
  const titles = {
    math: 'Mathematics',
    science: 'Science',
    english: 'English',
    ict: 'ICT Specialization'
  }
  return titles[subject] || subject
}

export const subjectDescription = (subject) => {
  const descriptions = {
    math: 'Master quantitative reasoning and mathematical problem-solving',
    science: 'Explore physics, chemistry, and biology principles',
    english: 'Develop linguistic and comprehension mastery',
    ict: 'Navigate information technology and programming concepts'
  }
  return descriptions[subject] || ''
}
