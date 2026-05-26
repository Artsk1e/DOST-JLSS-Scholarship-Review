import { useEffect } from 'react'

export default function KaTeXRenderer({ content }) {
  useEffect(() => {
    if (window.renderMathInElement) {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ]
      })
    }
  }, [content])

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  )
}
