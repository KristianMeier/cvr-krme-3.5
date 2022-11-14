import { useParams } from 'react-router-dom'
import { convertCompanyData } from '../../Backend/convertCompanyData'
import { JsData } from '../../Backend/Data'
import { CompanyInfo } from './CompanyInfo'
import { CompanyTable } from './CompanyTable'

const companyinfoData = JsData.searchData.companyinfoTitles

export const Company = () => {
  const { arrayIndex } = useParams()

  const tableData = convertCompanyData(JsData.searchData.companies[arrayIndex])

  return !tableData ? (
    <h1>No companies found...</h1>
  ) : (
    <section className='company-page'>
      <h1> {tableData.companyName} </h1>
      <CompanyTable company={tableData} />
      <div className='all-companies-info'>
        {companyinfoData.map((titel) => (
          <CompanyInfo key={titel} title={titel} info={JsData.lorem} />
        ))}
      </div>
    </section>
  )
}
