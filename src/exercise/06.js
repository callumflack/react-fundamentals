// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  const [error, setError] = React.useState(null)

  const inputRef = React.useRef(null)

  // 🐨 add the onSubmit handler to the <form> below
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
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
    console.log(isLowerCase)
  }

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={inputRef}
          id="usernameInput"
          type="text"
          onChange={handleChange}
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
