import { useState } from 'react'
import { JsData } from '../../Data/Data'
import { VirkopediaArticle } from './VirkopediaArticle'
import { VirkopediaTab } from './VirkopediaTab'

const virkopediaData = JsData.virkopediaData

export const Virkopedia = () => {
  const [value, setValue] = useState(0)
  const { paragraphs, heading } = virkopediaData[value]

  return (
    <div className='virkopedia'>
      <h1>Virkopedia</h1>
      <div className='virkopedia-container'>
        <div className='btn-container'>
          {virkopediaData.map((tab, index) => {
            const { heading } = tab
            return (
              <VirkopediaTab
                key={index}
                setValue={setValue}
                heading={heading}
                index={index}
                value={value}
              />
            )
          })}
        </div>
        <VirkopediaArticle heading={heading} paragraphs={paragraphs} />
      </div>
    </div>
  )
}
