import { useState, useContext } from 'react'
import { createContext } from 'react'
import {
  AUTH_LOCAL_STORAGE_KEY,
  LOG_OUT_LOCAL_STORAGE_VALUE,
} from '../Constants/Constants'
import { getLocalStorage } from '../Utilities/getLocalStorage'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [login, setLogin] = useState(
    getLocalStorage(AUTH_LOCAL_STORAGE_KEY, LOG_OUT_LOCAL_STORAGE_VALUE)
  )

  const logOut = () => {
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, LOG_OUT_LOCAL_STORAGE_VALUE)
    setLogin(LOG_OUT_LOCAL_STORAGE_VALUE)
  }

  const logIn = (object) => {
    const stringifiedObject = JSON.stringify(object)
    setLogin(stringifiedObject)
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, stringifiedObject)
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        login,
        logIn,
        logOut,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
