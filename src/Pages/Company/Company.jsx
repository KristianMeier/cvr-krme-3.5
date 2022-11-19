import { useParams } from 'react-router-dom'
import { convertCompanyData } from '../../Backend/convertCompanyData'
import { JsData } from '../../Backend/Data'
import { CompanyInfo } from './CompanyInfo'
import { CompanyTable } from './CompanyTable'

const companyInfoData = JsData.searchData.companyinfoTitles

export const Company = () => {
  const { arrayIndex } = useParams()
  const company = convertCompanyData(JsData.searchData.companies[arrayIndex])
  const companyName = JsData.searchData.companies[arrayIndex].companyName

  if (!company) return <h1>No companies found...</h1>

  return (
    <section className='company-page'>
      <h1> {companyName} </h1>
      <CompanyTable company={company} />
      <div className='all-companies-info'>
        {companyInfoData.map((title) => (
          <CompanyInfo key={title} title={title} info={JsData.lorem} />
        ))}
      </div>
    </section>
  )
}
