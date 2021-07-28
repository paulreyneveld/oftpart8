  
import React, { useState } from 'react'

const Authors = (props) => {

  const [name, setName] = useState()
  const [born, setBorn] = useState()

  if (!props.show) {
    return null
  }

  const authors = props.authors

  const submit = (event) => {
    event.preventDefault()
    console.log('submit')
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
          title
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <button type='submit'>create book</button>
      </form>
    </div>
  )
}

export default Authors
