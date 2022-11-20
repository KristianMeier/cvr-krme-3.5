import { useState } from 'react'
import { JsData } from '../../Backend/Data'
import { VirkopediaArticle } from './VirkopediaArticle'
import { VirkopediaTab } from './VirkopediaTab'

const allArticles = JsData.virkopediaData

export const Virkopedia = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)
  const { paragraphs, heading } = allArticles[activeButtonIndex]

  return (
    <div className='virkopedia'>
      <h2>Virkopedia</h2>
      <div className='virkopedia-container'>
        <div className='btn-container'>
          {allArticles.map(({ heading, arrayIndex }) => (
            <VirkopediaTab
              key={arrayIndex}
              setActiveButtonIndex={setActiveButtonIndex}
              heading={heading}
              arrayIndex={arrayIndex}
              activeButtonIndex={activeButtonIndex}
            />
          ))}
        </div>
        <VirkopediaArticle heading={heading} paragraphs={paragraphs} />
      </div>
    </div>
  )
}
