import { BackgroundBeams } from "@/components/ui/background-beams";
import { DarkGridHero } from "@/components/ui/hero";
import BeamInput from "@/components/ui/InputField";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <DarkGridHero />
      <BackgroundBeams />
    </main>
  );
}
