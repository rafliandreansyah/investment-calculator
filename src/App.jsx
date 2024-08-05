import { useState } from 'react'

import './App.css'
import Header from './components/Header.jsx'
import InvestForm from './components/InvestForm.jsx'
import TablePrediction from './components/TablePrediction.jsx'

function App() {
  const [dataInvestment, setDataInvestment] = useState({
    initialInvesment: 0,
    annualInvesment: 0,
    expctedReturn: 0,
    duration: 0
  })

  const inputIsValid = dataInvestment.duration > 0

  function initialInvesmentHandler(newValue) {
    setDataInvestment(value => {
      const updateInitialValue = { ...value, initialInvesment: !newValue ? 0 : +newValue };
      return updateInitialValue
    })

  }

  function annualInvesmentHandler(newValue) {
    setDataInvestment(value => {
      const updateInitialValue = { ...value, annualInvesment: !newValue ? 0 : +newValue };
      return updateInitialValue;
    })
  }

  function expctedReturnHandler(newValue) {
    setDataInvestment(value => {
      const updateInitialValue = { ...value, expctedReturn: !newValue ? 0 : +newValue };
      return updateInitialValue;
    })
  }

  function durationHandler(newValue) {
    setDataInvestment(value => {
      const updateInitialValue = { ...value, duration: !newValue ? 0 : +newValue };
      return updateInitialValue;
    })
  }

  return (
    <div>
      <Header />
      <InvestForm
        initialInvesmentHandler={(value) => initialInvesmentHandler(value)}
        annualInvesmentHandler={(value) => annualInvesmentHandler(value)}
        expectedReturnHandler={(value) => expctedReturnHandler(value)}
        durationHandler={(value) => durationHandler(value)}
      />
      {inputIsValid ? <TablePrediction data={dataInvestment} /> : <p className='center'>Please enter duration greater than 0</p>}
    </div>
  )
}

export default App
