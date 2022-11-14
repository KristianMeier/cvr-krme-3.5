import { TextInput } from './TextInput'

export const Form = ({
  placeholderOne,
  placeholderTwo,
  valueOne,
  valueTwo,
  onChangeOne,
  onChangeTwo,
  onClick,
  btnTitle,
}) => (
  <form className='form-container'>
    <div className='form-control'>
      <TextInput
        placeholder={placeholderOne}
        value={valueOne}
        onChange={onChangeOne}
      />
      <TextInput
        placeholder={placeholderTwo}
        value={valueTwo}
        onChange={onChangeTwo}
      />
      <button type='submit' onClick={onClick}>
        {btnTitle}
      </button>
    </div>
  </form>
)
