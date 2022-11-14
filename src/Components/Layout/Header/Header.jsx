import { Link } from 'react-router-dom'
import { JsData } from '../../../Data/Data'

const headerData = JsData.headerData

export const Header = () => (
  <div className='header'>
    <h1>CVR - Business in Denmark</h1>
    <div className='header-container'>
      {headerData.titleLinks.map((titellink) => {
        const { text, link } = titellink
        return (
          <Link className='header-link' to={link} key={link}>
            {text}
          </Link>
        )
      })}
    </div>
  </div>
)
