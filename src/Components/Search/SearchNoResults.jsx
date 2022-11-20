import { Link } from 'react-router-dom'

export const SearchNoResults = ({ userHintPath }) => (
  <div className='search-no-results'>
    <h3 className='message-title'>No companies found</h3>
    <p>
      To see the companies in the database,&nbsp;
      <Link className='user-hint-link' to={userHintPath}>
        Click here
      </Link>
    </p>
  </div>
)
