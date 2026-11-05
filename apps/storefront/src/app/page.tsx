import { StarterHero } from "@/presentation/components/StarterHero";
import { HomeModulesView } from "@/presentation/components/HomeModulesView";

export default function HomePage() {
  return (
    <div className="w-full">
      <StarterHero />
      <HomeModulesView />
    </div>
  );
}
