import { useNavigate } from 'react-router-dom'
import { JsData } from '../../Backend/Data'
import { Account } from '../../Components/Other/Account'
import { LANDING_PAGE_PATH } from '../../Constants/Constants'

const allCompanies = JsData.searchData.companies

export const UserHint = () => {
  const navigate = useNavigate()

  return (
    <Account
      title='Beneath are the companies in the database'
      onClick={() => navigate(LANDING_PAGE_PATH)}
      btnTitle='To Frontpage'
      content={allCompanies.map(({ companyName }) => (
        <p>{companyName}</p>
      ))}
    />
  )
}
