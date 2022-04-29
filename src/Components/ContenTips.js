import React from 'react'
import '../Styles/ContentTips.css'

const ContenTips = (props) => {
  return (
      <>
         <section className='section_content_tips'>
              {props.children}
         </section>
      </>
  )
}

export default ContenTips