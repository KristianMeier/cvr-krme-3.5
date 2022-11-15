export const AddEmployeesTable = ({ employees, removeEmployee }) => (
  <article className='table'>
    {employees.length === 0 ? (
      <div className='text-container'>
        <h3>There are no employees with access.</h3>
      </div>
    ) : (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Remove</th>
          </tr>
          {employees.map(({ localStorageId, name, title }) => (
            <tr key={localStorageId}>
              <td>{name}</td>
              <td>{title}</td>
              <td>
                <button
                  className='remove-btn'
                  onClick={() => removeEmployee(localStorageId)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </article>
)
