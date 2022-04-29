import React from 'react'
import '../Styles/ButtomReset.css'
const ButtomReset = ({isReset}) => {
  return (
     <section className='btm_reset'>
          <button onClick={isReset} className='buttom_reset'> Reset </button>
     </section>
  )
}

export default ButtomReset