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
      <h1>Virkopedia</h1>
      <div className='virkopedia-container'>
        <div className='btn-container'>
          {allArticles.map((article) => {
            const { heading, arrayIndex } = article
            return (
              <VirkopediaTab
                key={arrayIndex}
                setActiveButtonIndex={setActiveButtonIndex}
                heading={heading}
                arrayIndex={arrayIndex}
                activeButtonIndex={activeButtonIndex}
              />
            )
          })}
        </div>
        <VirkopediaArticle heading={heading} paragraphs={paragraphs} />
      </div>
    </div>
  )
}
