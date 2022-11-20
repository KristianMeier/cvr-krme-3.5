export const SearchPagination = ({ pageNumbers, setPage }) => (
  <div className='search-pagination'>
    <ul className='list-container'>
      {pageNumbers.map((pgNumber, index) => (
        <li key={index}>
          <button
            className='pagination-numbers'
            onClick={() => setPage(pgNumber)}
          >
            {pgNumber}
          </button>
        </li>
      ))}
    </ul>
  </div>
)
