import { Link } from 'react-router-dom'
import { USER_HINT_PATH } from '../../Constants/Constants'

export const SearchNoResults = () => (
  <div className='search-no-results'>
    <h3>No companies found</h3>
    <p>
      Hint: There are only a few select companies to find.&nbsp;
      <Link className='user-hint' to={USER_HINT_PATH}>
        Click here to see them.
      </Link>
    </p>
  </div>
)
