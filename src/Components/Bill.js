import React, {useState} from 'react'
import '../Styles/Bill.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'


const Bill = ({bill, setBill}) => {

   

  const onChangeBill = (e) => {
     console.log(e.target.value)
      setBill(e.target.value)
  }
  



  return (
     <section className='section_bill'>
          <p>Bill</p>

          <div className='div_container_input'>
              <FontAwesomeIcon icon={faDollarSign}/>
             <input type='number' onChange={onChangeBill} value={bill}/>
          </div>
     </section>
  )
}

export default Bill