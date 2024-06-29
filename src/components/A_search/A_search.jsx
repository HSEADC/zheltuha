import React, { useState } from 'react'

const A_search = ({ onEnter }) => {
  const [inputValue, setInputValue] = useState('')

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onEnter(inputValue)
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      placeholder="Хочу найти..."
      className="A_search p3"
    />
  )
}

export default A_search
