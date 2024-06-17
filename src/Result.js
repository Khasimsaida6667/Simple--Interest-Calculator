import React from 'react';
import './Result.css'; // Import CSS file

const Result = ({ interestDetails }) => {
  const { totalInterest, interestPerDay, interestPerMonth, interestPerYear, totalAmount } = interestDetails || {};

  return (
    <div className="result-container">
      {totalInterest !== null && (
        <div>
          <p className="result-text">Total Amount: <strong>${totalAmount}</strong></p>
          <p className="result-text">Total Interest: <strong>${totalInterest}</strong></p>
          <p className="result-text">Interest Per Day: <strong>${interestPerDay}</strong></p>
          <p className="result-text">Interest Per Month: <strong>${interestPerMonth}</strong></p>
          <p className="result-text">Interest Per Year: <strong>${interestPerYear}</strong></p>
        </div>
      )}
    </div>
  );
};

export default Result;






