// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)
  const [username, setUsername] = React.useState("")
  const [error, setError] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    console.log(event)
    // 1. using event.target.elements
    // onSubmitUsername(event.target.elements.usernameInput.value)
    // 2. using a ref
    onSubmitUsername(inputRef?.current?.value)
  }

  const handleChange = event => {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={inputRef}
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
          style={{
            borderColor: error ? 'red' : 'initial',
          }}
        />
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>

      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
