import React from 'react';

const features = [
  { icon: '🔄', title: 'Automatic 2% Transfer', text: "Transfer of 2% employee share contribution received from the employer to the wife's EPF account." },
  { icon: '📝', title: 'Voluntary & Automatic', text: "The application is made voluntarily by the husband, and the transfer occurs automatically each month when an employer contribution is credited to the husband's EPF account." },
  { icon: '🚫', title: 'Irrevocable', text: 'The transfer of this contribution cannot be cancelled unless the wife divorces or dies.' },
];

function FeatureCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center min-w-[220px] h-full">
      <span className="text-4xl mb-3">{icon}</span>
      <div className="font-bold text-blue-700 mb-2 text-base">{title}</div>
      <div className="text-gray-700 text-sm font-medium">{text}</div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <FeatureCard key={idx} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
} 