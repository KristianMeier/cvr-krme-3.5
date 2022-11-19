import { useState } from 'react'
import { useNavigate } from 'react-router'
import { MY_ACCOUNT_PATH } from '../../Constants/Constants'
import { useGlobalContext } from '../../Context/AppContext'
import { Form } from '../../Components/Other/Form'

export const SignInPage = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { logIn } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const localStorageId = new Date().getTime().toString()
    const user = {
      localStorageId,
      name,
      password,
    }
    logIn(user)
    navigate(MY_ACCOUNT_PATH)
    setName('')
    setPassword('')
  }

  return (
    <div className='sign-in-page'>
      <h1>Login Page</h1>
      <article className='sign-in-container'>
        <Form
          className='input-field'
          placeholderOne='Insert name...'
          placeholderTwo='Insert password...'
          valueOne={name}
          valueTwo={password}
          onChangeOne={(e) => setName(e.target.value)}
          onChangeTwo={(e) => setPassword(e.target.value)}
          onClick={handleSubmit}
          btnTitle='Sign In'
        />
      </article>
    </div>
  )
}
