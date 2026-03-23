"use client";

import { type Methodiek } from "@/data/methodieken";
import { MethodologyCard } from "./methodology-card";

interface CardGridProps {
  onMethodClick: (m: Methodiek) => void;
  filteredItems: Methodiek[];
}

export function CardGrid({ onMethodClick, filteredItems }: CardGridProps) {
  if (filteredItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
        <p className="text-sm">Geen methodieken gevonden voor deze filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredItems.map((m) => (
        <MethodologyCard key={m.id} methodiek={m} onClick={onMethodClick} />
      ))}
    </div>
  );
}
