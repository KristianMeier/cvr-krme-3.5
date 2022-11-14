import { useNavigate } from 'react-router'
import { AddEmployees } from '../../Components/AddEmployess/AddEmployees'
import { Account } from '../../Components/Other/Account'
import {
  AUTH_LOCAL_STORAGE_KEY,
  LANDING_PAGE_PATH,
  LOG_OUT_LOCAL_STORAGE_VALUE,
} from '../../Constants/Constants'
import { useGlobalContext } from '../../Context/AppContext'
import { getLocalStorage } from '../../Utilities/getLocalStorage'

export const MyAccount = () => {
  const { openModal, logOut } = useGlobalContext()
  const navigate = useNavigate()

  const loginLocalStorageString = getLocalStorage(
    AUTH_LOCAL_STORAGE_KEY,
    LOG_OUT_LOCAL_STORAGE_VALUE
  )
  const loginName = JSON.parse(loginLocalStorageString).name

  return (
    <>
      <Account
        title={`Welcome ${loginName ? loginName : 'my friend'}`}
        onClick={() => {
          logOut()
          navigate(LANDING_PAGE_PATH)
          openModal()
        }}
        btnTitle='Log Out'
      />
      <AddEmployees />
    </>
  )
}
