import React from 'react'
import colorNames from 'colornames';

const Input = ({ colorValue, setColorValue, setHexColorV,
  isDarkTest, setIsDarkTest
}) => {
  return (
    <form>
      <label htmlFor="input">Color Input</label>
      <input type="text" 
      name="colortext" 
      id="color" 
      placeholder='Enter Your Color'
      value={colorValue}
      onChange={(e) => {
        setColorValue(e.target.value);
      setHexColorV(colorNames(e.target.value))
    }}
      />
      <button type='button'
      onClick={() => setIsDarkTest(!isDarkTest)}>Toggle Text Color</button>
    </form>
  )
}

export default Input
