import React,{useState}from 'react'
import '../Styles/TipAmount.css'




const TipAmount = ({amount}) => {
   
  return (
       <>
       <section className='section_aamount'>
         <div className='div_amount'>
           <p>Tip Amount </p>
           <span>/ Person</span>
         </div>

         <span className='tip_span'> {amount} </span>       
       </section>
       </>
  )
}

export default TipAmount