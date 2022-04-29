import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLarge } from '@fortawesome/free-solid-svg-icons'
import '../Styles/NumberPeople.css'
const NumberPeople = ({people, setPeople}) => {

    const onChangePeople = (e) => {
         console.log(e.target.value);
         setPeople(e.target.value)
    }

  return (
     <>
       <section className='section_people'>
              <p>Number of People</p>

              <div className='div_people'>
                  <FontAwesomeIcon icon={faUserLarge} className='icon_people'/>
                  <input type='number' value={people} onChange={onChangePeople}/>
              </div>
       </section>
     
     </>

  )
}

export default NumberPeople