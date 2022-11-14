import { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

export const CompanyInfo = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div className='company-info'>
      <article>
        <h3>{title}</h3>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </button>
      </article>
      {showInfo && <p>{info}</p>}
    </div>
  )
}
