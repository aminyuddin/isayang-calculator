import React from 'react';

const husbandEligibility = [
  { icon: '🇲🇾', text: 'Malaysian or non-Malaysian' },
  { icon: '🪪', text: 'EPF Member' },
  { icon: '🎂', text: 'Below 75 years of age' },
  { icon: '💍', text: 'Marriage registered under Malaysian Law' },
];

const wifeEligibility = [
  { icon: '🇲🇾', text: 'Malaysian' },
  { icon: '🪪', text: 'EPF Member' },
  { icon: '🎂', text: 'Below 75 years of age' },
  { icon: '💍', text: 'Marriage registered under Malaysian Law' },
];

function EligibilityList({ title, items }: { title: string; items: { icon: string; text: string }[] }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex-1 min-w-[260px]">
      <h3 className="text-lg font-bold text-blue-700 mb-4 text-center">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-4">
            <span className="text-3xl w-10 text-center">{item.icon}</span>
            <span className="text-gray-800 text-base font-medium">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EligibilitySection() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-12">Who Can Apply</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <EligibilityList title="Eligibility Of The Husband (Contributor)" items={husbandEligibility} />
          <EligibilityList title="Eligibility Of The Wife (Recipient)" items={wifeEligibility} />
        </div>
      </div>
    </section>
  );
} 