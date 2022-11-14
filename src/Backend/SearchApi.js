import { JsData } from './Data'
import { COMPANIES_PER_PAGE } from '../Constants/Constants'

const allCompanies = JsData.searchData.companies

export const SearchApi = (searchString, page) => {
  if (searchString === '') {
    return {
      page: 1,
      numberOfPages: Math.floor(allCompanies.length / COMPANIES_PER_PAGE),
      results: [],
    }
  }

  const filteredCompanies = allCompanies.filter((company) => {
    return (
      company.companyName.toLowerCase().includes(searchString.toLowerCase()) ||
      company.address.toLowerCase().includes(searchString.toLowerCase())
    )
  })

  const firstElement = page * COMPANIES_PER_PAGE - COMPANIES_PER_PAGE
  const lastElement = page * COMPANIES_PER_PAGE

  return {
    page: page,
    numberOfPages: Math.ceil(filteredCompanies.length / COMPANIES_PER_PAGE),
    results: filteredCompanies.slice(firstElement, lastElement),
  }
}
