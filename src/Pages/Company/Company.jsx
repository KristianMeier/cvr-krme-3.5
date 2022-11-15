import { useParams } from 'react-router-dom'
import { convertCompanyData } from '../../Backend/convertCompanyData'
import { JsData } from '../../Backend/Data'
import { CompanyInfo } from './CompanyInfo'
import { CompanyTable } from './CompanyTable'

const companyInfoData = JsData.searchData.companyinfoTitles

export const Company = () => {
  const { arrayIndex } = useParams()
  const tableData = convertCompanyData(JsData.searchData.companies[arrayIndex])

  if (!tableData) return <h1>No companies found...</h1>

  return (
    <section className='company-page'>
      <h1> {tableData.companyName} </h1>
      <CompanyTable company={tableData} />
      <div className='all-companies-info'>
        {companyInfoData.map((title) => (
          <CompanyInfo key={title} title={title} info={JsData.lorem} />
        ))}
      </div>
    </section>
  )
}
