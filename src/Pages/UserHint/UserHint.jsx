import { useNavigate } from 'react-router-dom'
import { Account } from '../../Components/Other/Account'
import { LANDING_PAGE_PATH } from '../../Constants/Constants'
import { JsData } from '../../Data/Data'

const companyData = JsData.searchData.companies

export const UserHint = () => {
  const navigate = useNavigate()

  return (
    <Account
      title='Beneath are the companies in the database'
      onClick={() => navigate(LANDING_PAGE_PATH)}
      btnTitle='To Frontpage'
      content={companyData.map((company) => {
        const { companyName } = company
        return <p>{companyName} </p>
      })}
    />
  )
}
