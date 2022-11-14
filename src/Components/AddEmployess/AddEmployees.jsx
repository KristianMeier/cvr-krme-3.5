import { useState, useEffect } from 'react'
import {
  EMPLOYEE_LOCAL_STORAGE_KEY,
  NO_EMPLOYEES_LOCAL_STORAGE_VALUE,
} from '../../Constants/Constants'
import { getLocalStorage } from '../../Utilities/getLocalStorage'
import { Form } from '../Other/Form'
import { AddEmployeesTable } from './AddEmployeesTable'

export const AddEmployees = () => {
  const employeesInJson = getLocalStorage(
    EMPLOYEE_LOCAL_STORAGE_KEY,
    NO_EMPLOYEES_LOCAL_STORAGE_VALUE
  )
  console.log(JSON.parse(employeesInJson))

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

  useEffect(
    () =>
      localStorage.setItem(
        EMPLOYEE_LOCAL_STORAGE_KEY,
        JSON.stringify(employees)
      ),
    [employees]
  )

  return (
    <div className='add-employess'>
      <h1>Grant employees access to www.cvr.dk</h1>
      <div className='container'>
        <Form
          placeholderOne='Insert name...'
          placeholderTwo='Insert title...'
          valueOne={name}
          valueTwo={title}
          onChangeOne={(e) => setName(e.target.value)}
          onChangeTwo={(e) => setTitle(e.target.value)}
          onClick={handleSubmit}
          btnTitle='Add Employee'
        />

        <AddEmployeesTable
          removeEmployee={removeEmployee}
          employees={employees}
        />
      </div>
    </div>
  )
}
