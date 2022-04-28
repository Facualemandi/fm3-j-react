import React from 'react'
import '../Styles/Bill.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'


const Bill = () => {
  return (
     <section className='section_bill'>
          <p>Bill</p>

          <div className='div_container_input'>
              <FontAwesomeIcon icon={faDollarSign}/>
             <input type='number'/>
          </div>
     </section>
  )
}

export default Bill