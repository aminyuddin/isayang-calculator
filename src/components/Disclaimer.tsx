'use client';

export default function Disclaimer() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="flex items-start gap-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-md p-4 text-yellow-900 text-sm">
        <span className="text-xl mt-0.5">⚠️</span>
        <span>
          <strong>Disclaimer:</strong> This calculator is not an official tool and is not affiliated with, endorsed by, or related to KWSP/EPF Malaysia. For official information, please visit the{' '}
          <a href="https://www.kwsp.gov.my/" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-700">KWSP website</a>.
        </span>
      </div>
    </div>
  );
} 