import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLarge } from '@fortawesome/free-solid-svg-icons'
import '../Styles/NumberPeople.css'
const NumberPeople = ({people, setPeople, errorPeople}) => {

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
                  <input type='number' value={people} onChange={onChangePeople} placeholder='Ingrese la cantidad de personas'/>
              </div>
                {errorPeople === true ? <p className='error'>El número ingresado no puede ser 0</p>: <p></p>}
       </section>
     
     </>

  )
}

export default NumberPeople