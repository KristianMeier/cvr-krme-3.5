import { useNavigate, useParams } from 'react-router-dom'
import { Account } from '../../Components/Other/Account'
import { LANDING_PAGE_PATH } from '../../Constants/Constants'

export const NoRoute = () => {
  const { routeParams } = useParams()
  const navigate = useNavigate()

  return (
    <Account
      title={`Sorry, there is no site here: /${routeParams}.`}
      onClick={() => navigate(LANDING_PAGE_PATH)}
      btnTitle='To Frontpage'
    />
  )
}
