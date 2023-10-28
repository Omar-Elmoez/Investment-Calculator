import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Form from "./components/Form";
import Table from "./components/Table";
function App() {
  const [dataOfYear, setDataOfYear] = useState(null);
  const [formData, setFormData] = useState(null)
  const calculateHandler = (userInput) => {
    setFormData(userInput)
    const yearlyData = [];

    let currentSavings = userInput["current-savings"];
    const yearlyContribution = userInput["yearly-contribution"];
    const expectedReturn = userInput["expected-return"] / 100;
    const duration = userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setDataOfYear(yearlyData);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form calculateHandler={calculateHandler} />
      {dataOfYear ? (
        <Table data={dataOfYear} initialInvestment={formData["current-savings"]} />
      ) : (
        <p style={{textAlign: "center"}}>No Investment Calculated Yet</p>
      )}
    </div>
  );
}

export default App;
