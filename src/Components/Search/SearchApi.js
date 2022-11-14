import { RECORDS_PER_PAGE } from "../../Constants/Constants";
import { JsData } from "../../Data/Data";

const allCompanies = JsData.searchData.companies;

const filterFields = ["companyName", "cvrNumber", "address"];

export const SearchApi = (searchString, page) => {
  if (searchString === "") {
    return {
      page: 1,
      numberOfPages: Math.floor(allCompanies.length / RECORDS_PER_PAGE),
      results: [],
    };
  }

  const filteredCompanies = allCompanies.filter(
    company =>
      filterFields.map(filter =>
        company[filter].toLowerCase().includes(searchString.toLowerCase())
      ).filter(e => e).length
  )

  const firstElement = page * RECORDS_PER_PAGE - RECORDS_PER_PAGE;
  const lastElement = page * RECORDS_PER_PAGE;

  return {
    page: page,
    numberOfPages: Math.ceil(filteredCompanies.length / RECORDS_PER_PAGE),
    results: filteredCompanies.slice(firstElement, lastElement),
  };
};
