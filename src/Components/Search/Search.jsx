import { useEffect, useState } from 'react'
import { COMPANIES_PER_PAGE, USER_HINT_PATH } from '../../Constants/Constants'
import { SearchCompany } from './SearchCompany'
import { SearchPagination } from './SearchPagination'
import { SearchApi } from '../../Backend/SearchApi'
import { SearchNoResults } from './SearchNoResults'
import { JsData } from '../../Backend/Data'
import { convertSearchData } from '../../Backend/convertSearchData'

const allCompanies = JsData.searchData.companies
const startPages = Math.ceil(allCompanies.length / COMPANIES_PER_PAGE)

export const Search = ({ searchField }) => {
  const [nPages, setNPages] = useState(startPages)
  const [companies, setCompanies] = useState([])
  const [page, setPage] = useState(1)

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

  useEffect(() => {
    setPage(1)
  }, [searchField])

  useEffect(() => {
    const result = SearchApi(searchField, page)
    setCompanies(result.results)
    setNPages(result.numberOfPages)
  }, [page, searchField])

  if (companies.length === 0 && searchField !== '')
    return <SearchNoResults userHintPath={USER_HINT_PATH} />

  if (companies.length > 0)
    return (
      <div>
        {companies.map((company) => {
          const convertedData = convertSearchData({ ...company })
          return (
            <SearchCompany
              key={company.arrayIndex}
              arrayIndex={company.arrayIndex}
              convertedData={convertedData}
            />
          )
        })}
        {searchField !== '' && (
          <SearchPagination pageNumbers={pageNumbers} setPage={setPage} />
        )}
      </div>
    )

  return
}
