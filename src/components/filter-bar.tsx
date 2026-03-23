"use client";

import {
  type Domain,
  type PolicyTrack,
  type CrossCuttingTheme,
  domainLabels,
  policyTrackLabels,
  crossCuttingLabels,
} from "@/data/methodieken";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Search,
  X,
  Globe,
  HeartPulse,
  Building2,
  Filter,
} from "lucide-react";

export interface Filters {
  domain: Domain | null;
  policyTrack: PolicyTrack | null;
  crossCuttingTheme: CrossCuttingTheme | null;
  search: string;
}

interface FilterBarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

const domainButtonStyles: Record<Domain, { active: string; inactive: string; icon: React.ReactNode }> = {
  mobiliteit: {
    active: "bg-[#7ECBC0] text-[#004B87] border-[#7ECBC0]",
    inactive: "bg-transparent text-[#7ECBC0] border-[#7ECBC0]/40 hover:bg-[#7ECBC0]/10",
    icon: <Globe className="h-3.5 w-3.5" />,
  },
  gezondheid: {
    active: "bg-[#5CB85C] text-white border-[#5CB85C]",
    inactive: "bg-transparent text-[#5CB85C] border-[#5CB85C]/40 hover:bg-[#5CB85C]/10",
    icon: <HeartPulse className="h-3.5 w-3.5" />,
  },
  algemeen: {
    active: "bg-[#004B87] text-white border-[#004B87]",
    inactive: "bg-transparent text-[#004B87] border-[#004B87]/40 hover:bg-[#004B87]/10",
    icon: <Building2 className="h-3.5 w-3.5" />,
  },
};

export function FilterBar({ filters, onChange }: FilterBarProps) {
  const hasActiveFilters =
    filters.domain || filters.policyTrack || filters.crossCuttingTheme;

  return (
    <div className="space-y-3">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Zoek methodieken..."
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          className="pl-9 font-mono text-sm"
        />
      </div>

      {/* Domain filters */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Filter className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
            Domein
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {(Object.keys(domainLabels) as Domain[]).map((domain) => {
            const styles = domainButtonStyles[domain];
            const isActive = filters.domain === domain;
            return (
              <button
                key={domain}
                onClick={() =>
                  onChange({
                    ...filters,
                    domain: isActive ? null : domain,
                  })
                }
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                  isActive ? styles.active : styles.inactive
                }`}
              >
                {styles.icon}
                {domainLabels[domain]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Policy track filters */}
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
          Beleidsspoor
        </span>
        <div className="flex flex-wrap gap-1.5">
          {(Object.keys(policyTrackLabels) as PolicyTrack[]).map((track) => {
            const isActive = filters.policyTrack === track;
            return (
              <button
                key={track}
                onClick={() =>
                  onChange({
                    ...filters,
                    policyTrack: isActive ? null : track,
                  })
                }
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground border-border hover:bg-muted"
                }`}
              >
                {policyTrackLabels[track]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cross-cutting theme filters */}
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
          Thema
        </span>
        <div className="flex flex-wrap gap-1.5">
          {(Object.keys(crossCuttingLabels) as CrossCuttingTheme[]).map(
            (theme) => {
              const isActive = filters.crossCuttingTheme === theme;
              return (
                <button
                  key={theme}
                  onClick={() =>
                    onChange({
                      ...filters,
                      crossCuttingTheme: isActive ? null : theme,
                    })
                  }
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-foreground border-border hover:bg-muted"
                  }`}
                >
                  {crossCuttingLabels[theme]}
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* Clear filters */}
      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() =>
            onChange({
              domain: null,
              policyTrack: null,
              crossCuttingTheme: null,
              search: filters.search,
            })
          }
          className="text-xs text-muted-foreground"
        >
          <X className="h-3 w-3 mr-1" />
          Filters wissen
        </Button>
      )}
    </div>
  );
}
