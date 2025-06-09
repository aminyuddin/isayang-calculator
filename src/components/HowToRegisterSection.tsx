import React from 'react';

const methods = [
  { icon: '💻', title: 'i-Akaun (Member)', text: 'The husband can register i-Sayang via i-Akaun (Member) by following the i-Sayang Registration User Guide.' },
  { icon: '🏢', title: 'EPF Offices', text: 'Visit any EPF office. Fill in and bring i-Sayang Application Form – KWSP 16G (SY).' },
  { icon: '🖥️', title: 'Self Service Terminal (SST)', text: 'Prepare MyKad for i-Sayang registration at any SST.' },
];

function RegisterCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center min-w-[220px] h-full">
      <span className="text-4xl mb-3">{icon}</span>
      <div className="font-bold text-blue-700 mb-2 text-base">{title}</div>
      <div className="text-gray-700 text-sm font-medium">{text}</div>
    </div>
  );
}

export default function HowToRegisterSection() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-12">How To Register For i-Sayang?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((item, idx) => (
            <RegisterCard key={idx} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
} 