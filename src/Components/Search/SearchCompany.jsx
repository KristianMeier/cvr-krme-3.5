import { Link } from 'react-router-dom'

export const SearchCompany = ({ convertedData, arrayIndex }) => (
  <Link className='search-company' to={`/company/${arrayIndex}`}>
    <article className='search-article'>
      {convertedData.map(({ title, paragraphOne, paragraphTwo }) => (
        <div key={title} className='search-content'>
          <h4> {title} </h4>
          <p> {paragraphOne} </p>
          <p>{paragraphTwo} </p>
        </div>
      ))}
    </article>
  </Link>
)
