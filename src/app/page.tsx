"use client";

import { useState, useMemo } from "react";
import { methodieken, type Methodiek } from "@/data/methodieken";
import { FlowDiagram } from "@/components/flow-diagram";
import { CardGrid } from "@/components/card-grid";
import { FilterBar, type Filters } from "@/components/filter-bar";
import { MethodologyDetail } from "@/components/methodology-detail";
import { Badge } from "@/components/ui/badge";
import {
  LayoutGrid,
  Network,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
} from "lucide-react";

export default function Home() {
  const [view, setView] = useState<"flow" | "grid">("flow");
  const [selectedMethod, setSelectedMethod] = useState<Methodiek | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    domain: null,
    policyTrack: null,
    crossCuttingTheme: null,
    search: "",
  });

  const handleMethodClick = (m: Methodiek) => {
    setSelectedMethod(m);
    setDetailOpen(true);
  };

  const filteredItems = useMemo(() => {
    return methodieken.filter((m) => {
      if (filters.domain && m.domain !== filters.domain) return false;
      if (filters.policyTrack && m.policyTrack !== filters.policyTrack)
        return false;
      if (
        filters.crossCuttingTheme &&
        !m.crossCuttingThemes.includes(filters.crossCuttingTheme)
      )
        return false;
      if (
        filters.search &&
        !m.name.toLowerCase().includes(filters.search.toLowerCase()) &&
        !m.description.toLowerCase().includes(filters.search.toLowerCase())
      )
        return false;
      return true;
    });
  }, [filters]);

  const activeFilterCount = [
    filters.domain,
    filters.policyTrack,
    filters.crossCuttingTheme,
  ].filter(Boolean).length;

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFBFC]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <img
                src="/dmi-logo.svg"
                alt="DMI Ecosysteem"
                className="h-8"
              />
              <div className="h-6 w-px bg-border/60" />
              <p className="font-heading text-sm font-semibold text-[#004B87]">
                Methodieken
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline">
                {filteredItems.length} items
              </span>

              <div className="flex items-center rounded-md border border-border/60 p-0.5 bg-muted/30">
                <button
                  onClick={() => setView("flow")}
                  className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer ${
                    view === "flow"
                      ? "bg-white text-[#004B87] shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Network className="h-3 w-3" />
                  <span className="hidden sm:inline">Proces</span>
                </button>
                <button
                  onClick={() => setView("grid")}
                  className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer ${
                    view === "grid"
                      ? "bg-white text-[#004B87] shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <LayoutGrid className="h-3 w-3" />
                  <span className="hidden sm:inline">Kaarten</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          {/* Intro */}
          <div className="mb-5">
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">
              Methodieken overzicht
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl">
              Gestructureerd langs het beleidsproces: van beleidsontwikkeling via
              doorwerking naar uitvoering en terugkoppeling.
            </p>
          </div>

          {/* Filter bar */}
          <div className="mb-5">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Filters
              {activeFilterCount > 0 && (
                <Badge className="bg-[#004B87] text-white text-[9px] h-4 min-w-4 px-1 rounded-full">
                  {activeFilterCount}
                </Badge>
              )}
              {filtersOpen ? (
                <ChevronUp className="h-3 w-3" />
              ) : (
                <ChevronDown className="h-3 w-3" />
              )}
            </button>

            {filtersOpen && (
              <div className="mt-2 rounded-lg border border-border/60 bg-white p-4">
                <FilterBar filters={filters} onChange={setFilters} />
              </div>
            )}
          </div>

          {/* Content */}
          {view === "flow" ? (
            <FlowDiagram
              onMethodClick={handleMethodClick}
              activeFilters={{
                domain: filters.domain,
                search: filters.search,
              }}
            />
          ) : (
            <CardGrid
              onMethodClick={handleMethodClick}
              filteredItems={filteredItems}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-white/50 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-[10px] font-mono text-muted-foreground/60 text-center">
            DMI Ecosysteem &middot; TNO &middot; Fase 1: Mobiliteit,
            Gezondheid &amp; Welzijn, Algemeen
          </p>
        </div>
      </footer>

      {/* Detail modal */}
      <MethodologyDetail
        methodiek={selectedMethod}
        open={detailOpen}
        onOpenChange={setDetailOpen}
      />
    </div>
  );
}
