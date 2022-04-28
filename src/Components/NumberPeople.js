import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLarge } from '@fortawesome/free-solid-svg-icons'
import '../Styles/NumberPeople.css'
const NumberPeople = () => {
  return (
     <>
       <section className='section_people'>
              <p>Number of People</p>

              <div className='div_people'>
                  <FontAwesomeIcon icon={faUserLarge} className='icon_people'/>
                  <input type='number'/>
              </div>
       </section>
     
     </>

  )
}

export default NumberPeople