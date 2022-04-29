import React from 'react'
import '../Styles/Tips.css'



function Tips({selectTip}) {


  return (
     <>
     <section className='section_tips'>
        <p>Select Tip %</p>
      
         <div className='div_tips'>
              <button type='number' onClick={selectTip}>5%</button>
              <button type='number' onClick={selectTip}>10%</button>
              <button type='number' onClick={selectTip}>15%</button>
              <button type='number' onClick={selectTip}>25%</button>
              <button type='number' onClick={selectTip}>50%</button>
              <input type='number' placeholder='Custom'/>
         </div>
     </section>
     </>
  )
}

export default Tips