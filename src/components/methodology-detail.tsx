"use client";

import {
  type Methodiek,
  domainColors,
  domainLabels,
  processStepLabels,
  policyTrackLabels,
  policyTrackColors,
  crossCuttingLabels,
} from "@/data/methodieken";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ExternalLink,
  Target,
  Globe,
  HeartPulse,
  Building2,
  Route,
  Tag,
} from "lucide-react";

const domainIcons: Record<string, React.ReactNode> = {
  mobiliteit: <Globe className="h-4 w-4" />,
  gezondheid: <HeartPulse className="h-4 w-4" />,
  algemeen: <Building2 className="h-4 w-4" />,
};

interface MethodologyDetailProps {
  methodiek: Methodiek | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MethodologyDetail({
  methodiek,
  open,
  onOpenChange,
}: MethodologyDetailProps) {
  if (!methodiek) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg sm:max-w-xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl font-bold text-[#004B87] pr-6">
            {methodiek.name}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Details over de methodiek {methodiek.name}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-wrap gap-2 mt-1">
          <Badge
            className={`${domainColors[methodiek.domain]} gap-1.5 text-xs font-mono`}
          >
            {domainIcons[methodiek.domain]}
            {domainLabels[methodiek.domain]}
          </Badge>
          <Badge
            className={`${policyTrackColors[methodiek.policyTrack]} gap-1.5 text-xs font-mono`}
          >
            {policyTrackLabels[methodiek.policyTrack]}
          </Badge>
        </div>

        <Separator />

        <div className="space-y-4">
          {/* Description from Excel */}
          {methodiek.description ? (
            <p className="text-sm leading-relaxed text-foreground whitespace-pre-line">
              {methodiek.description}
            </p>
          ) : (
            <p className="text-sm italic text-muted-foreground">
              Geen omschrijving beschikbaar in de brondata.
            </p>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <Route className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  Beleidsspoor
                </p>
                <p className="text-sm font-medium">
                  {policyTrackLabels[methodiek.policyTrack]}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Target className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  Processtap
                </p>
                <p className="text-sm font-medium">
                  {processStepLabels[methodiek.processStep]}
                </p>
              </div>
            </div>
          </div>

          {methodiek.crossCuttingThemes.length > 0 && (
            <div className="flex items-start gap-2">
              <Tag className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">
                  Thema&rsquo;s
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {methodiek.crossCuttingThemes.map((theme) => (
                    <Badge
                      key={theme}
                      variant="outline"
                      className="text-xs font-mono"
                    >
                      {crossCuttingLabels[theme]}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {methodiek.remarks && (
            <div className="rounded-md bg-muted/50 p-3">
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">
                Opmerkingen
              </p>
              <p className="text-sm text-muted-foreground">
                {methodiek.remarks}
              </p>
            </div>
          )}

          {/* Source link from Excel */}
          {methodiek.link && (
            <a
              href={methodiek.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#004B87] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#003A6B] w-full"
            >
              <ExternalLink className="h-4 w-4" />
              Bekijk documentatie
            </a>
          )}

          {/* Link text reference (when no URL available) */}
          {!methodiek.link && methodiek.linkText && (
            <div className="rounded-md bg-muted/30 p-3">
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">
                Referentie
              </p>
              <p className="text-sm text-muted-foreground">
                {methodiek.linkText}
              </p>
            </div>
          )}

          {/* AI Detaillering section */}
          {methodiek.aiDetaillering && (
            <>
              <Separator />
              <div className="rounded-lg bg-muted/40 border border-border/40 p-4 space-y-3">
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                  Aanvullende informatie
                </p>
                <p className="text-sm leading-relaxed text-foreground">
                  {methodiek.aiDetaillering.description}
                </p>
                {methodiek.aiDetaillering.organization && (
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold">Organisatie:</span>{" "}
                    {methodiek.aiDetaillering.organization}
                  </p>
                )}
                {methodiek.aiDetaillering.sources.length > 0 && (
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                      Bronnen
                    </p>
                    <ul className="space-y-1">
                      {methodiek.aiDetaillering.sources.map((source, i) => (
                        <li key={i}>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[#004B87] hover:underline inline-flex items-center gap-1"
                          >
                            <ExternalLink className="h-3 w-3 shrink-0" />
                            {source.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className="text-[10px] text-muted-foreground/60 italic">
                  Deze informatie is aangevuld met behulp van AI op basis van
                  publiek beschikbare bronnen. Controleer de bronnen voor de
                  meest actuele informatie.
                </p>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
