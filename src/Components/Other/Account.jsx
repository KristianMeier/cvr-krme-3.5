export const Account = ({ onClick, title, btnTitle, content }) => (
  <div className='my-account'>
    <h2> {title} </h2>
    <button className='action-btn' onClick={onClick}>
      {btnTitle}
    </button>
    <div>{content} </div>
  </div>
)
