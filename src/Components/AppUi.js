import React, { useState } from "react";
import AllContent from "./AllContent";
import Bill from "./Bill";
import ButtomReset from "./ButtomReset";
import ContenTips from "./ContenTips";
import Logo from "./Logo";
import NumberPeople from "./NumberPeople";
import TipAmount from "./TipAmount";
import Tips from "./Tips";
import TotalTips from "./TotalTips";

const AppUi = () => {
  const [bill, setBill] = useState(parseInt(0));
  const [people, setPeople] = useState(parseInt(0));
  const [totalPerson, setTotalPerson] = useState("$0.00");
  const [amount, setAmount] = useState("$0.00");
  const [error, setError] = useState(false);
  const [errorPeople, setErrorPeople] = useState(false);

  const selectTip = (numb) => {
    if (!bill || bill === 0) {
      setError(true);
    } else {
      setError(false);
    }
    if (!people || people === 0) {
      setErrorPeople(true);
    } else {
      setErrorPeople(false);
    }
    if (bill && people) {
      let billTotal = parseInt(bill);
      let peopleTotal = parseInt(people);
      const totalTotal = ((billTotal / 100) * numb) / peopleTotal;
      const totalXPerson = bill / peopleTotal + totalTotal;
      const totalTipPerson = totalTotal.toFixed(2);

      return setAmount(totalTipPerson), setTotalPerson(totalXPerson.toFixed(2));
    }
  };

  const reset = () => {
    setTotalPerson("$0.00");
    setAmount("$0.00");
    setBill("");
    setPeople("");
  };

  return (
    <>
      <Logo />
      <AllContent>
        <main>
          <section>
            <Bill bill={bill} setBill={setBill} error={error} />
            <Tips selectTip={selectTip} />
            <NumberPeople
              people={people}
              setPeople={setPeople}
              errorPeople={errorPeople}
            />
          </section>

          <ContenTips>
            <TipAmount amount={amount} />
            <TotalTips totalPerson={totalPerson} />
            <ButtomReset isReset={reset} />
          </ContenTips>
        </main>
      </AllContent>
    </>
  );
};

export default AppUi;
