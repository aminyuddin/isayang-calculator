'use client';

import { useState } from 'react';

interface CalculatorInputs {
  monthlySalary: number;
  contributionRate: number;
  yearsOfContribution: number;
}

export default function ISayangCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlySalary: 0,
    contributionRate: 11,
    yearsOfContribution: 1,
  });

  const [result, setResult] = useState<{
    iSayangMonthly: number;
    iSayangTotal: number;
  } | null>(null);

  const calculateISayang = () => {
    // Employee Share Contribution = monthlySalary * (contributionRate / 100)
    const employeeShare = (inputs.monthlySalary * inputs.contributionRate) / 100;
    // i-Sayang = (2 / contributionRate) * employeeShare
    const iSayangMonthly = (2 / inputs.contributionRate) * employeeShare;
    const iSayangTotal = iSayangMonthly * 12 * inputs.yearsOfContribution;
    setResult({ iSayangMonthly, iSayangTotal });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">i-Sayang Calculator</h1>
        <p className="text-gray-600">
          Calculate the 2% i-Sayang transfer from your employee share contribution
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Monthly Salary (RM)
          </label>
          <input
            type="number"
            value={inputs.monthlySalary}
            onChange={(e) => setInputs({ ...inputs, monthlySalary: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter monthly salary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Employee Share Statutory Rate (%)
          </label>
          <input
            type="number"
            value={inputs.contributionRate}
            onChange={(e) => setInputs({ ...inputs, contributionRate: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter statutory rate (e.g. 11)"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Years of Contribution
          </label>
          <input
            type="number"
            value={inputs.yearsOfContribution}
            onChange={(e) => setInputs({ ...inputs, yearsOfContribution: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter years of contribution"
          />
        </div>
        <button
          onClick={calculateISayang}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Calculate
        </button>
      </div>

      {result && (
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">i-Sayang Transfer Result</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-blue-700 font-medium">Monthly i-Sayang Transfer:</span>
              <span className="font-semibold text-blue-800">
                RM {result.iSayangMonthly.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-700 font-medium">Total i-Sayang Transfer ({inputs.yearsOfContribution} year{inputs.yearsOfContribution > 1 ? 's' : ''}):</span>
              <span className="font-semibold text-blue-800">
                RM {result.iSayangTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-700 bg-blue-100 p-3 rounded">
            <div className="font-semibold text-blue-800 mb-1">i-Sayang Formula:</div>
            <div className="mb-1">
              <span className="font-mono">(2% / Employee Share Statutory Rate) × Employee Share Contribution (RM)</span>
            </div>
            <div className="text-xs text-gray-600">
              Example: If salary = RM2,000, rate = 11%:<br />
              Employee Share = 2,000 × 11% = RM220.00<br />
              i-Sayang = (2 / 11) × RM220.00 = RM40.00
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 