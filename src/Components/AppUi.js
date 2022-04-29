import React from 'react'
import AllContent from './AllContent'
import Bill from './Bill'
import ButtomReset from './ButtomReset'
import ContenTips from './ContenTips'
import Logo from './Logo'
import NumberPeople from './NumberPeople'
import TipAmount from './TipAmount'
import Tips from './Tips'
import TotalTips from './TotalTips'

const AppUi = () => {
  return (
     <>
       <Logo/>
       <AllContent>
           <main>
             <section>
               <Bill/>
               <Tips/>
               <NumberPeople/>
             </section>

                    <ContenTips>
                            <TipAmount/>
                            <TotalTips/>
                            <ButtomReset/>
                    </ContenTips>
           
           </main>   
       </AllContent>

     </>
  )
}

export default AppUi