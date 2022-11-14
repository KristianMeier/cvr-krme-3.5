import { useNavigate } from 'react-router'
import { Account } from '../../Components/Other/Account'
import { SIGN_IN_PAGE_PATH } from '../../Constants/Constants'

export const NoAccess = () => {
  const navigate = useNavigate()

  return (
    <Account
      title='You need to sign in to access your account'
      onClick={() => navigate(SIGN_IN_PAGE_PATH)}
      btnTitle='Sign In'
    />
  )
}
