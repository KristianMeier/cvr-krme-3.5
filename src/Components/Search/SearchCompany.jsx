import { Link } from 'react-router-dom'
import { convertSearchData } from '../../Backend/convertSearchData'

export const SearchCompany = ({ company }) => {
  const convertedData = convertSearchData({ ...company })
  const { arrayIndex } = company

  return (
    <Link className='search-company' to={`/company/${arrayIndex}`}>
      <article className='search-article'>
        {convertedData.map((company) => {
          const { title, paragraphOne, paragraphTwo } = company
          return (
            <div key={title} className='search-content'>
              <h4> {title} </h4>
              <p> {paragraphOne} </p>
              <p>{paragraphTwo} </p>
            </div>
          )
        })}
      </article>
    </Link>
  )
}
