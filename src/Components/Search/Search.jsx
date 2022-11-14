import { useEffect, useState } from "react";
import {
  RECORDS_PER_PAGE as COMPANIES_PER_PAGE,
} from "../../Constants/Constants";
import { JsData } from "../../Data/Data";
import { SearchCompany } from "./SearchCompany";
import { SearchPagination } from "./SearchPagination";
import { SearchApi } from "./SearchApi";
import { NoResultsFound } from "./NoResultsFound";

const allCompanies = JsData.searchData.companies;
const startPages = Math.ceil(allCompanies.length / COMPANIES_PER_PAGE);

export const Search = ({ searchField, setSearchField }) => {
  const [nPages, setNPages] = useState(startPages);
  const [companies, setCompanies] = useState([]);
  const [page, setPage] = useState(1);

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  useEffect(() => {
    setPage(1);
  }, [searchField]);

  useEffect(() => {
    const result = SearchApi(searchField, page);
    setCompanies(result.results);
    setNPages(result.numberOfPages);
  }, [page, searchField]);

  if (companies.length === 0 && searchField !== "") return <NoResultsFound />;
  if (searchField === "") return <h3>Type cvr-number or company name above</h3>;
  if (companies.length > 0)
    return (
      <div>
        {companies.map((company) => (
          <SearchCompany key={company.arrayIndex} company={company} />
        ))}
        {searchField !== "" && <SearchPagination pageNumbers={pageNumbers} setPage={setPage} />}
      </div>
    )
  return
};
