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
  className,
}) => (
  <form className='form-container'>
    <div className='form-control'>
      <TextInput
        className={className}
        placeholder={placeholderOne}
        value={valueOne}
        onChange={onChangeOne}
      />
      <TextInput
        className={className}
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

// FOrm { children}
