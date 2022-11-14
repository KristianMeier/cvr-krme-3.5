export const CompanyTable = ({ company }) => {
  return (
    <div className='company-table'>
      {company.map((row, index) => {
        const { title, field } = row
        return (
          <div className='content-container' key={index}>
            <p className='title'>{title} </p>
            <p>{field} </p>
          </div>
        )
      })}
    </div>
  )
}
