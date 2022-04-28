import React from 'react'
import AllContent from './AllContent'
import Bill from './Bill'
import Logo from './Logo'
import NumberPeople from './NumberPeople'
import Tips from './Tips'

const AppUi = () => {
  return (
     <>
       <Logo/>
       <AllContent>
           <main>
               <Bill/>
               <Tips/>
               <NumberPeople/>
           </main>   
       </AllContent>

     </>
  )
}

export default AppUi