import React, { useState } from 'react'

const UseStateBasics = () => {
  const handleClick = () => {
    if (tekst === 'random title') {
      setTekst('hello world')
    } else {
      setTekst('random title')
    }
  }
  // console.log(useState('hello wolrd'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [tekst, setTekst] = useState('random title')
  return (
    <React.Fragment>
      <h1>{tekst}</h1>
      <button className='btn' onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
