'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 py-8 mt-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        {/* Left: Copyright */}
        <div className="text-white text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} i-Sayang Calculator. All rights reserved.</div>
        {/* Center: Official Links as text links */}
        <div className="flex gap-4 mb-4 md:mb-0">
          <a
            href="https://www.kwsp.gov.my/en/member/savings/i-sayang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline font-medium transition-colors text-sm"
          >
            Official i-Sayang (EN)
          </a>
          <a
            href="https://www.kwsp.gov.my/ms/ahli/simpanan/i-sayang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline font-medium transition-colors text-sm"
          >
            Laman Rasmi i-Sayang (BM)
          </a>
        </div>
        {/* Right: Policy Links */}
        <div className="flex gap-4 text-sm text-blue-100">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
} 