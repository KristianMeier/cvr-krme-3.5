import { useState, useEffect } from 'react'
import {
  EMPLOYEE_LOCAL_STORAGE_KEY,
  NO_EMPLOYEES_LOCAL_STORAGE_VALUE,
} from '../../Constants/Constants'
import { getLocalStorage } from '../../Utilities/getLocalStorage'
import { Form } from '../Other/Form'
import { TextInput } from '../Other/TextInput'
import { AddEmployeesTable } from './AddEmployeesTable'

export const AddEmployees = () => {
  const employeesInJson = getLocalStorage(
    EMPLOYEE_LOCAL_STORAGE_KEY,
    NO_EMPLOYEES_LOCAL_STORAGE_VALUE
  )

  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [employees, setEmployees] = useState(JSON.parse(employeesInJson))

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEmployee = {
      localStorageId: new Date().getTime().toString(),
      name,
      title,
    }
    setEmployees([...employees, newEmployee])
    setName('')
    setTitle('')
  }

  const removeEmployee = (localStorageId) =>
    setEmployees(
      employees.filter((employee) => employee.localStorageId !== localStorageId)
    )

  useEffect(() => {
    localStorage.setItem(EMPLOYEE_LOCAL_STORAGE_KEY, JSON.stringify(employees))
  }, [employees])

  return (
    <div className='add-employess'>
      <h2>Grant employees access to www.cvr.dk</h2>
      <div className='container'>
        <Form onClick={handleSubmit} btnTitle='Add Employee'>
          <TextInput
            placeholder='Insert name...'
            value={name}
            type='text'
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            placeholder='Insert title...'
            value={title}
            type='text'
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form>
        <AddEmployeesTable
          removeEmployee={removeEmployee}
          employees={employees}
        />
      </div>
    </div>
  )
}
