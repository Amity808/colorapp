import React from 'react'

const Square = ({ colorValue, hexColorV, isDarkTest }) => {
  return (
    <section className='square' style={{ 
      backgroundColor: colorValue,
      color: isDarkTest ? '#000' : '#fff'
      }}>
      <p>{ colorValue ? colorValue : 'Paint Me'}</p>
      <p>{hexColorV ? hexColorV : null}</p>
    </section>
  )
}
Square.defaultProps ={
  colorValue: "Empty Color Value"
}

export default Square
