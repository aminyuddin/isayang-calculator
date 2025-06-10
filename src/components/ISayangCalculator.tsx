'use client';

import { useState } from 'react';

export default function ISayangCalculator() {
  const [fields, setFields] = useState({
    monthlySalary: '2000',
    contributionRate: '11',
    yearsOfContribution: '1',
  });
  const [result, setResult] = useState<{
    iSayangMonthly: number;
    iSayangTotal: number;
  } | null>(null);

  // Unified input handler
  const handleInputChange = (field: keyof typeof fields, value: string) => {
    // Only allow numbers and single decimal point (except for yearsOfContribution)
    if (field === 'yearsOfContribution') {
      // Only allow whole numbers
      if (!/^\d*$/.test(value)) return;
      setFields(prev => ({ ...prev, [field]: value }));
      return;
    }
    // For other fields, allow decimals
    if (!/^\d*\.?\d*$/.test(value)) return;
    // Limit decimal places
    const parts = value.split('.');
    if (parts.length === 2 && parts[1].length > 2) return;
    setFields(prev => ({ ...prev, [field]: value }));
  };

  const calculateISayang = () => {
    // Parse values
    const monthlySalary = parseFloat(fields.monthlySalary) || 0;
    const contributionRate = parseFloat(fields.contributionRate) || 0;
    const yearsOfContribution = parseInt(fields.yearsOfContribution, 10) || 0;
    if (!monthlySalary || !contributionRate || !yearsOfContribution) {
      setResult(null);
      return;
    }
    // Employee Share Contribution = monthlySalary * (contributionRate / 100)
    const employeeShare = (monthlySalary * contributionRate) / 100;
    // i-Sayang = (2 / contributionRate) * employeeShare
    const iSayangMonthly = (2 / contributionRate) * employeeShare;
    const iSayangTotal = iSayangMonthly * 12 * yearsOfContribution;
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
            type="text"
            value={fields.monthlySalary}
            onChange={(e) => handleInputChange('monthlySalary', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter monthly salary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Employee Share Statutory Rate (%)
          </label>
          <input
            type="text"
            value={fields.contributionRate}
            onChange={(e) => handleInputChange('contributionRate', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter statutory rate (e.g. 11)"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Years of Contribution
          </label>
          <input
            type="text"
            value={fields.yearsOfContribution}
            onChange={(e) => handleInputChange('yearsOfContribution', e.target.value)}
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
              <span className="text-blue-700 font-medium">Total i-Sayang Transfer ({fields.yearsOfContribution} {fields.yearsOfContribution === '1' ? 'year' : 'years'}):</span>
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