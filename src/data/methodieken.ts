// ============================================================
// Types
// ============================================================

export type Domain = "mobiliteit" | "gezondheid" | "algemeen";
export type ProcessStep =
  | "ambitie_visie_doel"
  | "probleemanalyse"
  | "oplossingsrichtingen"
  | "beleidskeuze"
  | "beleidsdoel"
  | "beleids_probleemanalyse"
  | "interventies"
  | "implementatie"
  | "observe"
  | "orient"
  | "decide"
  | "act"
  | "reflecteren_leren"
  | "participatie"
  | "openbare_ruimte";

export type CrossCuttingTheme =
  | "domein_overstijgend"
  | "openbare_ruimte"
  | "participatie"
  | "data_gedreven"
  | "evaluatie";

export type PolicyTrack =
  | "domein_overstijgend"
  | "beleidsontwikkeling"
  | "beleidsdoorwerking"
  | "uitvoering"
  | "terugkoppeling";

export interface AiSource {
  url: string;
  label: string;
}

export interface AiDetaillering {
  description: string;
  organization?: string;
  sources: AiSource[];
}

export interface Methodiek {
  id: string;
  name: string;
  domain: Domain;
  processStep: ProcessStep;
  policyTrack: PolicyTrack;
  crossCuttingThemes: CrossCuttingTheme[];
  /** Exact description from Excel source data. Empty string if not available. */
  description: string;
  /** Link reference text from Excel (may be a label, not a URL). */
  linkText: string;
  /** Actual URL extracted from Excel link column. */
  link: string;
  /** Opmerkingen column from Excel. */
  remarks: string;
  /** AI-generated supplementary info with verified sources. */
  aiDetaillering?: AiDetaillering;
}

// ============================================================
// Data — descriptions & links are EXACT from the Excel source.
// AI detaillering is separately marked with verified sources.
// ============================================================

export const methodieken: Methodiek[] = [

  // ═══════════════════════════════════════════════════════════
  // ALGEMEEN
  // ═══════════════════════════════════════════════════════════

  {
    id: "beleidskompas",
    name: "Beleidskompas",
    domain: "algemeen",
    processStep: "ambitie_visie_doel",
    policyTrack: "domein_overstijgend",
    crossCuttingThemes: ["domein_overstijgend"],
    description: "De centrale werkwijze voor het maken van beleid bij de Rijksoverheid. Het bestaat uit vijf stappen:\nProbleemanalyse\nDoelbepaling\nOntwikkelen van beleidsopties\nBeoordelen van gevolgen\nKiezen van een voorkeursoptie",
    linkText: "Beleidskompas | Kenniscentrum voor beleid en regelgeving",
    link: "",
    remarks: "Algemene BO\nMet technieken zoals Doelenboom en Krachtenveldanalyse",
    aiDetaillering: {
      description: "Het Beleidskompas vervangt het voormalige Integraal Afwegingskader (IAK). Het biedt een gestructureerde aanpak in vijf stappen, waarbij doorlopend aandacht wordt besteed aan de vraag welke stakeholders betrokken moeten worden.",
      organization: "KCBR (Kenniscentrum voor beleid en regelgeving), Rijksoverheid",
      sources: [
        { url: "https://www.kcbr.nl/ontwikkelen-beleid-en-regelgeving/beleidskompas", label: "Beleidskompas – KCBR" },
      ],
    },
  },
  {
    id: "omsbo",
    name: "Open MultiStakeholder Beleidsontwikkeling (OMSBO)",
    domain: "algemeen",
    processStep: "probleemanalyse",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["participatie"],
    description: "Bij OMSBO wordt beleid ontwikkeld in samenwerking en interactie met burgers, maatschappelijke organisaties, bedrijven en/of andere overheden.",
    linkText: "Het 7 cirkel model | Grenzeloos Samenwerken",
    link: "",
    remarks: "Algemene BO\nMet technieken zoals ontwerpsessies, burgerparticipatie\u2011formats\ncreatieve verkenningen",
    aiDetaillering: {
      description: "Het 7-cirkelmodel voor Open MultiStakeholder Beleidsontwikkeling is ontwikkeld door Max Herold, organisatieadviseur bij de Rijksoverheid. Het model helpt bij het ontwerpen van open beleidsontwikkelingsprocessen waarin beleid wordt ontwikkeld in samenwerking met burgers, organisaties, bedrijven en overheden.",
      organization: "Rijksoverheid / Max Herold",
      sources: [
        { url: "https://managementissues.com/overige/het-7-cirkelmodel-voor-open-multistakeholder-beleidsontwikkeling-versus-het-beleidskompas/", label: "7-Cirkelmodel voor OMSBO – Managementissues" },
        { url: "https://platformoverheid.nl/artikel/beleidsontwikkeling-anno-2021/", label: "Beleidsontwikkeling anno 2021 – Platform O" },
      ],
    },
  },
  {
    id: "beleidscyclus",
    name: "Beleidscyclus (PDCA)",
    domain: "algemeen",
    processStep: "ambitie_visie_doel",
    policyTrack: "domein_overstijgend",
    crossCuttingThemes: ["domein_overstijgend"],
    description: "Geeft een schematisch beeld van de manier waarop beleid tot stand komt: Plan, Do, Check, Act",
    linkText: "Ontwikkelen beleid en regelgeving | Kenniscentrum voor beleid en regelgeving",
    link: "",
    remarks: "Algemene BO",
    aiDetaillering: {
      description: "De PDCA-cyclus (Plan-Do-Check-Act), ook bekend als de Deming-cirkel, is een methode voor continue kwaliteitsverbetering ontwikkeld door Dr. W.E. Deming in de jaren '50. In de beleidscontext wordt de cyclus toegepast op de gemeentelijke beleidscyclus: beleid plannen, uitvoeren, controleren of de resultaten zijn behaald, en bijsturen.",
      organization: "Algemeen managementmodel (Deming). In NL toegepast via RIVM/Loket Gezond Leven.",
      sources: [
        { url: "https://managementmodellensite.nl/pdca-cyclus/", label: "PDCA-cyclus – Managementmodellensite" },
        { url: "https://www.loketgezondleven.nl/beleid/wettelijke-kaders/lokaal-gezondheidsbeleid", label: "Lokaal gezondheidsbeleid – Loket Gezond Leven" },
      ],
    },
  },
  {
    id: "midi",
    name: "MIDI",
    domain: "algemeen",
    processStep: "implementatie",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["data_gedreven"],
    description: "Meetinstrument Determinanten van Innovaties / Implementatie",
    linkText: "",
    link: "https://www.tno.nl/downloads/MIDIvragenlijst.pdf",
    remarks: "De MIDI is onderbouwd en wordt veel gebruikt in de sociale sector/public health.\n\nIn de beleidscyclus, dus breder dan 'alleen' de B-Ontwikkeling, hoort ook de implementatie van beleid.",
    aiDetaillering: {
      description: "De MIDI is een gevalideerd meetinstrument dat 29 determinanten identificeert in drie categorieën: innovatiegerelateerd (procedurele helderheid, complexiteit), gebruikersgerelateerd (persoonlijk voor-/nadeel, eigen-effectiviteit, kennis) en organisatie/omgevingsgerelateerd (draagvlak management, tijd, financiële middelen). Ontwikkeld op basis van acht empirische studies.",
      organization: "TNO, ontwikkeld door Margot Fleuren e.a.",
      sources: [
        { url: "https://www.tno.nl/media/1869/midi_meetinstrument_determinanten_innovaties_tno_gl_l_12_11_1496n.pdf", label: "MIDI beschrijving – TNO" },
        { url: "https://www.tno.nl/downloads/MIDIvragenlijst.pdf", label: "MIDI vragenlijst – TNO" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════
  // MOBILITEIT
  // ═══════════════════════════════════════════════════════════

  {
    id: "wise",
    name: "WISE Methodiek",
    domain: "mobiliteit",
    processStep: "ambitie_visie_doel",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: [],
    description: "zie pva",
    linkText: "",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "WISE Policy Making is een door TNO ontwikkeld Early Research Program (gestart in 2019) dat methodieken en instrumenten biedt waarmee beleidsmakers bij ministeries en gemeenten gezamenlijk beleid kunnen ontwikkelen gericht op brede welvaart. De modellen geven ex-ante inzicht in de effecten van beleidskeuzes op het welzijn van de samenleving. Er is een specifieke mobiliteitscasus voor Rotterdam uitgewerkt.",
      organization: "TNO",
      sources: [
        { url: "https://www.tno.nl/nl/over-tno/organisatie/samenwerken/sturen-brede-welvaart-wise-policy-making/", label: "WISE Policy Making – TNO" },
      ],
    },
  },
  {
    id: "stomp",
    name: "STOMP - principe",
    domain: "mobiliteit",
    processStep: "probleemanalyse",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: [],
    description: "STOMP staat voor Stappen, Trappen, Openbaar vervoer, Mobility-as-a-Service en Privéauto. Het is een ordeningsprincipe dat helpt om keuzes in mobiliteit en ruimte te prioriteren. Eerst ruimte voor lopen, daarna fietsen, vervolgens openbaar vervoer en gedeelde vormen van vervoer, en pas daarna de privéauto.",
    linkText: "",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "STOMP is een ordeningsprincipe dat helpt bij het prioriteren van keuzes in mobiliteit en ruimte: eerst ruimte voor lopen, dan fietsen, dan OV en deelvervoer, en pas daarna de privéauto. Het doel is de mens centraal te stellen bij het ontwerpen van de leefomgeving.",
      organization: "Diverse partijen (o.a. gemeenten, CROW, Goudappel)",
      sources: [
        { url: "https://www.goudappel.nl/nl/themas/nieuwe-mobiliteit/stomp", label: "STOMP-principe – Goudappel" },
        { url: "https://www.crow.nl/kennisproducten/stomp-in-de-praktijk/", label: "STOMP in de praktijk – CROW" },
      ],
    },
  },
  {
    id: "5-lagenmodel",
    name: "5-Lagenmodel",
    domain: "mobiliteit",
    processStep: "ambitie_visie_doel",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: [],
    description: "Dit document beschrijft vijf mobiliteitsprincipes om de woningbouwopgave in Nederland te combineren met een versnelling van de mobiliteitstransitie. Ze zijn bedoeld als inspiratie voor gemeenten en regio's die worden geconfronteerd met een verstedelijkingsopgave.",
    linkText: "CVS paper mobiliteitsprincipes",
    link: "",
    remarks: "is vooral bedoeld ter inspiratie, drie stappen relevant: voorkomen van mobiliteit, veranderen van mobiliteit, optimaliseren van mobiliteit",
    aiDetaillering: {
      description: "De vijf duurzame mobiliteitsprincipes bij verstedelijking bieden een kader voor het integreren van mobiliteit in de woningbouwopgave: verdichten en functiemenging, voetgangers en fietsers als hoofdgebruikers, vraagbeïnvloeding via parkeerbeleid, en het benutten van woningbouw om ontbrekende schakels op te lossen.",
      organization: "Goudappel / Ministerie van IenW",
      sources: [
        { url: "https://www.goudappel.nl/nl/actueel/5-duurzame-mobiliteitsprincipes-bij-verstedelijking", label: "5 mobiliteitsprincipes – Goudappel" },
        { url: "https://www.rijksoverheid.nl/documenten/rapporten/2022/09/26/onderzoek-mobiliteitsvernieuwing-en-slimme-duurzame-verstedelijking", label: "Onderzoek Mobiliteitsvernieuwing – Rijksoverheid" },
      ],
    },
  },
  {
    id: "memovin",
    name: "Memovin",
    domain: "mobiliteit",
    processStep: "reflecteren_leren",
    policyTrack: "terugkoppeling",
    crossCuttingThemes: ["evaluatie", "data_gedreven"],
    description: "Methodiek Evaluatie Mobiliteit Vinex-locaties (MEMOVIN), waarbij het gaat om het evalueren van zowel de gerealiseerde fysieke structuur ter bevordering van nabijheid en bereikbaarheid als het resulterende feitelijke verplaatsingsgedrag van de nieuwe bewoners op Vinex-locaties. (1999/TNO Inro)",
    linkText: "Methodiek Evaluatie Mobiliteit Vinex-locaties (MEMOVIN) : eindrapport - Rijkswaterstaat Publicatie Platform",
    link: "",
    remarks: "uit 1999",
    aiDetaillering: {
      description: "MEMOVIN is een evaluatiemethodiek ontwikkeld door TNO Inro in 1999 in opdracht van de Adviesdienst Verkeer en Vervoer. Het onderzoek toonde aan dat vooral uitleglocaties relatief hoge automobiliteit vertoonden, terwijl verdichtingslocaties laag autogebruik lieten zien.",
      organization: "TNO Inro",
      sources: [
        { url: "https://www.kenniswest.be/publicatie/methodiek-evaluatie-mobiliteit-vinex-locaties-memovin-eindrapport/32183", label: "MEMOVIN eindrapport – KennisWest" },
      ],
    },
  },
  {
    id: "bcm-mobiliteit",
    name: "Behavior Change Model (BCM) - Mobiliteitsgedrag effectief veranderen",
    domain: "mobiliteit",
    processStep: "ambitie_visie_doel",
    policyTrack: "domein_overstijgend",
    crossCuttingThemes: ["domein_overstijgend"],
    description: "Het stappenplan 'Zo werkt het - Mobiliteitsgedrag effectief veranderen' is gebaseerd op het Behavior Change Model (BCM). Dit is een wetenschappelijk onderbouwd raamwerk voor het begrijpen en beïnvloeden van gedrag in de context van mobiliteit.",
    linkText: "Mobiliteitsgedrag_effectief_verbeteren.pdf",
    link: "",
    remarks: "white paper ontwikkeld door Dijksterhuis & Van Baaren in samenwerking met Breikers.",
    aiDetaillering: {
      description: "Het Behavior Change Model voor mobiliteitsgedrag is een stappenplan ontwikkeld door Breikers in samenwerking met Dijksterhuis & Van Baaren. De whitepaper beschrijft de psychologische processen die ten grondslag liggen aan mobiliteitsgedrag en de stappen om dit gedrag effectief en duurzaam te veranderen.",
      organization: "Breikers / Dijksterhuis & Van Baaren",
      sources: [
        { url: "https://wijzijnbreikers.nl/whitepaper-mobiliteitsgedrag-effectief-veranderen-een-stappenplan/", label: "Whitepaper Mobiliteitsgedrag – Breikers" },
        { url: "https://zowerkthet.nl/wp-content/uploads/2023/05/Mobiliteitsgedrag_effectief_verbeteren.pdf", label: "Mobiliteitsgedrag effectief veranderen (PDF)" },
      ],
    },
  },
  {
    id: "toegankelijkheidsrichtlijnen",
    name: "Integrale toegankelijkheidsrichtlijnen voor openbare ruimte en bushaltes",
    domain: "mobiliteit",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "Het inrichten van looproutes, bushaltes, parkeerplaatsen en reis- en route-informatie staat beschreven.",
    linkText: "CROW | Integrale toegankelijkheidsrichtlijnen voor openbare ruimte en bushaltes",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "De CROW Leidraad Toegankelijkheid bevat kennis over beleid, richtlijnen en aanbevelingen voor het toegankelijk inrichten van de openbare ruimte en voor toegankelijke mobiliteit. Beschrijft het ontwerp van looproutes, bushaltes, parkeerplaatsen en reis- en routeinformatie voor zes typen gebieden.",
      organization: "CROW",
      sources: [
        { url: "https://www.crow.nl/kennisproducten/leidraad-toegankelijkheid/", label: "Leidraad Toegankelijkheid – CROW" },
      ],
    },
  },
  {
    id: "sump",
    name: "SUMP (Sustainable Urban Mobility Plan)",
    domain: "mobiliteit",
    processStep: "ambitie_visie_doel",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: [],
    description: "Duurzaam Stedelijk Mobiliteitsplan (SUMP) - Europa decentraal\n\nVoor decentrale overheden in stedelijke gebieden is een SUMP een strategisch plan voor duurzame stedelijke mobiliteit, geïnitieerd vanuit EU-beleid. Het TEN-T verbindt de steden en regio's in de Europese Unie met elkaar, onder andere via de ruim 400 'urban nodes' (stedelijke knooppunten).",
    linkText: "Duurzaam Stedelijk Mobiliteitsplan (SUMP) - Europa decentraal\nCROW | Sustainable Urban Mobility Plans (SUMP's)",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "Een Sustainable Urban Mobility Plan (SUMP) is een strategisch plan dat voorziet in de mobiliteitsbehoeften van burgers en bedrijven in steden, met nadruk op duurzame mobiliteit. De EU vereist dat steden met meer dan 100.000 inwoners uiterlijk eind 2027 een SUMP hebben.",
      organization: "Europese Commissie",
      sources: [
        { url: "https://europadecentraal.nl/onderwerp/vervoer/duurzaam-stedelijk-mobiliteitsplan-sump/", label: "SUMP – Europa decentraal" },
        { url: "https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32023H0550&from=EN", label: "EU Aanbeveling SUMP – EUR-Lex" },
      ],
    },
  },
  {
    id: "handreiking-voetgangersnetwerk",
    name: "Handreiking voetgangersnetwerk",
    domain: "mobiliteit",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "Handreiking om binnen een gemeente te komen tot een beleidsmatig verankerd en kwalitatief hoogwaardig voetgangersnetwerk.",
    linkText: "CROW | Handreiking voetgangersnetwerk",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "De CROW Handreiking Voetgangersnetwerk (januari 2024) biedt gemeenten een stappenplan voor het ontwikkelen van een gemeentelijk voetgangersnetwerk, bestaande uit een basisnetwerk, hoofdnetwerk en groen recreatief netwerk.",
      organization: "CROW-KpVV / Platform Ruimte voor Lopen / Goudappel",
      sources: [
        { url: "https://www.crow.nl/actueel/handreiking-stappenplan-voor-voetgangersnetwerk/", label: "Handreiking voetgangersnetwerk – CROW" },
        { url: "https://ruimtevoorlopen.nl/kennisitem/handreiking-voetgangersnetwerk/", label: "Handreiking – Ruimte voor Lopen" },
      ],
    },
  },
  {
    id: "verkeer-in-de-stad",
    name: "Verkeer in de Stad",
    domain: "mobiliteit",
    processStep: "openbare_ruimte",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "In de ontwerpmethodiek Verkeer in de Stad leggen we een nieuw fundament, met nieuwe grondslagen voor ontwerp. Verkeer in de stad richt zich op de gezonde en verkeersveilige stad.",
    linkText: "Verkeer in de stad - Verkeersveiligheidscoalitie",
    link: "https://ruimtevoorlopen.nl/activiteit/ontwerpmethodiek-verkeer-in-de-stad/",
    remarks: "",
    aiDetaillering: {
      description: "De ontwerpmethodiek 'Verkeer in de Stad' is ontwikkeld door de ANWB in samenwerking met Mobycon. De methodiek ordent al het stadsverkeer op basis van 'voertuigfamilies' ingedeeld naar gewicht. Bij elke maximumsnelheid (10, 20, 30, 50 km/u) hoort een voertuigfamilie, die bepalend is voor het straatontwerp.",
      organization: "ANWB / Mobycon",
      sources: [
        { url: "https://www.anwb.nl/belangenbehartiging/verkeer/verkeer-in-de-stad", label: "Verkeer in de stad – ANWB" },
        { url: "https://ruimtevoorlopen.nl/activiteit/ontwerpmethodiek-verkeer-in-de-stad/", label: "Ontwerpmethodiek – Ruimte voor Lopen" },
      ],
    },
  },
  {
    id: "aanpak-spv",
    name: "Aanpak SPV",
    domain: "mobiliteit",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: [],
    description: "Met Aanpak SPV op weg naar 0 verkeersslachtoffers in 2050! Een risicogestuurde aanpak van verkeersveiligheid biedt meer zicht op de risico's en de effectiviteit van maatregelen.",
    linkText: "Aanpak SPV – Aanpak SPV",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "Het Strategisch Plan Verkeersveiligheid 2030 beschrijft een vernieuwde visie met als ambitie nul verkeersslachtoffers in 2050 en een halvering in 2030. Het verschuift van een reactieve, ongevallengebaseerde aanpak naar een proactieve, risicogestuurde benadering.",
      organization: "Ministerie van IenW / VNG / IPO",
      sources: [
        { url: "https://aanpakspv.nl/", label: "Aanpak SPV – kennisplatform" },
        { url: "https://aanpakspv.nl/kenniscatalogus/strategisch-plan-verkeersveiligheid-2030-veilig-van-deur-tot-deur/", label: "SPV 2030 – Aanpak SPV" },
      ],
    },
  },
  {
    id: "wijkaanpak-mobiliteit",
    name: "Wijkaanpak Mobiliteit",
    domain: "mobiliteit",
    processStep: "openbare_ruimte",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["openbare_ruimte", "participatie"],
    description: "In Rotterdam zijn de wijken aan zet. De mobiliteitstransitie is volop in beweging, maar hoe zorg je ervoor dat de verandering niet alleen top-down maar juist vanuit de wijk plaatsvindt?",
    linkText: "Wijkaanpak Mobiliteit - Ideate",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "De Wijkaanpak Mobiliteit is een programma in Rotterdam waarin bewoners actief worden betrokken bij het verbeteren van mobiliteit in hun wijk. Ideate is projectleider van de pilotwijk Mathenesse; de aanpak wordt uitgerold naar andere Rotterdamse wijken.",
      organization: "Gemeente Rotterdam / Ideate / Veldacademie / TNO",
      sources: [
        { url: "https://ideate.nl/projecten/wijkaanpak-mobiliteit/", label: "Wijkaanpak Mobiliteit – Ideate" },
      ],
    },
  },
  {
    id: "placemaker",
    name: "Placemaker",
    domain: "mobiliteit",
    processStep: "openbare_ruimte",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["openbare_ruimte", "participatie"],
    description: "Placemaking is een methode om de openbare ruimte leefbaar en succesvol te maken. Dit gebeurt op basis van de inbreng van omwonenden, ondernemers en bezoekers.",
    linkText: "Placemaking en mobiliteit : een handleiding met voorbeelden uit de praktijk.",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "Placemaking en Mobiliteit is een CROW-KpVV publicatie die placemaking als methode inzet om de openbare ruimte leefbaar en succesvol te maken, met expliciete koppeling aan mobiliteit. Voorlopersteden als Eindhoven, Maastricht en Zwolle hebben deze aanpak in de praktijk gebracht.",
      organization: "CROW-KpVV",
      sources: [
        { url: "https://www.crow.nl/publicaties/placemaking-en-mobiliteit", label: "Placemaking en Mobiliteit – CROW" },
      ],
    },
  },
  {
    id: "mobiliteit-openbare-ruimte",
    name: "Mobiliteit en de openbare ruimte",
    domain: "mobiliteit",
    processStep: "openbare_ruimte",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "PhD onderzoek (2023-2027) naar onderzoeksmethoden in mobiliteit",
    linkText: "Mobiliteit en de openbare ruimte - openresearch.amsterdam",
    link: "",
    remarks: "Geen methode, wel een mooi contact!",
    aiDetaillering: {
      description: "Promotieonderzoek 'Shifting Mobility Paradigms' door Emma van Veenen (Gemeente Amsterdam / WUR) combineert wetenschapsfilosofie met transitieonderzoek om onderliggende waarden in mobiliteitsmethoden te evalueren.",
      organization: "Gemeente Amsterdam / Wageningen University & Research",
      sources: [
        { url: "https://openresearch.amsterdam/en/page/33528/mobility-and-public-space", label: "Mobility and Public Space – openresearch.amsterdam" },
      ],
    },
  },
  {
    id: "werkwijzer-duurzame-mobiliteit",
    name: "Werkwijzer 'Duurzame mobiliteit en gedrag'",
    domain: "mobiliteit",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: [],
    description: "De werkwijzer helpt beleidsmedewerkers op gestructureerde wijze na te denken over de werking en effectiviteit van gedragsmaatregelen voor duurzame mobiliteit.",
    linkText: "Werkwijzer 'Duurzame mobiliteit en gedrag' | Rapport | Rijksoverheid.nl",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "De Werkwijzer 'Duurzame mobiliteit en gedrag' (juni 2024) helpt beleidsmedewerkers bij het identificeren van effectieve gedragsmaatregelen. Biedt een stappenplan om geschikte mobiliteitsinterventies te bepalen en inzicht in hoe het ontwerp van maatregelen de effectiviteit beïnvloedt.",
      organization: "Ministerie van Infrastructuur en Waterstaat",
      sources: [
        { url: "https://www.rijksoverheid.nl/documenten/rapporten/2024/06/28/werkwijzer-duurzame-mobiliteit-en-gedrag", label: "Werkwijzer – Rijksoverheid" },
      ],
    },
  },
  {
    id: "mkba-mirt",
    name: "MKBA bij MIRT",
    domain: "mobiliteit",
    processStep: "beleidskeuze",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["data_gedreven"],
    description: "Deze werkwijzer beschrijft waar een maatschappelijke kosten-batenanalyse (MKBA) aan moet voldoen als onderbouwing bij een MIRT-verkenning.",
    linkText: "MKBA bij MIRT-verkenningen | RWSeconomie.nl",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "De Werkwijzer MKBA bij MIRT-verkenningen (versie 2018) beschrijft waaraan een maatschappelijke kosten-batenanalyse moet voldoen als onderbouwing voor een voorkeursbeslissing in het MIRT. Het opstellen van een MKBA is verplicht voor projecten in de MIRT-verkenningsfase.",
      organization: "Rijkswaterstaat / Ministerie van IenW",
      sources: [
        { url: "https://www.rwseconomie.nl/werkwijzers/mkba-bij-mirt-verkenningen", label: "MKBA bij MIRT-verkenningen – RWSeconomie.nl" },
      ],
    },
  },
  {
    id: "festa-v",
    name: "Festa V",
    domain: "mobiliteit",
    processStep: "observe",
    policyTrack: "uitvoering",
    crossCuttingThemes: ["data_gedreven", "evaluatie"],
    description: "The FESTA methodology for Field Operational Tests (FOTs) was developed in 2008 in the European FESTA project. Field Operational Tests are large-scale testing programs to evaluate ICT-based systems in real-life conditions.",
    linkText: "The FESTA Methodology - Connected Automated Driving",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "De FESTA-methodologie biedt een gestructureerd raamwerk voor Field Operational Tests (FOT's) voor intelligente transportsystemen en connected/automated driving. Het FESTA Handbook bevat richtlijnen voor onderzoeksopzet, dataverzameling, analyse en evaluatie van rijhulpsystemen in realistische verkeerssituaties.",
      organization: "FOT-Net / CARTRE / ARCADE (Europese Commissie)",
      sources: [
        { url: "https://www.connectedautomateddriving.eu/methodology/festa/", label: "FESTA Methodology – Connected Automated Driving" },
        { url: "https://wiki.fot-net.eu/index.php/FESTA_Handbook", label: "FESTA Handbook – FOT-Net WIKI" },
      ],
    },
  },
  {
    id: "fame-cem",
    name: "Common Evaluation Methodology (EU-CEM) (FAME handboek)",
    domain: "mobiliteit",
    processStep: "beleids_probleemanalyse",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["data_gedreven"],
    description: "The European Common Evaluation Methodology (EU-CEM) for CCAM, developed by the FAME project, provides guidance on how to evaluate connected and automated mobility systems.",
    linkText: "European Common Evaluation Methodology for CCAM - Connected Automated Driving",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "De EU-CEM voor CCAM, ontwikkeld binnen het Horizon Europe-project FAME, biedt richtlijnen voor evaluaties van connected, cooperative en geautomatiseerde mobiliteitsoplossingen. Bevordert consistentie in impactbeoordelingen door gestructureerde begeleiding en een gemeenschappelijk vocabulaire.",
      organization: "FAME / Europese Commissie",
      sources: [
        { url: "https://www.connectedautomateddriving.eu/methodology/common-evaluation-methodology/", label: "EU-CEM for CCAM – Connected Automated Driving" },
      ],
    },
  },
  {
    id: "gebiedsgericht-benutten",
    name: "Gebiedsgericht Benutten Plus",
    domain: "mobiliteit",
    processStep: "beleidsdoel",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: [],
    description: "GGB richt zich voornamelijk op het verbeteren van de doorstroming en de bereikbaarheid. De nieuwste versie van GGB wordt gecombineerd met Duurzaam Veilig.",
    linkText: "Gebiedsgericht Benutten plus Duurzaam Veilig : samenwerken aan veilige bereikbaarheid en bereikbare veiligheid - Rijkswaterstaat Publicatie Platform",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "Gebiedsgericht Benutten plus Duurzaam Veilig is een aanvulling op het Werkboek Gebiedsgericht Benutten van Rijkswaterstaat. Het legt de relatie tussen gebiedsgericht benutten en duurzaam veilig en helpt wegbeheerders om bij bereikbaarheidsvraagstukken expliciet rekening te houden met verkeersveiligheid.",
      organization: "Rijkswaterstaat",
      sources: [
        { url: "https://open.rijkswaterstaat.nl/@24354/gebiedsgericht-benutten-plus-duurzaam/", label: "GGB plus Duurzaam Veilig – Rijkswaterstaat" },
      ],
    },
  },
  {
    id: "richtlijn-multimodale-netwerkkaders",
    name: "Richtlijn en Leidraad voor multimodale netwerkkaders",
    domain: "mobiliteit",
    processStep: "beleidsdoel",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: [],
    description: "Een praktische methode voor mobiliteitsprofessionals om een integraal en toekomstgericht beeld van hun mobiliteitsnetwerk te maken.",
    linkText: "",
    link: "https://www.crow.nl/kennisproducten/richtlijn-en-leidraad-voor-multimodale-netwerkkaders/",
    remarks: "Kennisplatform CROW",
    aiDetaillering: {
      description: "CROW heeft de eerdere 'Leidraad Multimodale Netwerkkaders' (2023) opgesplitst in twee afzonderlijke publicaties: een Richtlijn (genormeerde inhoud) en een Leidraad (werkwijze met voorbeelden). Een multimodaal netwerkkader legt vast hoe auto, OV, fiets en voetganger het beste door netwerken geleid kunnen worden.",
      organization: "CROW",
      sources: [
        { url: "https://www.crow.nl/kennisproducten/richtlijn-en-leidraad-voor-multimodale-netwerkkaders/", label: "Richtlijn en Leidraad – CROW" },
        { url: "https://www.multimodalenetwerkkaders.nl/", label: "Multimodale Netwerkkaders – dedicated website" },
      ],
    },
  },
  {
    id: "asvv",
    name: "ASVV",
    domain: "mobiliteit",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "ASVV (Aanbevelingen voor Verkeersvoorzieningen Binnen de Bebouwde Kom). Verzamelplek voor alle kennis over verkeersvoorzieningen binnen de bebouwde kom.",
    linkText: "CROW | Wegontwerp en weginrichting",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "De ASVV (ASVV 2021) bundelt alle kennis over verkeersvoorzieningen binnen de bebouwde kom, stelt voetgangers en fietsers centraal en bevat interactieve hulpmiddelen zoals bewerkbare formules, dynamische grafieken en beslisbomen.",
      organization: "CROW",
      sources: [
        { url: "https://www.crow.nl/kennisproducten/asvv-2021/", label: "ASVV 2021 – CROW" },
      ],
    },
  },
  {
    id: "crow-ladder-smart-mobility",
    name: "CROW Ladder van Smart Mobility",
    domain: "mobiliteit",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["data_gedreven"],
    description: "Handreiking met overzicht van bestaande kennis op Smart Mobility en hoe je die kennis het best kunt gebruiken. In een aantal stappen leer je hoe je Smart Mobility het beste kunt inzetten.",
    linkText: "home - Ladder van Smart Mobility",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "De Ladder van Smart Mobility helpt overheden te bepalen hoe en op welk niveau zij Smart Mobility willen inzetten. Onderscheidt drie ambitieniveaus: basis op orde, toekomstbestendig en koploper, rond de hoofddoelen veiligheid, leefbaarheid en bereikbaarheid.",
      organization: "CROW / Ministerie van IenW",
      sources: [
        { url: "https://ladder.crow-smartmobility.nl/", label: "Ladder van Smart Mobility – CROW" },
        { url: "https://crow-smartmobility.nl/wp-content/uploads/2024/10/Publicatie-Ladder-van-Smart-Mobility.pdf", label: "Publicatie Ladder (PDF)" },
      ],
    },
  },
  {
    id: "crow-parkeernormen",
    name: "CROW Parkeernormen",
    domain: "mobiliteit",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: [],
    description: "",
    linkText: "",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "CROW publiceert parkeerkencijfers en richtlijnen die gemeenten helpen om parkeernormen vast te stellen voor verschillende functies (wonen, werken, winkels etc.). De publicatie 'Parkeernormen en duurzame gebiedsontwikkeling' biedt praktische kaders. De meest recente parkeerkencijfers zijn van 2024.",
      organization: "CROW",
      sources: [
        { url: "https://www.crow.nl/Onderwerpen/parkeren/", label: "Parkeren – CROW" },
        { url: "https://www.crow.nl/kennisproducten/parkeernormen-en-duurzame-gebiedsontwikkeling/", label: "Parkeernormen en duurzame gebiedsontwikkeling – CROW" },
      ],
    },
  },
  {
    id: "anders-reizen",
    name: "Anders Reizen",
    domain: "mobiliteit",
    processStep: "ambitie_visie_doel",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: [],
    description: "",
    linkText: "",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "Anders Reizen is een coalitie van meer dan 70 grote werkgevers in Nederland, goed voor meer dan 550.000 medewerkers. De gezamenlijke ambitie is om de CO₂-uitstoot van zakelijke mobiliteit per medewerker te halveren in 2030 ten opzichte van 2016. In 2024 had 55% van de leden het 2030-doel al behaald.",
      organization: "Coalitie Anders Reizen",
      sources: [
        { url: "https://www.andersreizen.nu/", label: "Anders Reizen – coalitie website" },
      ],
    },
  },
  {
    id: "regionale-mobiliteitsprogrammas",
    name: "Regionale mobiliteitsprogramma's",
    domain: "mobiliteit",
    processStep: "beleidsdoel",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: [],
    description: "De Regionale Mobiliteitsprogramma's (RMP's) zijn een instrument dat voortkomt uit het Klimaatakkoord. Hierin maken gemeenten, provincies en vervoerregio's afspraken over duurzame mobiliteit en CO₂-reductie.",
    linkText: "Regionale mobiliteitsprogramma's | VNG",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "RMP's zijn een instrument uit het Klimaatakkoord waarin gemeenten, provincies en regionale partners ambities formuleren voor verduurzaming. De aanpak volgt de 'trias mobilica': eerst reizen verminderen, dan verschuiven naar duurzamere vervoerwijzen, dan schoner maken.",
      organization: "VNG / IPO / Ministerie van IenW",
      sources: [
        { url: "https://vng.nl/artikelen/regionale-mobiliteitsprogrammas", label: "RMP's – VNG" },
      ],
    },
  },
  {
    id: "crow-handreiking-gebiedsontwikkeling-logistiek",
    name: "CROW Handreiking duurzame gebiedsontwikkeling en logistiek",
    domain: "mobiliteit",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: [],
    description: "",
    linkText: "",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "Deze handreiking helpt om logistiek vroegtijdig en integraal mee te nemen in het planproces van duurzame gebiedsontwikkelingen. Ontwikkeld door Movares en BRO in opdracht van Topsector Logistiek en CROW.",
      organization: "CROW en Topsector Logistiek",
      sources: [
        { url: "https://www.crow.nl/kennisproducten/handreiking-duurzame-gebiedsontwikkeling-en-logistiek/", label: "Handreiking – CROW" },
      ],
    },
  },
  {
    id: "crow-handreiking-energie-mobiliteitshubs",
    name: "CROW Handreiking energie en mobiliteitshubs",
    domain: "mobiliteit",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: [],
    description: "",
    linkText: "",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "De 'Handreiking Energie en mobiliteitshubs, op weg naar integrale hubs' biedt een eerste aanpak voor het realiseren van integrale hubs waar ruimte, mobiliteit en energie samenkomen. Gepubliceerd december 2022.",
      organization: "CROW-KpVV",
      sources: [
        { url: "https://www.crow.nl/kennisproducten/handreiking-energie-en-mobiliteitshubs-op-weg-naar-integrale-hubs/", label: "Handreiking energie en mobiliteitshubs – CROW" },
      ],
    },
  },
  {
    id: "crow-handreiking-duurzaam-gww",
    name: "CROW Handreiking aanpak duurzaam GWW",
    domain: "mobiliteit",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: [],
    description: "",
    linkText: "",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "De Handreiking Aanpak Duurzaam GWW helpt gemeenten om duurzaamheid structureel te integreren in de voorbereiding, aanbesteding en uitvoering van grond-, weg- en waterbouw-projecten. Ondersteund door vier instrumenten: Omgevingswijzer, Ambitieweb, CO₂-prestatieladder en DuboCalc.",
      organization: "CROW, in samenwerking met Royal HaskoningDHV",
      sources: [
        { url: "https://www.duurzaamgww.nl/documenten/79-handreiking-aanpak-duurzaam-gww-voor-gemeenten", label: "Handreiking – Duurzaam GWW" },
        { url: "https://www.pianoo.nl/nl/document/15743/handreiking-aanpak-duurzaam-gww-voor-gemeenten", label: "Handreiking – PIANOo" },
      ],
    },
  },
  {
    id: "omgevingsvisie",
    name: "Omgevingsvisie",
    domain: "mobiliteit",
    processStep: "ambitie_visie_doel",
    policyTrack: "domein_overstijgend",
    crossCuttingThemes: ["domein_overstijgend"],
    description: "",
    linkText: "",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "De omgevingsvisie is een van de zes kerninstrumenten van de Omgevingswet. Het is een samenhangende, strategische langetermijnvisie over de fysieke leefomgeving die gemeenten, provincies en het Rijk verplicht moeten opstellen. Vervangt sectorale plannen zoals structuurvisie, milieubeleidplan, verkeers- en vervoerplan en waterplan.",
      organization: "Informatiepunt Leefomgeving (IPLO), Rijksoverheid",
      sources: [
        { url: "https://iplo.nl/regelgeving/instrumenten/omgevingsvisie/", label: "Omgevingsvisie – IPLO" },
      ],
    },
  },
  {
    id: "leidraad-zero-emissie-logistiek",
    name: "Leidraad zero emissie logistiek",
    domain: "mobiliteit",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: [],
    description: "",
    linkText: "",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "Het programma 'Op weg naar ZES' (Zero Emissie Stadslogistiek) biedt gemeenten een stappenplan voor het invoeren van zero-emissiezones. Sinds 1 januari 2025 hebben de eerste 18 gemeenten een zero-emissiezone ingevoerd.",
      organization: "Rijksoverheid / Op weg naar ZES",
      sources: [
        { url: "https://www.opwegnaarzes.nl/", label: "Op weg naar ZES – centraal platform" },
      ],
    },
  },
  {
    id: "mobiliteitsmanagement-modal-shift",
    name: "Mobiliteitsmanagement gericht op modal shift",
    domain: "mobiliteit",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: [],
    description: "(input Paul vK hieronder opgenomen)",
    linkText: "",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "CROW biedt kennis over mobiliteitsmanagement: het organiseren van slim reizen, gericht op het stimuleren van alternatieven voor de auto (fiets, OV, P+R). CROW hanteert het STOMP-principe voor modal shift.",
      organization: "CROW-KpVV",
      sources: [
        { url: "https://www.crow.nl/thema-s/mobiliteit/mobiliteitsmanagement", label: "Mobiliteitsmanagement – CROW" },
      ],
    },
  },
  {
    id: "implementatie-micromobiliteit",
    name: "Implementatie micromobiliteit",
    domain: "mobiliteit",
    processStep: "act",
    policyTrack: "uitvoering",
    crossCuttingThemes: [],
    description: "Analyse van enkele praktische implicaties van micromobiliteit door te kijken naar zes regels die herhaaldelijk worden genoemd in verband met gedeelde micromobiliteit.",
    linkText: "",
    link: "https://horizoneuropencpportal.eu/sites/default/files/2025-07/polis-practical-implications-of-rules-and-requirements-for-shared-micromobility-2025.pdf",
    remarks: "POLIS Governance & Integration Working Group / March 2025 / Inspiratiedocument voor implementatie micromodaliteiten",
    aiDetaillering: {
      description: "Het POLIS-rapport 'Careful what you wish for' (maart 2025) onderzoekt uitdagingen van regelgeving rondom gedeelde micromobiliteit in Europese steden. Identificeert zes kerngebieden: snelheidslimieten, parkeren, helmvereisten, gebruikerseducatie, lokale werkgelegenheid en levenscyclusanalyse.",
      organization: "POLIS Network",
      sources: [
        { url: "https://www.polisnetwork.eu/document/careful-what-you-wish-for-practical-implications-of-rules-and-requirements-for-shared-micromobility/", label: "Careful what you wish for – POLIS" },
      ],
    },
  },
  {
    id: "selectieve-toegang-en-doseren",
    name: "Selectieve toegang en doseren",
    domain: "mobiliteit",
    processStep: "decide",
    policyTrack: "uitvoering",
    crossCuttingThemes: [],
    description: "Een praktische methode opgedeeld in processtappen om te bepalen of een selectief toegangs- of doseersysteem het geschikte instrument is.",
    linkText: "",
    link: "https://www.crow.nl/kennisproducten/selectieve-toegang-en-doseren/",
    remarks: "Kennisplatform CROW\nISBN: 978 90 6628 522 4\nVerschijningsdatum: 30-01-2009",
    aiDetaillering: {
      description: "Selectieve toegang is een verkeersmanagement-concept waarbij gemeenten bepaalde zones afsluiten of beperkt toegankelijk maken. Dit omvat structurele maatregelen (voetgangerszones, milieuzones) en dynamische maatregelen (kentekenherkenning, geofencing).",
      organization: "CROW",
      sources: [
        { url: "https://www.crow.nl/kennisproducten/selectieve-toegang-en-doseren/", label: "Selectieve toegang en doseren – CROW" },
        { url: "https://www.nm-magazine.nl/artikelen/de-mogelijkheden-van-selectieve-toegang-tot-de-stad/", label: "Selectieve toegang tot de stad – NM Magazine" },
      ],
    },
  },
  {
    id: "uvar-overzicht",
    name: "Urban Vehicle Access Regulation (UVAR)",
    domain: "mobiliteit",
    processStep: "orient",
    policyTrack: "uitvoering",
    crossCuttingThemes: [],
    description: "Urban Vehicle Access Regulations (UVAR) - UVARbox. The EU-funded UVAR Box Project has the ambitious aim to digitise more than 700 urban vehicle access regulations.",
    linkText: "",
    link: "https://uvarbox.eu/library/",
    remarks: "is dit voor de gemeente relevant of meer voor de dienstverleners die het product aanbieden?",
    aiDetaillering: {
      description: "UVARbox is een EU-gefinancierd project dat steden helpt om gegevens over Urban Vehicle Access Regulations te digitaliseren in het DATEX-II-formaat. Door UVAR-gegevens beschikbaar te maken in navigatietools wordt de naleving verhoogd.",
      organization: "Europese Commissie / DG MOVE",
      sources: [
        { url: "https://uvarbox.eu/about/", label: "About – UVAR Box" },
        { url: "https://urbanaccessregulations.eu/", label: "Urban Access Regulations in Europe" },
      ],
    },
  },
  {
    id: "uvar-implementatie-toolkit",
    name: "UVAR implementatie toolkit",
    domain: "mobiliteit",
    processStep: "act",
    policyTrack: "uitvoering",
    crossCuttingThemes: [],
    description: "Urban Vehicle Access Regulations (UVAR) - ReVeAL - a toolkit to help implement good practice UVARs.",
    linkText: "",
    link: "https://civitas-reveal.eu",
    remarks: "The REVEAL project - Regulating Vehicle Access for Improved Liveability",
    aiDetaillering: {
      description: "De CIVITAS ReVeAL-toolkit ondersteunt steden bij het implementeren van UVAR's met 33 'bouwstenen' en een beslissingsondersteuningstool die via 14 vragen een geprioriteerde lijst van relevante maatregelen voorstelt.",
      organization: "CIVITAS ReVeAL (EU Horizon 2020)",
      sources: [
        { url: "https://civitas-reveal.eu/tool/", label: "ReVeAL UVAR Toolkit" },
        { url: "https://civitas.eu/news/reveal-toolkit-to-develop-good-practice-uvars-is-online", label: "ReVeAL toolkit – CIVITAS" },
      ],
    },
  },
  {
    id: "sutz",
    name: "Smart Urban Traffic Zones (SUTZ)",
    domain: "mobiliteit",
    processStep: "orient",
    policyTrack: "uitvoering",
    crossCuttingThemes: ["data_gedreven"],
    description: "Smart Urban Traffic Zones (SUTZ). Guide for more efficient Traffic and a more attractive and sustainable City.",
    linkText: "",
    link: "https://closer.lindholmen.se/sites/default/files/2025-05/250313_Guide%20for%20cities%20rapport.pdf",
    remarks: "CLOSER",
    aiDetaillering: {
      description: "Smart Urban Traffic Zones (SUTZ) ontwikkelt slimme zones op basis van geofencing en sensordata om verkeer in steden flexibeler en veiliger te beheren. Pilotprojecten in Stockholm en Götenburg; levert een handleiding voor gemeenten.",
      organization: "CLOSER (Lindholmen Science Park, Zweden) / Vinnova",
      sources: [
        { url: "https://closer.lindholmen.se/en/project/smart-urban-traffic-zones", label: "SUTZ – CLOSER" },
      ],
    },
  },
  {
    id: "verkeersmanagement",
    name: "Verkeersmanagement",
    domain: "mobiliteit",
    processStep: "act",
    policyTrack: "uitvoering",
    crossCuttingThemes: [],
    description: "",
    linkText: "",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "CROW biedt een Kennismodule Verkeersmanagement en een vernieuwd digitaal Handboek Verkeersmanagement met actuele kennis op strategisch, tactisch en operationeel niveau.",
      organization: "CROW",
      sources: [
        { url: "https://www.crow.nl/kennisproducten/km-verkeersmanagement/", label: "Kennismodule Verkeersmanagement – CROW" },
      ],
    },
  },
  {
    id: "curbside-management",
    name: "Curbside Management",
    domain: "mobiliteit",
    processStep: "act",
    policyTrack: "uitvoering",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "Curb Appeal - Curbside management strategies for improving transit reliability",
    linkText: "",
    link: "https://horizoneuropencpportal.eu/sites/default/files/2024-05/polis-dynamic-curbside-management-report-2023.pdf",
    remarks: "POLIS March 2023 / handleiding gericht op inspiratie en implementatie",
    aiDetaillering: {
      description: "Het POLIS-rapport (maart 2023) onderzoekt hoe Europese steden de beperkte ruimte aan de stoeprand dynamisch kunnen beheren voor toenemende eisen van personen-, goederen- en dienstenvervoer.",
      organization: "POLIS Network",
      sources: [
        { url: "https://www.polisnetwork.eu/news/polis-publishes-new-report-on-dynamic-curbside-management/", label: "Dynamic Curbside Management – POLIS" },
      ],
    },
  },
  {
    id: "kennismodule-parkeren",
    name: "Kennismodule Parkeren",
    domain: "mobiliteit",
    processStep: "act",
    policyTrack: "uitvoering",
    crossCuttingThemes: [],
    description: "Online kennismodule dat de meest actuele richtlijnen en kennis biedt over parkeren, inclusief kennis over onder andere vergunningverlening, tarieven en handhaving.",
    linkText: "",
    link: "https://www.crow.nl/kennisproducten/km-parkeren/",
    remarks: "Kennisplatform CROW",
    aiDetaillering: {
      description: "De CROW Kennismodule Parkeren bundelt de meest actuele kennis over parkeren, van parkeernormen en fietsparkeren tot laadinfrastructuur. Onderdeel is het Handboek Parkeren met een compleet overzicht van beleid tot uitvoering.",
      organization: "CROW",
      sources: [
        { url: "https://www.crow.nl/kennisproducten/km-parkeren/", label: "Kennismodule Parkeren – CROW" },
        { url: "https://www.kennisnetwerkparkeren.nl/", label: "Kennisnetwerk Parkeren" },
      ],
    },
  },
  {
    id: "leidraad-ze-logistiek-polis",
    name: "Leidraad zero emissie logistiek (POLIS/ALICE)",
    domain: "mobiliteit",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: [],
    description: "Cities-Regions and Companies working together - Guide for advancing towards zero-emission urban logistics by 2030",
    linkText: "",
    link: "https://horizoneuropencpportal.eu/sites/default/files/2023-09/alice-polis-guide-zero-emission-urban-logistics-2021_0.pdf",
    remarks: "POLIS and ALICE-ETP",
    aiDetaillering: {
      description: "De gids van POLIS en ALICE (december 2021) biedt een raamwerk voor samenwerking tussen steden en bedrijven richting emissievrije stadslogistiek in 2030. Behandelt vijf interventiegebieden: bestuur, schone vloten, datadeling, consumentenbetrokkenheid en ruimtelijke oplossingen.",
      organization: "POLIS Network / ALICE",
      sources: [
        { url: "https://www.polisnetwork.eu/news/polis-and-alice-launch-joint-guide-for-advancing-together-towards-zero-emission-urban-logistics-by-2030/", label: "Zero-Emission Urban Logistics guide – POLIS/ALICE" },
      ],
    },
  },
  {
    id: "itf-road-safety",
    name: "ITF Road Safety in Cities",
    domain: "mobiliteit",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "Road Safety in Cities: Street Design and Traffic Management Solutions",
    linkText: "",
    link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2022/02/road-safety-in-cities_984a630c/140cdf12-en.pdf",
    remarks: "OECD Publishing, Paris, No. 99",
    aiDetaillering: {
      description: "De ITF/OECD-publicatie (2022) presenteert bewezen maatregelen om verkeersdoden in steden te verminderen, met focus op straatontwerp, snelheidsmanagement en veilige infrastructuur voor voetgangers en fietsers. Geïllustreerd met voorbeelden uit het ITF Safer City Streets-netwerk.",
      organization: "ITF / OECD",
      sources: [
        { url: "https://www.itf-oecd.org/road-safety-cities-street-design-management", label: "Road Safety in Cities – ITF" },
        { url: "https://www.itf-oecd.org/sites/default/files/docs/road-safety-cities-street-design-traffic-management.pdf", label: "Road Safety in Cities (PDF)" },
      ],
    },
  },
  {
    id: "road-asset-management",
    name: "Road Asset Management (ERF)",
    domain: "mobiliteit",
    processStep: "act",
    policyTrack: "uitvoering",
    crossCuttingThemes: [],
    description: "Position paper, pleidooi voor strategische omgang met beheer en onderhoud van weginfra, inclusief stappenplan hoe te komen tot een optimale strategie.",
    linkText: "",
    link: "https://erf.be/wp-content/uploads/2018/07/Road-Asset-Management-for-web-site.pdf",
    remarks: "ERF (European Union Road Federation)",
    aiDetaillering: {
      description: "De ERF publiceerde in maart 2013 het manifest 'Road Asset Management - Keeping Europe Moving'. Het Europese wegennetwerk omvat 5,5 miljoen km met een geschatte waarde van meer dan 8.000 miljard euro.",
      organization: "ERF - European Union Road Federation",
      sources: [
        { url: "https://erf.be/publications/road-asset-management/", label: "Road Asset Management – ERF" },
      ],
    },
  },
  {
    id: "smart-mobility-its-europa",
    name: "Smart Mobility, ITS en Europa",
    domain: "mobiliteit",
    processStep: "beleidsdoel",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["data_gedreven"],
    description: "Inzicht in hoe 'Europa' is georganiseerd op het gebied van Smart Mobility en Intelligent Transport Systems (ITS). Omdat de invloed van Europa op het (decentrale) mobiliteitsbeleid en op het speelveld steeds groter wordt.",
    linkText: "",
    link: "https://www.crow.nl/kennisproducten/smart-mobility-en-europa/",
    remarks: "CROW-KpVV",
    aiDetaillering: {
      description: "De CROW-KpVV publicatie behandelt de groeiende Europese invloed op mobiliteitsbeleid, de verschuiving van focus op standaardisatie naar duurzaamheid en verkeersveiligheid, en biedt handvatten via de 'Ladder van Smart Mobility' om het ambitieniveau van gemeenten te bepalen.",
      organization: "CROW-KpVV",
      sources: [
        { url: "https://crow-smartmobility.nl/2025/11/06/de-impact-van-europa-op-smart-mobility-en-its/", label: "Impact van Europa op Smart Mobility – CROW" },
      ],
    },
  },
  {
    id: "regulation-rtti",
    name: "Regulation on Data provision for Real Time Traffic Information",
    domain: "mobiliteit",
    processStep: "beleidsdoel",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["data_gedreven"],
    description: "Data provision for Real-Time Traffic Information is regulated by the European Commission under the Intelligent Transport Systems (ITS) Directive.",
    linkText: "Directive - 2010/40 - EN - EUR-Lex",
    link: "",
    remarks: "also known as the ITS Directive",
    aiDetaillering: {
      description: "De ITS-richtlijn 2010/40/EU vormt het Europese kader voor Intelligente Transportsystemen. Gedelegeerde Verordening (EU) 2022/670 verplicht lidstaten om via National Access Points statische en dynamische verkeersdata beschikbaar te stellen in DATEX-II-formaat.",
      organization: "Europese Commissie / DG MOVE",
      sources: [
        { url: "https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32010L0040", label: "Directive 2010/40/EU – EUR-Lex" },
        { url: "https://eur-lex.europa.eu/eli/reg_del/2022/670/oj/eng", label: "Delegated Regulation 2022/670 – EUR-Lex" },
      ],
    },
  },
  {
    id: "mens-achter-reisgedrag",
    name: "De mens achter het reisgedrag",
    domain: "mobiliteit",
    processStep: "probleemanalyse",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["data_gedreven"],
    description: "Persona's en segmenten uit het Mobiliteitspanel Nederland voor een doelgroepgerichte verduurzamingsaanpak",
    linkText: "De mens achter het reisgedrag | Kennisinstituut voor Mobiliteitsbeleid",
    link: "",
    remarks: "KiM rapport",
    aiDetaillering: {
      description: "De KiM-publicatie (februari 2026) presenteert tien persona's gebaseerd op MPN-data die archetypische reizigers vertegenwoordigen. Helpt beleidsmakers om verschillende bevolkingssegmenten en hun reisgedrag te begrijpen voor effectiever duurzaam mobiliteitsbeleid.",
      organization: "Kennisinstituut voor Mobiliteitsbeleid (KiM)",
      sources: [
        { url: "https://www.kimnet.nl/documenten/2026/02/12/de-mens-achter-het-reisgedrag", label: "De mens achter het reisgedrag – KiM" },
      ],
    },
  },
  {
    id: "wegbeheer",
    name: "Wegbeheer",
    domain: "mobiliteit",
    processStep: "act",
    policyTrack: "uitvoering",
    crossCuttingThemes: [],
    description: "",
    linkText: "",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "CROW biedt de Kennismodule Wegbeheer en -inspecties, die alle aspecten van wegbeheer omvat. De CROW-systematiek Wegbeheer (publicatie 147) is de landelijke standaard inclusief beoordelingsmethoden en onderhoudsplanning.",
      organization: "CROW",
      sources: [
        { url: "https://www.crow.nl/kennisproducten/kennismodule-wegbeheer-en-inspecties/", label: "Kennismodule Wegbeheer – CROW" },
      ],
    },
  },
  {
    id: "verkeersveiligheid",
    name: "Verkeersveiligheid",
    domain: "mobiliteit",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: [],
    description: "",
    linkText: "",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "CROW biedt een Kennismodule Verkeersveiligheid en Toegankelijkheid met meer dan 10 publicaties en tools. De Nederlandse aanpak is gebaseerd op de drie E's (Engineering, Education, Enforcement) en het Strategisch Plan Verkeersveiligheid 2030.",
      organization: "CROW",
      sources: [
        { url: "https://www.crow.nl/Onderwerpen/verkeersveiligheid/", label: "Verkeersveiligheid – CROW" },
      ],
    },
  },
  {
    id: "data-en-modellering",
    name: "Data en modellering",
    domain: "mobiliteit",
    processStep: "beleids_probleemanalyse",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["data_gedreven"],
    description: "",
    linkText: "",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "CROW biedt de Kennismodule Onderzoek en Modellen met online toegang tot publicaties op het gebied van verkeersonderzoek en verkeersmodellen.",
      organization: "CROW",
      sources: [
        { url: "https://www.crow.nl/online-kennis-tools/kennismodule-onderzoek-en-modellen", label: "Kennismodule Onderzoek en Modellen – CROW" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════
  // GEZONDHEID & WELZIJN
  // ═══════════════════════════════════════════════════════════

  {
    id: "bewegingsbevorderende-wijken",
    name: "Bewegingsbevorderende en veilige wijken",
    domain: "gezondheid",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "In veel gemeenten in Nederland ontstaan nieuwe wijken of worden oude wijken opnieuw ingericht. De inrichting van de wijk heeft in belangrijke mate invloed op de gezondheid en het gezondheidsgedrag van de inwoners. Door het RIVM is een handleiding ontwikkeld en getoetst waarmee gemeenten een bewegingsbevorderende en veilige inrichting van wijken kunnen realiseren. De handleiding geeft stapsgewijs aan hoe een bewegingsbevorderende en veilige woonwijk kan ontstaan en geeft 50 aanbevelingen.",
    linkText: "Beweging en veiligheid in de wijk - Handleiding 'bewegingsbevorderende en veilige wijken' | RIVM",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "De RIVM-handleiding biedt gemeenten een stapsgewijze aanpak voor het ontwerpen van wijken die fysieke activiteit en veiligheid bevorderen. Bevat 50 aanbevelingen voor de inrichting van wijken, ontwikkeld en getest in de gemeente Voorhout.",
      organization: "RIVM",
      sources: [
        { url: "https://www.rivm.nl/publicaties/beweging-en-veiligheid-in-wijk-handleiding-bewegingsbevorderende-en-veilige-wijken", label: "RIVM publicatie – Beweging en veiligheid in de wijk" },
      ],
    },
  },
  {
    id: "mobility-mapping",
    name: "Mobility Mapping",
    domain: "gezondheid",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["participatie"],
    description: "Mobility mapping is een methodiek ontwikkeld door Kevin Campbell (Family Finding/Family Seeing). De ouder of het kind tekent zijn of haar leven op een groot papier en wordt hierin geleid door vragen van de contextbegeleider. De vragen richten zich enkel op positieve herinneringen en in het bijzonder op wie van betekenis was of is voor de cliënt.",
    linkText: "Mobility Mapping | Opgroeien in veiligheid",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "Mobility Mapping is een methodiek van Kevin Campbell (Family Finding) waarmee jongeren of ouders hun leven tekenen om het netwerk van betekenisvolle personen in kaart te brengen. Gericht op positieve herinneringen en het activeren van familienetwerken.",
      organization: "Family Finding / Kevin Campbell",
      sources: [
        { url: "https://www.opgroeieninveiligheid.be/de-praktijk/methodieken/mobility-mapping", label: "Mobility Mapping – Opgroeien in Veiligheid" },
      ],
    },
  },
  {
    id: "groene-baten-planner",
    name: "Groene Baten Planner",
    domain: "gezondheid",
    processStep: "oplossingsrichtingen",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["data_gedreven"],
    description: "De Groene Baten Planner is een rekenmodel van het RIVM dat de verwachte maatschappelijke baten van het toevoegen van groen in een gebied berekent. Het model rekent dit door op drie verschillende indicatoren. Met de nieuwe demo kan iedereen die werkt aan stedelijke en ruimtelijke ontwikkeling de gezondheidsvoordelen van meer groen in de wijk laten berekenen.",
    linkText: "Groene Baten Planner | Atlas Natuurlijk Kapitaal",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "De Groene Baten Planner is een RIVM-instrument dat de maatschappelijke waarde van groen uitdrukt in getallen: wat groen oplevert voor biodiversiteit, gezondheid, leefcomfort en woningwaarde. Beschikbaar via de Atlas Natuurlijk Kapitaal.",
      organization: "RIVM / Atlas Natuurlijk Kapitaal",
      sources: [
        { url: "https://www.atlasnatuurlijkkapitaal.nl/groene-baten-planner", label: "Groene Baten Planner – Atlas Natuurlijk Kapitaal" },
      ],
    },
  },
  {
    id: "go-methode",
    name: "GO! Methode",
    domain: "gezondheid",
    processStep: "probleemanalyse",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["data_gedreven", "participatie"],
    description: "Gemeenten die integraal aan een gezonde leefomgeving willen werken, kunnen met behulp van de GO! methode de leefomgeving in kaart brengen en onderzoeken hoe deze gezonder te maken is. Er zitten zes stappen in de GO! methode, die de hele weg van beleidsanalyse, dataverzameling, burgerparticipatie, handelingsperspectieven, implementatie en monitoring meenemen.",
    linkText: "Data dashboard GO! methode | Data- en Kennishub Gezond Stedelijk Leven",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "De GO! methode is een gestructureerde aanpak in zes stappen waarmee gemeenten integraal aan een gezonde leefomgeving kunnen werken: beleidsanalyse, dataverzameling, burgerparticipatie, actieperspectief, uitvoering en monitoring. Het bijbehorende datadashboard (GO!-roos) is geautomatiseerd.",
      organization: "Data- en Kennishub Gezond Stedelijk Leven / RIVM",
      sources: [
        { url: "https://gezondstedelijklevenhub.nl/tools/data-dashboard-go!-methode.html", label: "GO! methode – DKH GSL" },
      ],
    },
  },
  {
    id: "toolkit-positieve-gezondheid",
    name: "Toolkit 'Positieve Gezondheid'",
    domain: "gezondheid",
    processStep: "oplossingsrichtingen",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["participatie"],
    description: "Met partners uit het sociale en fysieke domein én met bewoners ga je in gesprek. Samen kijk je naar belangen, behoeften en mogelijkheden volgens de zes dimensies. Aan de hand van een kaart van de wijk bekijk je hoe de woon-leefomgeving anders ingericht kan worden. Het resultaat is een ruimtelijke visie met concrete voorstellen.",
    linkText: "Positieve Gezondheid in woon- en leefomgeving - Institute for Positive Health",
    link: "https://www.louisbolk.nl/projecten/positieve-gezondheid-in-woon-en-leefomgeving",
    remarks: "Positieve Gezondheid is de laatste jaren HET concept geworden in het sociale domein, ontwikkeld door Machteld Huber.",
    aiDetaillering: {
      description: "Positieve Gezondheid is een concept van Machteld Huber dat niet de ziekte maar de mens centraal stelt, met een spinnenweb met zes dimensies. De toolkit bevat gesprekstools voor volwassenen, jongeren en kinderen.",
      organization: "Institute for Positive Health (iPH)",
      sources: [
        { url: "https://www.iph.nl/en/positive-health/what-is-it/", label: "What is Positive Health? – iPH" },
        { url: "https://mijnpositievegezondheid.nl/", label: "Mijn Positieve Gezondheid – spinnenweb tool" },
      ],
    },
  },
  {
    id: "loket-gezond-leven",
    name: "Loket Gezond Leven",
    domain: "gezondheid",
    processStep: "oplossingsrichtingen",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: [],
    description: "Niet zozeer een methodiek maar links naar diverse tools en instrumenten (technieken bij beleidsontwikkeling)",
    linkText: "Gezonde leefomgeving | Loketgezondleven.nl",
    link: "https://www.gezondeleefomgeving.nl/",
    remarks: "",
    aiDetaillering: {
      description: "Online platform van het RIVM waar professionals informatie, erkende interventies en praktische instrumenten vinden voor gezondheidsbevordering en preventie. Biedt o.a. de Interventiedatabase, wijkgezondheidsprofiel en de Gids Gezonde Leefomgeving.",
      organization: "RIVM",
      sources: [
        { url: "https://www.loketgezondleven.nl/aanpak-gezonde-gemeente/instrumenten", label: "Instrumenten – Loket Gezond Leven" },
        { url: "https://www.gezondeleefomgeving.nl", label: "Gids Gezonde Leefomgeving" },
      ],
    },
  },
  {
    id: "werkboek-7-werkvormen",
    name: "Werkboek met 7 werkvormen en instrumenten",
    domain: "gezondheid",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["participatie"],
    description: "",
    linkText: "",
    link: "https://www.gezondin.nu/wp-content/uploads/2020/02/Inspiratie-en-werkboek-gezondheid-en-ruimte.pdf",
    remarks: "",
    aiDetaillering: {
      description: "Het 'Inspiratie- en werkboek Gezondheid en Ruimte' bevat 7 werkvormen (A t/m G) om de verbinding te leggen tussen gezondheid en de fysieke leefomgeving, specifiek gericht op wijken met een lage sociaaleconomische status.",
      organization: "Pharos en Platform31, via het programma GezondIn",
      sources: [
        { url: "https://www.gezondin.nu/kennisbank/inspiratie-en-werkboek-gezondheid-en-ruimte/", label: "Werkboek – GezondIn" },
      ],
    },
  },
  {
    id: "theory-of-change",
    name: "Theory of Change (TOC)",
    domain: "gezondheid",
    processStep: "ambitie_visie_doel",
    policyTrack: "domein_overstijgend",
    crossCuttingThemes: ["domein_overstijgend", "evaluatie"],
    description: "Model dat de verandering beschrijft die je nastreeft en hoe de verandering kan worden bereikt. Een resultaatgerichte aanpak die terugredeneert van een gewenst langetermijndoel naar de benodigde stappen, activiteiten en middelen. Het maakt aannames expliciet, verbindt acties logisch aan impact en dient als dynamisch instrument voor planning, monitoring en bijsturing.\nProbleemanalyse\nDoelen beoogde impact\nOutput & Outcome\nInput & activiteiten\nRisico's, aannames, voorwaarden\n(Prestatie)indicatoren",
    linkText: "",
    link: "",
    remarks: "Belangrijk element is dat niet alleen een bepaalde output wordt beoogd maar vooral outcome in targetgroep + indicatoren om succes daarop te bepalen + pathways die succes kunnen verklaren.",
    aiDetaillering: {
      description: "De Theory of Change geeft inzicht in hoe activiteiten leiden tot verwachte resultaten en hoe deze bijdragen aan de gedeelde, grote ambitie. Het wordt participatief ontwikkeld (max. 20 deelnemers) en is bijzonder geschikt als discussiedocument en visueel hulpmiddel bij interne communicatie.",
      organization: "Breed toegepast; in NL o.a. Het PON & Telos",
      sources: [
        { url: "https://hetpon-telos.nl/methodieken/theory-of-change/", label: "Theory of Change – Het PON & Telos" },
      ],
    },
  },
  {
    id: "behaviour-change-models",
    name: "Behaviour Change Models",
    domain: "gezondheid",
    processStep: "ambitie_visie_doel",
    policyTrack: "domein_overstijgend",
    crossCuttingThemes: ["domein_overstijgend"],
    description: "Diverse modellen van gedragsverandering, Mooi overzicht op loketgezondleven.nl",
    linkText: "",
    link: "https://www.loketgezondleven.nl/gezondheidsthema/bevorderen-van-gezond-gedrag-hoe-doet-u-dat/greep-uit-de-theorie",
    remarks: "maw: gedragsverandering komt ook niet vanzelf tot stand als de leefomgeving verbetert.",
    aiDetaillering: {
      description: "Het Loket Gezond Leven (RIVM) beschrijft 11 modellen in drie categorieën: modellen die gedrag verklaren (o.a. Theory of Planned Behavior, ASE-model), modellen voor gedragsverandering (o.a. Stages of Change, Behaviour Change Wheel/COM-B), en modellen die omgevingsfactoren in kaart brengen (ANGELO-framework).",
      organization: "RIVM / Loket Gezond Leven",
      sources: [
        { url: "https://www.loketgezondleven.nl/gezondheidsthema/bevorderen-van-gezond-gedrag-hoe-doet-u-dat/greep-uit-de-theorie", label: "Greep uit de theorie – Loket Gezond Leven" },
      ],
    },
  },
  {
    id: "participatieve-beleidsontwikkeling",
    name: "Participatieve beleidsontwikkeling",
    domain: "gezondheid",
    processStep: "participatie",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["participatie"],
    description: "",
    linkText: "",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "Benadering waarbij burgers, stakeholders, deskundigen en/of politici actief worden betrokken bij het beleidsdebat en besluitvorming. De VNG biedt een handreiking voor gemeenten om participatie wettelijk te verankeren en praktisch vorm te geven.",
      organization: "VNG / Rijksoverheid",
      sources: [
        { url: "https://vng.nl/sites/default/files/2021-05/vng-handreiking-participatie-berenschot_def2505.pdf", label: "Handreiking Participatie – VNG/Berenschot" },
      ],
    },
  },
  {
    id: "cpted",
    name: "CPTED / Veilig Ontwerp & Beheer (VOB)",
    domain: "gezondheid",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "Het doel van CPTED is om een specifiek gebied (stad, dorp, buurt, gebouw, ruimte) zodanig te plannen, ontwerpen, gebruiken en beheren dat gebruikers zich er veilig voelen en er minder incidenten, zoals criminaliteit, geweld en overlast voorkomen. CPTED is een multidisciplinair proces waardoor ongewenst gedrag geen kans krijgt en gewenst gedrag juist gestimuleerd wordt.",
    linkText: "",
    link: "https://www.svob.nl/veilig-ontwerp-beheer/",
    remarks: "",
    aiDetaillering: {
      description: "Crime Prevention Through Environmental Design (CPTED), in Nederland Veilig Ontwerp en Beheer (VOB), beperkt criminaliteit en onveiligheidsgevoel door slim ontwerp en beheer van de gebouwde omgeving. Werkt met de vier vuistregels ZETA: Zichtbaarheid, Eigenaarschap, Toegankelijkheid en Aantrekkelijkheid.",
      organization: "Stichting Veilig Ontwerp en Beheer (SVOB)",
      sources: [
        { url: "https://www.svob.nl/veilig-ontwerp-beheer/", label: "Veilig Ontwerp en Beheer – SVOB" },
        { url: "https://www.svob.nl/veilig-ontwerp-beheer/nieuw-handboek-veilig-ontwerp-en-beheer/", label: "Handboek VOB – SVOB" },
      ],
    },
  },
  {
    id: "liso",
    name: "LISO – Leernetwerken Sociaal Domein",
    domain: "gezondheid",
    processStep: "implementatie",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["participatie"],
    description: "Leernetwerken in het Sociaal Domein",
    linkText: "",
    link: "https://www.tno.nl/nl/newsroom/2025/01/nieuw-handboek-leernetwerken/",
    remarks: "",
    aiDetaillering: {
      description: "LISO is een wetenschappelijk onderbouwde werkwijze van TNO voor het opzetten van leernetwerken waarmee complexe vraagstukken in het sociaal domein gezamenlijk worden aangepakt. Het handboek biedt een stappenplan en beschrijft werkzame elementen.",
      organization: "TNO",
      sources: [
        { url: "https://leernetwerken.tno.nl/tips-tools/handboek/", label: "LISO Handboek – TNO" },
        { url: "https://leernetwerken.tno.nl/", label: "Leernetwerken – TNO" },
      ],
    },
  },
  {
    id: "sociale-veiligheid",
    name: "Sociale veiligheid",
    domain: "gezondheid",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "verplaatst naar gezondheid en welzijn",
    linkText: "Sociale veiligheid in de openbare ruimte deel 3 in de reeks Hoe specificeer je dat?",
    link: "https://www.dsp-groep.nl/wp-content/uploads/2025/04/18PvS-CROW_Sociale-veiligheid_web-2014.pdf",
    remarks: "Kennisplatform CROW",
    aiDetaillering: {
      description: "De CROW-publicatie 'Sociale veiligheid in de openbare ruimte' biedt een strategische aanpak met een zevenstapenproces en de ZETA-richtlijnen (Zichtbaarheid, Eenduidigheid, Toegankelijkheid, Aantrekkelijkheid). Sluit aan bij het CPTED-framework.",
      organization: "CROW",
      sources: [
        { url: "https://crow.nl/publicaties/sociale-veiligheid-in-de-openbare-ruimte", label: "Sociale veiligheid – CROW" },
      ],
    },
  },
  {
    id: "inclusiviteit",
    name: "Inclusiviteit",
    domain: "gezondheid",
    processStep: "probleemanalyse",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["participatie", "data_gedreven"],
    description: "(via Paul - in ontwikkeling?)\nCollecting Real-World, Pedestrian Mobility Data for Inclusive Urban Planning",
    linkText: "",
    link: "",
    remarks: "AMS Institute (onder DRO | DMI)",
    aiDetaillering: {
      description: "Het AMS Institute publiceerde een policy paper over het ethisch en effectief verzamelen van voetgangersmobiliteitsdata van ondervertegenwoordigde groepen. De methodiek combineert GPS-tracking, in-app enquêtes en interviews, co-designed met kwetsbare gebruikers.",
      organization: "AMS Institute, auteurs: Isabelle Snaauw en Achilleas Psyllidis (TU Delft)",
      sources: [
        { url: "https://openresearch.amsterdam/en/page/128542/collecting-real-world-pedestrian-mobility-data-for-inclusive-urban", label: "Pedestrian Mobility Data – AMS Institute / OpenResearch" },
      ],
    },
  },
];

// ============================================================
// Labels & display helpers
// ============================================================

export const domainLabels: Record<Domain, string> = {
  mobiliteit: "Mobiliteit",
  gezondheid: "Gezondheid & Welzijn",
  algemeen: "Algemeen",
};

export const domainColors: Record<Domain, string> = {
  mobiliteit: "bg-[#7ECBC0] text-[#004B87]",
  gezondheid: "bg-[#5CB85C] text-white",
  algemeen: "bg-[#004B87] text-white",
};

export const domainBorderColors: Record<Domain, string> = {
  mobiliteit: "border-[#7ECBC0]",
  gezondheid: "border-[#5CB85C]",
  algemeen: "border-[#004B87]",
};

export const domainBgLight: Record<Domain, string> = {
  mobiliteit: "bg-[#E6F5F3]",
  gezondheid: "bg-[#E8F5E9]",
  algemeen: "bg-[#E1EEF6]",
};

export const policyTrackLabels: Record<PolicyTrack, string> = {
  domein_overstijgend: "Domein Overstijgend",
  beleidsontwikkeling: "Beleidsontwikkeling",
  beleidsdoorwerking: "Beleidsdoorwerking",
  uitvoering: "Uitvoering",
  terugkoppeling: "Terugkoppeling",
};

export const policyTrackColors: Record<PolicyTrack, string> = {
  domein_overstijgend: "bg-[#F2A900] text-white",
  beleidsontwikkeling: "bg-[#004B87] text-white",
  beleidsdoorwerking: "bg-[#4A90C4] text-white",
  uitvoering: "bg-[#8C8C8C] text-white",
  terugkoppeling: "bg-[#5CB85C] text-white",
};

export const processStepLabels: Record<ProcessStep, string> = {
  ambitie_visie_doel: "Ambitie / Visie / Doel",
  probleemanalyse: "Probleemanalyse",
  oplossingsrichtingen: "Oplossingsrichtingen",
  beleidskeuze: "Beleidskeuze",
  beleidsdoel: "Beleidsdoel",
  beleids_probleemanalyse: "Beleidskeuze Probleemanalyse",
  interventies: "Interventies",
  implementatie: "Implementatie",
  observe: "Observe",
  orient: "Orient",
  decide: "Decide",
  act: "Act",
  reflecteren_leren: "Reflecteren en Leren (M&E)",
  participatie: "Participatie",
  openbare_ruimte: "Openbare Ruimte",
};

export const crossCuttingLabels: Record<CrossCuttingTheme, string> = {
  domein_overstijgend: "Domein Overstijgend",
  openbare_ruimte: "Openbare Ruimte",
  participatie: "Participatie & Stakeholders",
  data_gedreven: "Data-gedreven",
  evaluatie: "Evaluatie & Monitoring",
};
