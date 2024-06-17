import React, { useState } from 'react';
import InputForm from './InputForm';
import Result from './Result';
import { calculateSimpleInterest } from './simpleInterestCalculator';
import './App.css'; // Import CSS file

const App = () => {
  const [interestDetails, setInterestDetails] = useState({
    totalInterest: null,
    interestPerDay: null,
    interestPerMonth: null,
    interestPerYear: null,
    totalAmount: null, // Add totalAmount to interestDetails
  });

  const calculateInterest = (principal, rate, years) => {
    const totalInterest = calculateSimpleInterest(principal, rate, years);
    const daysInYear = 365;
    const monthsInYear = 12;

    const interestPerDay = totalInterest / (years * daysInYear);
    const interestPerMonth = totalInterest / (years * monthsInYear);
    const interestPerYear = totalInterest / years;
    const totalAmount = principal + totalInterest; // Calculate total amount

    setInterestDetails({
      totalInterest: totalInterest.toFixed(2),
      interestPerDay: interestPerDay.toFixed(2),
      interestPerMonth: interestPerMonth.toFixed(2),
      interestPerYear: interestPerYear.toFixed(2),
      totalAmount: totalAmount.toFixed(2), // Set totalAmount in state
    });
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Simple Interest Calculator</h1>
      <div className="content-container">
        <div className="form-container">
          <InputForm calculateInterest={calculateInterest} />
        </div>
        <div className="result-container">
          <Result interestDetails={interestDetails} />
        </div>
      </div>
    </div>
  );
};

export default App;
