import { useParams } from 'react-router-dom'
import { convertCompanyData } from '../../Backend/convertCompanyData'
import { JsData } from '../../Backend/Data'
import { CompanyInfo } from './CompanyInfo'
import { CompanyTable } from './CompanyTable'

const companyInfoData = JsData.searchData.companyinfoTitles
const lorem = JsData.lorem

export const Company = () => {
  const { arrayIndex } = useParams()
  const company = convertCompanyData(JsData.searchData.companies[arrayIndex])
  const companyName = JsData.searchData.companies[arrayIndex].companyName

  if (!company) return <h2>No companies found...</h2>

  return (
    <section className='company-page'>
      <h2> {companyName} </h2>
      <CompanyTable company={company} />
      <div className='all-companies-info'>
        {companyInfoData.map((companyInfo, index) => (
          <CompanyInfo key={index} {...companyInfo} lorem={lorem} />
        ))}
      </div>
    </section>
  )
}
