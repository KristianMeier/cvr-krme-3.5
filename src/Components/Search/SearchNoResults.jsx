import { Link } from 'react-router-dom'

export const SearchNoResults = ({ userHintPath }) => (
  <div className='search-no-results'>
    <h3>No companies found</h3>
    <p>
      Hint: There are only a few select companies to find.&nbsp;
      <Link className='user-hint' to={userHintPath}>
        Click here to see them.
      </Link>
    </p>
  </div>
)
