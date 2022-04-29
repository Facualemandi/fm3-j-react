import React, {useState} from 'react'
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

  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');
  const [totalPerson, setTotalPerson] = useState('$0.00')
  const [amount, setAmount] = useState('$0.00');

  const selectTip = (numb) => {
      if(!bill || bill == 0 ){
        return alert('El valor total no puede ser 0')
      }if(!people || people == 0){
        return alert('Las personas no pueden ser 0')
      }if(bill && people){
         let billTotal = parseInt(bill);
         let peopleTotal = parseInt(people);
         const totalTotal =  ((billTotal / 100) * numb ) / peopleTotal
         const totalXPerson = (bill / peopleTotal) + totalTotal;
         const totalTipPerson = totalTotal.toFixed(2)

         return (
           setAmount(totalTipPerson),
           setTotalPerson(totalXPerson.toFixed(2))
           )
        }
  }

  return (
     <>
       <Logo/>
       <AllContent>
           <main>
             <section>
               <Bill bill={bill} setBill={setBill}/>
               <Tips selectTip={selectTip}/>
               <NumberPeople people={people} setPeople={setPeople}/>
             </section>

                    <ContenTips>
                            <TipAmount amount={amount}/>
                            <TotalTips totalPerson={totalPerson}/>
                            <ButtomReset/>
                    </ContenTips>
           
           </main>   
       </AllContent>

     </>
  )
}

export default AppUi