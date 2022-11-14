import { Link } from 'react-router-dom'
import { JsData } from '../../../Backend/Data'

const titleLinks = JsData.headerData.titleLinks

export const Header = () => (
  <div className='header'>
    <h1>CVR - Business in Denmark</h1>
    <div className='header-container'>
      {titleLinks.map((titlelink) => {
        const { text, link } = titlelink
        return (
          <Link className='header-link' to={link} key={link}>
            {text}
          </Link>
        )
      })}
    </div>
  </div>
)
