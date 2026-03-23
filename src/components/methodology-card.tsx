"use client";

import {
  type Methodiek,
  domainColors,
  domainLabels,
  policyTrackLabels,
  policyTrackColors,
  processStepLabels,
} from "@/data/methodieken";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Globe,
  HeartPulse,
  Building2,
} from "lucide-react";

const domainIcons: Record<string, React.ReactNode> = {
  mobiliteit: <Globe className="h-3.5 w-3.5" />,
  gezondheid: <HeartPulse className="h-3.5 w-3.5" />,
  algemeen: <Building2 className="h-3.5 w-3.5" />,
};

interface MethodologyCardProps {
  methodiek: Methodiek;
  onClick: (m: Methodiek) => void;
  compact?: boolean;
}

export function MethodologyCard({
  methodiek,
  onClick,
  compact = false,
}: MethodologyCardProps) {
  if (compact) {
    return (
      <button
        onClick={() => onClick(methodiek)}
        className="group flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-left text-xs font-medium shadow-sm transition-all hover:shadow-md hover:border-[#004B87]/40 hover:-translate-y-0.5 cursor-pointer"
      >
        <span className="truncate max-w-[140px]">{methodiek.name}</span>
        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#004B87] shrink-0" />
      </button>
    );
  }

  return (
    <button
      onClick={() => onClick(methodiek)}
      className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-4 text-left shadow-sm transition-all hover:shadow-lg hover:border-[#004B87]/40 hover:-translate-y-1 cursor-pointer w-full"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-heading text-sm font-semibold leading-tight text-foreground group-hover:text-[#004B87] transition-colors">
          {methodiek.name}
        </h3>
        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#004B87] shrink-0 mt-0.5" />
      </div>

      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
        {methodiek.description || (methodiek.aiDetaillering?.description ? methodiek.aiDetaillering.description : "Klik voor meer informatie")}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        <Badge
          variant="secondary"
          className={`${domainColors[methodiek.domain]} text-[10px] px-1.5 py-0 font-mono gap-1`}
        >
          {domainIcons[methodiek.domain]}
          {domainLabels[methodiek.domain]}
        </Badge>
        <Badge
          variant="secondary"
          className={`${policyTrackColors[methodiek.policyTrack]} text-[10px] px-1.5 py-0 font-mono`}
        >
          {policyTrackLabels[methodiek.policyTrack]}
        </Badge>
        <Badge
          variant="outline"
          className="text-[10px] px-1.5 py-0 font-mono text-muted-foreground"
        >
          {processStepLabels[methodiek.processStep]}
        </Badge>
      </div>
    </button>
  );
}
