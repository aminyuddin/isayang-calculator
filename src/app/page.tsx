import ISayangCalculator from '@/components/ISayangCalculator';
import EligibilitySection from '@/components/EligibilitySection';
import FeaturesSection from '@/components/FeaturesSection';
import HowToRegisterSection from '@/components/HowToRegisterSection';
import Disclaimer from '@/components/Disclaimer';

export default function Home() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <ISayangCalculator />
        <EligibilitySection />
        <FeaturesSection />
        <HowToRegisterSection />
        <Disclaimer />
      </div>
    </main>
  );
}
