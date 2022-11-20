import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  DARK_THEME,
  LIGHT_THEME,
  LOG_OUT_LOCAL_STORAGE_VALUE,
  MY_ACCOUNT_PATH,
  SIGN_IN_PAGE_PATH,
  THEME_LOCAL_STORAGE_KEY,
} from '../../../Constants/Constants'
import { useGlobalContext } from '../../../Context/AppContext'
import { getLocalStorage } from '../../../Utilities/getLocalStorage'

export const NavbarLinks = ({ linksContainerRef, linksRef }) => {
  const { login } = useGlobalContext()
  const [theme, setTheme] = useState(
    getLocalStorage(THEME_LOCAL_STORAGE_KEY, LIGHT_THEME)
  )

  const toggleTheme = () =>
    theme === LIGHT_THEME ? setTheme(DARK_THEME) : setTheme(LIGHT_THEME)

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme)
  }, [theme])

  return (
    <div className='links-container' ref={linksContainerRef}>
      <ul className='links' ref={linksRef}>
        <button className='theme-btn' onClick={() => toggleTheme()}>
          {theme === LIGHT_THEME ? 'Dark Theme' : 'Light Theme'}
        </button>
        {login !== LOG_OUT_LOCAL_STORAGE_VALUE ? (
          <Link className='nav-links' to={MY_ACCOUNT_PATH}>
            My Account
          </Link>
        ) : (
          <Link className='nav-links' to={SIGN_IN_PAGE_PATH}>
            Sign In
          </Link>
        )}
      </ul>
    </div>
  )
}
