import React from 'react'
import '../Styles/Tips.css'
function Tips() {
  return (
     <>
     <section className='section_tips'>
        <p>Select Tip %</p>
      
         <div className='div_tips'>
              <button type='number'>5%</button>
              <button type='number'>10%</button>
              <button type='number'>15%</button>
              <button type='number'>25%</button>
              <button type='number'>50%</button>
              <input type='number' placeholder='Custom'/>
         </div>
     </section>
     </>
  )
}

export default Tips