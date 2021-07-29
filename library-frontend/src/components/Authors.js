  
import React, { useState } from 'react'
import { ALL_AUTHORS, UPDATE_AUTHOR } from '../queries'
import { useMutation } from '@apollo/client'

const Authors = (props) => {

  const [name, setName] = useState('')
  const [born, setBorn] = useState('')

  const [ updateBorn ] = useMutation(UPDATE_AUTHOR, 
    { refetchQueries: [ { query: ALL_AUTHORS }]})

  if (!props.show) {
    return null
  }

  const authors = props.authors

  const submit = (event) => {
    event.preventDefault()
    updateBorn({ variables: { name, born } })
    setName('')
    setBorn('')
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {authors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>
      <h2>Set birthyear</h2>
      <form onSubmit={submit}>
      <div>
          <select value={name} 
          onChange={({ target }) => setName(target.value)}
          >
          {authors.map((a, index) => 
            <option key={index} value={a.name}>{a.name}</option>
          )}
          </select>
        </div>
        <div>
          name
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          born
          <input
            value={born}
            onChange={({ target }) => setBorn(+target.value)}
          />
        </div>
        <button type='submit'>update author</button>
      </form>
    </div>
  )
}

export default Authors
