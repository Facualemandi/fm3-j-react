import React from 'react'
import '../Styles/TipAmount.css'
const TipAmount = () => {
  return (
       <>
       <section className='section_aamount'>
         <div className='div_amount'>
           <p>Tip Amount </p>
           <span>/ Person</span>
         </div>

         <span className='tip_span'> $0.00 </span>       
       </section>
       </>
  )
}

export default TipAmount