import { useCountUp } from "@/hooks/useCountUp";

interface StatCounterProps {
  target: number;
  suffix: string;
  label: string;
  isActive: boolean;
}

export default function StatCounter({ target, suffix, label, isActive }: StatCounterProps) {
  const count = useCountUp(target, isActive);

  return (
    <div className="text-center">
      <p className="font-display text-4xl md:text-5xl text-warmwhite">
        {count}
        {suffix}
      </p>
      <p className="font-body text-xs md:text-sm uppercase tracking-wider text-stone mt-2">
        {label}
      </p>
    </div>
  );
}