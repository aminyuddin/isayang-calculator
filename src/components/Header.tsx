'use client';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 shadow-lg py-3 sticky top-0 z-30">
      <div className="container mx-auto flex items-center px-4">
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-500">
          <span className="text-2xl" role="img" aria-label="Love">💗</span>
        </span>
        <span className="ml-3 text-xl sm:text-2xl font-extrabold text-white tracking-tight">i-Sayang Calculator</span>
      </div>
    </header>
  );
} 