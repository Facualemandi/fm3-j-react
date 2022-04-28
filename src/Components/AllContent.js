import React from 'react'
import '../Styles/AllContent.css'
const AllContent = (props) => {
  return (
      <>
        <section className='allcontent'>
            {props.children}
        </section>
      </>

  )
}

export default AllContent