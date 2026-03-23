"use client";

import { type Methodiek, methodieken, domainColors, domainLabels } from "@/data/methodieken";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ChevronRight,
  Compass,
  Target,
  Layers,
  Radio,
  RotateCcw,
  Globe,
  HeartPulse,
  Building2,
} from "lucide-react";

interface FlowDiagramProps {
  onMethodClick: (m: Methodiek) => void;
  activeFilters: {
    domain: string | null;
    search: string;
  };
}

function getFiltered(
  items: Methodiek[],
  filters: FlowDiagramProps["activeFilters"]
) {
  return items.filter((m) => {
    if (filters.domain && m.domain !== filters.domain) return false;
    if (
      filters.search &&
      !m.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      !m.description.toLowerCase().includes(filters.search.toLowerCase())
    )
      return false;
    return true;
  });
}

const domainDot: Record<string, string> = {
  mobiliteit: "bg-[#7ECBC0]",
  gezondheid: "bg-[#5CB85C]",
  algemeen: "bg-[#004B87]",
};

function MethodChip({
  m,
  onClick,
}: {
  m: Methodiek;
  onClick: (m: Methodiek) => void;
}) {
  return (
    <button
      onClick={() => onClick(m)}
      className="group flex items-center gap-1.5 rounded-md border border-border/60 bg-white px-2.5 py-1.5 text-left text-[11px] font-medium shadow-sm transition-all hover:shadow-md hover:border-[#004B87]/30 hover:-translate-y-0.5 cursor-pointer leading-tight"
    >
      <span
        className={`h-2 w-2 rounded-full shrink-0 ${domainDot[m.domain]}`}
      />
      <span className="truncate max-w-[150px]">{m.name}</span>
    </button>
  );
}

function ChipCluster({
  items,
  onMethodClick,
  filters,
}: {
  items: Methodiek[];
  onMethodClick: (m: Methodiek) => void;
  filters: FlowDiagramProps["activeFilters"];
}) {
  const filtered = getFiltered(items, filters);
  if (filtered.length === 0)
    return (
      <p className="text-[10px] text-muted-foreground/40 italic py-1">
        Geen items
      </p>
    );
  return (
    <div className="flex flex-wrap gap-1.5">
      {filtered.map((m) => (
        <MethodChip key={m.id} m={m} onClick={onMethodClick} />
      ))}
    </div>
  );
}

function StepColumn({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      <p className="text-[11px] font-mono text-muted-foreground font-semibold tracking-wide">
        {label}
      </p>
      {children}
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center shrink-0 self-center pt-5">
      <ChevronRight className="h-4 w-4 text-border" />
    </div>
  );
}

function SectionHeader({
  icon,
  title,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/40">
      <div className={`h-7 w-7 rounded-lg flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider">
        {title}
      </h3>
    </div>
  );
}

export function FlowDiagram({
  onMethodClick,
  activeFilters,
}: FlowDiagramProps) {
  const byId = (ids: string[]) =>
    methodieken.filter((m) => ids.includes(m.id));

  return (
    <div className="w-full space-y-4">
      {/* Legend */}
      <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground mb-2">
        <span className="font-semibold tracking-wider uppercase">Domein:</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#7ECBC0]" />Mobiliteit</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#5CB85C]" />Gezondheid &amp; Welzijn</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#004B87]" />Algemeen</span>
      </div>

      {/* DOMEIN OVERSTIJGEND */}
      <div className="rounded-xl border border-[#F2A900]/30 bg-[#FFF8E1]/20 p-5">
        <SectionHeader
          icon={<Compass className="h-4 w-4 text-white" />}
          title="Domein Overstijgend"
          color="bg-[#F2A900]"
        />
        <ChipCluster
          items={byId([
            "beleidskompas",
            "beleidscyclus",
            "theory-of-change",
            "omgevingsvisie",
            "behaviour-change-models",
            "bcm-mobiliteit",
          ])}
          onMethodClick={onMethodClick}
          filters={activeFilters}
        />
      </div>

      {/* BELEIDSONTWIKKELING */}
      <div className="rounded-xl border border-[#004B87]/15 bg-white p-5">
        <SectionHeader
          icon={<Target className="h-4 w-4 text-white" />}
          title="Beleidsontwikkeling"
          color="bg-[#004B87]"
        />

        <div className="flex items-start gap-2 overflow-x-auto pb-2">
          <StepColumn label="Ambitie / Visie / Doel" className="min-w-[150px]">
            <ChipCluster
              items={byId(["wise", "sump", "5-lagenmodel", "anders-reizen"])}
              onMethodClick={onMethodClick}
              filters={activeFilters}
            />
          </StepColumn>
          <FlowArrow />
          <StepColumn label="Probleemanalyse" className="min-w-[150px]">
            <ChipCluster
              items={byId([
                "stomp",
                "omsbo",
                "mens-achter-reisgedrag",
                "go-methode",
                "inclusiviteit",
              ])}
              onMethodClick={onMethodClick}
              filters={activeFilters}
            />
          </StepColumn>
          <FlowArrow />
          <StepColumn label="Oplossingsrichtingen" className="min-w-[150px]">
            <ChipCluster
              items={byId([
                "toolkit-positieve-gezondheid",
                "groene-baten-planner",
                "loket-gezond-leven",
              ])}
              onMethodClick={onMethodClick}
              filters={activeFilters}
            />
          </StepColumn>
          <FlowArrow />
          <StepColumn label="Beleidskeuze" className="min-w-[130px]">
            <ChipCluster
              items={byId(["mkba-mirt"])}
              onMethodClick={onMethodClick}
              filters={activeFilters}
            />
          </StepColumn>
        </div>

        {/* Cross-cutting sub-sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 pt-4 border-t border-border/30">
          <div className="rounded-lg bg-[#E6F5F3]/40 border border-[#7ECBC0]/20 p-3">
            <p className="text-[10px] font-mono uppercase tracking-wider text-[#0D9488] mb-2 font-semibold">
              Gericht op openbare ruimte
            </p>
            <ChipCluster
              items={byId([
                "placemaker",
                "wijkaanpak-mobiliteit",
                "verkeer-in-de-stad",
                "mobiliteit-openbare-ruimte",
              ])}
              onMethodClick={onMethodClick}
              filters={activeFilters}
            />
          </div>
          <div className="rounded-lg bg-[#F3E8F9]/30 border border-[#C9A0DC]/20 p-3">
            <p className="text-[10px] font-mono uppercase tracking-wider text-[#9B59B6] mb-2 font-semibold">
              Participatie &amp; stakeholders
            </p>
            <ChipCluster
              items={byId(["omsbo", "participatieve-beleidsontwikkeling"])}
              onMethodClick={onMethodClick}
              filters={activeFilters}
            />
          </div>
        </div>
      </div>

      {/* BELEIDSDOORWERKING */}
      <div className="rounded-xl border border-[#4A90C4]/15 bg-white p-5">
        <SectionHeader
          icon={<Layers className="h-4 w-4 text-white" />}
          title="Beleidsdoorwerking"
          color="bg-[#4A90C4]"
        />

        <div className="flex items-start gap-2 overflow-x-auto pb-2">
          <StepColumn label="Beleidsdoel" className="min-w-[160px]">
            <ChipCluster
              items={byId([
                "gebiedsgericht-benutten",
                "richtlijn-multimodale-netwerkkaders",
                "regionale-mobiliteitsprogrammas",
                "smart-mobility-its-europa",
                "regulation-rtti",
              ])}
              onMethodClick={onMethodClick}
              filters={activeFilters}
            />
          </StepColumn>
          <FlowArrow />
          <StepColumn label="Probleemanalyse" className="min-w-[140px]">
            <ChipCluster
              items={byId(["fame-cem", "data-en-modellering"])}
              onMethodClick={onMethodClick}
              filters={activeFilters}
            />
          </StepColumn>
          <FlowArrow />
          <StepColumn label="Interventies" className="min-w-[200px] flex-1">
            <ChipCluster
              items={byId([
                "aanpak-spv",
                "werkwijzer-duurzame-mobiliteit",
                "crow-ladder-smart-mobility",
                "handreiking-voetgangersnetwerk",
                "asvv",
                "crow-parkeernormen",
                "leidraad-zero-emissie-logistiek",
                "leidraad-ze-logistiek-polis",
                "crow-handreiking-gebiedsontwikkeling-logistiek",
                "crow-handreiking-energie-mobiliteitshubs",
                "crow-handreiking-duurzaam-gww",
                "mobiliteitsmanagement-modal-shift",
                "verkeersveiligheid",
                "itf-road-safety",
                "toegankelijkheidsrichtlijnen",
                "bewegingsbevorderende-wijken",
                "cpted",
                "sociale-veiligheid",
                "mobility-mapping",
                "werkboek-7-werkvormen",
              ])}
              onMethodClick={onMethodClick}
              filters={activeFilters}
            />
          </StepColumn>
          <FlowArrow />
          <StepColumn label="Implementatie" className="min-w-[130px]">
            <ChipCluster
              items={byId(["midi", "liso"])}
              onMethodClick={onMethodClick}
              filters={activeFilters}
            />
          </StepColumn>
        </div>
      </div>

      {/* UITVOERING (OODA) */}
      <div className="rounded-xl border border-[#8C8C8C]/15 bg-white p-5">
        <SectionHeader
          icon={<Radio className="h-4 w-4 text-white" />}
          title="Uitvoering"
          color="bg-[#6B7280]"
        />
        <p className="text-[10px] font-mono text-muted-foreground/60 -mt-2 mb-3">
          OODA Loop
        </p>

        <div className="flex items-start gap-2 overflow-x-auto pb-2">
          <StepColumn label="Observe" className="min-w-[130px]">
            <ChipCluster
              items={byId(["festa-v"])}
              onMethodClick={onMethodClick}
              filters={activeFilters}
            />
          </StepColumn>
          <FlowArrow />
          <StepColumn label="Orient" className="min-w-[130px]">
            <ChipCluster
              items={byId(["sutz", "uvar-overzicht"])}
              onMethodClick={onMethodClick}
              filters={activeFilters}
            />
          </StepColumn>
          <FlowArrow />
          <StepColumn label="Decide" className="min-w-[130px]">
            <ChipCluster
              items={byId(["selectieve-toegang-en-doseren"])}
              onMethodClick={onMethodClick}
              filters={activeFilters}
            />
          </StepColumn>
          <FlowArrow />
          <StepColumn label="Act" className="min-w-[160px] flex-1">
            <ChipCluster
              items={byId([
                "curbside-management",
                "kennismodule-parkeren",
                "uvar-implementatie-toolkit",
                "implementatie-micromobiliteit",
                "verkeersmanagement",
                "road-asset-management",
                "wegbeheer",
              ])}
              onMethodClick={onMethodClick}
              filters={activeFilters}
            />
          </StepColumn>
        </div>
      </div>

      {/* TERUGKOPPELING */}
      <div className="rounded-xl border border-[#5CB85C]/20 bg-[#E8F5E9]/15 p-5">
        <SectionHeader
          icon={<RotateCcw className="h-4 w-4 text-white" />}
          title="Terugkoppeling"
          color="bg-[#5CB85C]"
        />
        <p className="text-[11px] font-mono text-muted-foreground font-semibold tracking-wide mb-2">
          Reflecteren en Leren (M&amp;E)
        </p>
        <ChipCluster
          items={byId(["memovin", "festa-v"])}
          onMethodClick={onMethodClick}
          filters={activeFilters}
        />
      </div>
    </div>
  );
}
