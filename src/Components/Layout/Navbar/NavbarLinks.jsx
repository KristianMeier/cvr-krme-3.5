import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  DARK_THEME,
  GITHUB_PATH,
  LIGHT_THEME,
  LOG_OUT_LOCAL_STORAGE_VALUE,
  MY_ACCOUNT_PATH,
  SIGN_IN_PAGE_PATH,
  THEME_LOCAL_STORAGE_KEY,
  YOUTUBE_PATH,
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
        <button className='theme-button' onClick={() => toggleTheme()}>
          {theme === LIGHT_THEME ? 'Dark Theme' : 'Light Theme'}
        </button>
        <a href={GITHUB_PATH}>Code</a>
        <a href={YOUTUBE_PATH}>About</a>
        {login !== LOG_OUT_LOCAL_STORAGE_VALUE ? (
          <Link to={MY_ACCOUNT_PATH}>My Account</Link>
        ) : (
          <Link to={SIGN_IN_PAGE_PATH}>Sign In</Link>
        )}
      </ul>
    </div>
  )
}
