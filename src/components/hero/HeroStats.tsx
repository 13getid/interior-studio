import { useInView } from "@/hooks/useInView";
import StatCounter from "./StatCounter";

const STATS = [
  { target: 200, suffix: "+", label: "Projects" },
  { target: 12, suffix: "+", label: "Years Experience" },
  { target: 98, suffix: "%", label: "Client Satisfaction" },
];

export default function HeroStats() {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="relative z-10 flex justify-center gap-12 md:gap-24 pb-12">
      {STATS.map((stat) => (
        <StatCounter key={stat.label} {...stat} isActive={isInView} />
      ))}
    </div>
  );
}