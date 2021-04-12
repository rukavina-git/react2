import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const increaseCounter = () => {
    setValue(value + 1)
  }
  const decreaseCounter = () => {
    return setValue(value - 1)
  }
  const resetCounter = () => {
    return setValue(0)
  }
  const complexCounter = () => {
    return setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={increaseCounter}>
          Increase
        </button>
        <button className='btn' onClick={decreaseCounter}>
          Decrease
        </button>
        <button className='btn' onClick={resetCounter}>
          Reset
        </button>
        <button className='btn' onClick={complexCounter}>
          Complex increase
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
