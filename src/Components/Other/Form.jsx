export const Form = ({ onClick, btnTitle, children }) => (
  <form className='form-container'>
    <div className='form-control'>
      {children}
      <button className='submit-btn' type='submit' onClick={onClick}>
        {btnTitle}
      </button>
    </div>
  </form>
)
