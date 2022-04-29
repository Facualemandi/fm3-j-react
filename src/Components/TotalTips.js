import React from 'react'
import '../Styles/TotalTips.css'
const TotalTips = ({totalPerson}) => {
  return (
    <>
    <section className='section_total_tips'>
      <div className='div_total_tips'>
        <p>Total </p>
        <span>/ Person</span>
      </div>

      <span className='total_tip_span'> {totalPerson} </span>       
    </section>
    </>
  )
}

export default TotalTips