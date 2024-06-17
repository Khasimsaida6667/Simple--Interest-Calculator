import React, { useState } from 'react';
import './InputForm.css'; // Import CSS file

const InputForm = ({ calculateInterest }) => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (principal && rate && time) {
      calculateInterest(parseFloat(principal), parseFloat(rate), parseInt(time));
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <label htmlFor="principal">Principal Amount:</label>
      <input
        type="number"
        id="principal"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        placeholder="Enter principal amount"
        required
      />
      <label htmlFor="rate">Interest Rate (%):</label>
      <input
        type="number"
        id="rate"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        placeholder="Enter interest rate"
        required
      />
      <label htmlFor="time">Time Period (years):</label>
      <input
        type="number"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Enter time period"
        required
      />
      <button type="submit">Calculate</button>
    </form>
  );
};

export default InputForm;
