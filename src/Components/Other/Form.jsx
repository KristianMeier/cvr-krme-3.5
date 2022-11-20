export const Form = ({ onClick, btnTitle, children }) => (
  <form className='form-container'>
    <div className='form-control'>
      {children}
      <button type='submit' onClick={onClick}>
        {btnTitle}
      </button>
    </div>
  </form>
)
