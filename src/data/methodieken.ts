// ============================================================
// Types
// ============================================================

export type Domain =
  | "mobiliteit"
  | "gezondheid"
  | "energie"
  | "water"
  | "algemeen";
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
    id: "beweegvriendelijke-omgeving",
    name: "Beweegvriendelijke omgeving",
    domain: "gezondheid",
    processStep: "oplossingsrichtingen",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "",
    linkText: "Stappenplan beweegvriendelijke omgeving | Kenniscentrum Sport & Bewegen",
    link: "https://tools.kenniscentrumsportenbewegen.nl/stappenplan-beweegvriendelijke-omgeving/tool/stappenplan-beweegvriendelijke-omgeving/",
    remarks: "",
    aiDetaillering: {
      description: "Het Stappenplan Beweegvriendelijke Omgeving van Kenniscentrum Sport & Bewegen helpt gemeenten en professionals stapsgewijs bij het realiseren van een omgeving die uitnodigt tot bewegen, sporten en spelen: van het bepalen van ambitie en doelgroep, via analyse van de omgeving en samenwerking met stakeholders, tot uitvoering en evaluatie.",
      organization: "Kenniscentrum Sport & Bewegen",
      sources: [
        { url: "https://tools.kenniscentrumsportenbewegen.nl/stappenplan-beweegvriendelijke-omgeving/tool/stappenplan-beweegvriendelijke-omgeving/", label: "Stappenplan beweegvriendelijke omgeving – Kenniscentrum Sport & Bewegen" },
      ],
    },
  },
  {
    id: "toolkit-positieve-gezondheid",
    name: "Toolkit 'Positieve Gezondheid'",
    domain: "gezondheid",
    processStep: "beleids_probleemanalyse",
    policyTrack: "beleidsdoorwerking",
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
    processStep: "ambitie_visie_doel",
    policyTrack: "domein_overstijgend",
    crossCuttingThemes: ["domein_overstijgend", "participatie", "evaluatie"],
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
    processStep: "act",
    policyTrack: "uitvoering",
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
    processStep: "probleemanalyse",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["openbare_ruimte"],
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
    processStep: "beleids_probleemanalyse",
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
    remarks: "AMS Institute (onder DRO | DMI)\n\nInclusief mensen met beperking?",
    aiDetaillering: {
      description: "Het AMS Institute publiceerde een policy paper over het ethisch en effectief verzamelen van voetgangersmobiliteitsdata van ondervertegenwoordigde groepen. De methodiek combineert GPS-tracking, in-app enquêtes en interviews, co-designed met kwetsbare gebruikers.",
      organization: "AMS Institute, auteurs: Isabelle Snaauw en Achilleas Psyllidis (TU Delft)",
      sources: [
        { url: "https://openresearch.amsterdam/en/page/128542/collecting-real-world-pedestrian-mobility-data-for-inclusive-urban", label: "Pedestrian Mobility Data – AMS Institute / OpenResearch" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════
  // ELEKTRICITEIT & ENERGIE
  // ═══════════════════════════════════════════════════════════
  {
    id: "miek",
    name: "MIEK (Meerjarenprogramma Infrastructuur Energie en Klimaat)",
    domain: "energie",
    processStep: "beleidsdoel",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["domein_overstijgend"],
    description: "MIEK (Meerjarenprogramma Infrastructuur Energieklimaat) is een strategisch instrument om energie-infrastructuurprojecten tijdig en integraal te plannen in lijn met Nederlandse klimaatdoelstellingen. De handleiding 2025 bouwt hierop voort door een transparant kader te bieden voor projectselectie en realisatie, gekoppeld aan een geïntegreerde systeemroute die op basis van integrale analyse aansluit bij langetermijnbeleid. Daarnaast maakt MIEK via een multimodale visie maatschappelijke afwegingen tussen energiedragers en transportmogelijkheden, terwijl het tegelijkertijd de samenhang tussen ruimtelijke ontwikkeling en het energiesysteem optimaliseert. Kortom: MIEK zorgt ervoor dat de juiste infrastructuur op het juiste moment wordt gerealiseerd.",
    linkText: "",
    link: "https://www.rijksoverheid.nl/site/binaries/site-content/collections/documents/2024/02/09/handleiding-en-samenwerkingsovereenkomst-miek/nationaal-miek-handleiding-2025.pdf",
    remarks: "MIEK helpt de gemeentelijke ambtenaar door hen een gestructureerd kader te bieden om lokale ruimtelijke opgaven – zoals woningbouw, bedrijventerreinen en maatschappelijke voorzieningen – te vertalen naar concrete energie-infrastructuurprojecten. \n\nDaarnaast biedt de VNG in samenwerking met het Rijk specifieke hulpmiddelen en ondersteuning om ambtenaren te informeren en te faciliteren bij het opstellen van dit plan. \n\nDoor MIEK krijgen gemeenten ook meer grip op de uitvoering: het proces maakt ruimtelijke procedures, vergunningverlening en eventuele grondtransacties voor energieprojecten transparanter en beter te coördineren. Kortom, MIEK voorkomt dat gemeenten met netcongestie worden geconfronteerd zonder voorbereiding, en zorgt dat lokale ontwikkelingsplannen direct worden gekoppeld aan de benodigde energievoorziening.",
    aiDetaillering: {
      description: "Het MIEK wordt opgesteld door het Ministerie van Economische Zaken en Klimaat (inmiddels Klimaat en Groene Groei) samen met provincies, gemeenten en netbeheerders; het is geen wettelijk verplicht instrument maar een strategisch programma om prioritaire energie-infrastructuurprojecten te versnellen. Er bestaat een nationaal MIEK (nMIEK) en sinds 2023 stellen alle provincies een provinciaal MIEK (pMIEK) op. Projecten komen onder meer binnen via de Cluster Energie Strategieën (CES). De meest recente uitgave is de MIEK-handleiding 2025.",
      organization: "Ministerie van Economische Zaken en Klimaat (Klimaat en Groene Groei) / RVO",
      sources: [
        { url: "https://energietransitie.nl/rijkstrajecten/plannen-en-programmas/meerjarenprogramma-infrastructuur-energie-en-klimaat-miek", label: "MIEK – Energietransitie.nl (RVO)" },
        { url: "https://www.rijksoverheid.nl/site/binaries/site-content/collections/documents/2024/02/09/handleiding-en-samenwerkingsovereenkomst-miek/nationaal-miek-handleiding-2025.pdf", label: "Nationaal MIEK-handleiding 2025 – Rijksoverheid" },
      ],
    },
  },
  {
    id: "integraal-programmeren",
    name: "Handreiking Integraal Programmeren (december 2022)",
    domain: "energie",
    processStep: "ambitie_visie_doel",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["domein_overstijgend"],
    description: "De Handreiking Integraal Programmeren (december 2022) biedt een gezamenlijk proceskader voor overheden en netbeheerders om toekomstige energie-infrastructuur niet los te plannen, maar direct af te stemmen op ruimtelijke en sectorale ontwikkelingen zoals woningbouw, industrie en mobiliteit. Het document schetst een sturingsconcept met vijf stappen: van gezamenlijke opstart en het vaststellen van een afwegingskader, via het ontwikkelen van data en een gedeelde energievisie, tot het uitwerken van concrete varianten en het nemen van bestuurlijke besluiten. Het uiteindelijke doel is om door intersectorale afstemming te voorkomen dat ruimtelijke plannen vastlopen door netcongestie of dat energienetten zonder vraag worden aangelegd, waardoor een veilig en efficiënt energiesysteem op de lange termijn wordt gerealiseerd.",
    linkText: "",
    link: "https://www.rvo.nl/sites/default/files/2022-12/Groeidocument-handreiking-Integraal-Programmeren-in-het-energiesysteem-december-2022.pdf",
    remarks: "De Handreiking Integraal Programmeren biedt de gemeentelijke ambtenaar een concreet werkkader om lokale ruimtelijke opgaven, zoals woningbouw en bedrijventerreinen, direct te vertalen naar de regionale energiestrategie. \n\nDe ambtenaar fungeert hierin als schakel tussen de lokale realiteit, de provincie en de netbeheerder, waarbij de handreiking helpt bij het leveren van relevante data, het volgen van een gestructureerd stappenplan voor het pMIEK-proces en het toepassen van afwegingscriteria om prioriteiten te stellen.\n\nHierdoor kan de gemeente proactief sturen op de benodigde energie-infrastructuur en voorkomen dat ruimtelijke plannen vastlopen door netcongestie, terwijl tegelijkertijd de maatschappelijke draagkracht via participatie wordt gewaarborgd.",
    aiDetaillering: {
      description: "De handreiking is ontwikkeld door de Werkgroep Integraal Programmeren in opdracht van het Interbestuurlijk Managementoverleg (IMO) Energiesysteem, met betrokkenheid van EZK, BZK, IenW, IPO, VNG, Netbeheer Nederland en TNO; RVO fungeert als aanspreekpunt. Het betreft nadrukkelijk een groeidocument (versie december 2022, waarin de resultaten van drie pilots zijn verwerkt) en geen verplicht kader. Het instrument verbindt de energievisie, de RES en het (p)MIEK en beschrijft hoe je tot een pMIEK komt en aan welke eisen dat moet voldoen.",
      organization: "Werkgroep Integraal Programmeren (namens IMO Energiesysteem), ondersteund door RVO",
      sources: [
        { url: "https://www.rvo.nl/onderwerpen/energiesysteem/integraal-programmeren", label: "Integraal programmeren – RVO" },
        { url: "https://www.rvo.nl/sites/default/files/2022-12/Groeidocument-handreiking-Integraal-Programmeren-in-het-energiesysteem-december-2022.pdf", label: "Groeidocument Handreiking Integraal Programmeren (december 2022)" },
      ],
    },
  },
  {
    id: "handreiking-res",
    name: "Handreiking RES en werkbladen",
    domain: "energie",
    processStep: "ambitie_visie_doel",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["domein_overstijgend", "participatie"],
    description: "De Handreiking RES en werkbladen fungeert als een praktisch kompas voor de uitvoering van de Regionale Energiestrategie (RES) door strategische richtlijnen te combineren met concrete werkinstrumenten. De handreiking biedt houvast voor de procescyclus van RES 2.0 en de dynamische actualisering van de RES-kaart, terwijl de bijbehorende werkbladen specifieke methoden bieden voor thema's zoals bestuurlijke samenwerking, het toepassen van afwegingskaders en participatie. Kortom, het document vertaalt de overkoepelende ambitie van de energietransitie naar een uitvoerbaar proces met tastbare stappen voor regionale samenwerking.",
    linkText: "",
    link: "https://www.regionale-energiestrategie.nl/werkwijze/handreiking+20+en+werkbladen/default.aspx",
    remarks: "De Handreiking RES en de bijbehorende werkbladen bieden de gemeentelijke ambtenaar een concreet instrumentarium om de lokale bijdrage aan de Regionale Energiestrategie vorm te geven door de rol van coördinator en verbinder te faciliteren. \n\nHet materiaal ondersteunt bij het opstellen van haalbaarheidsanalyses, het toetsen van locaties en het structureren van bestuurlijke samenwerking en participatie, zodat lokale ruimtelijke plannen en vergunningverlening direct aansluiten op de regionale ambities voor wind, zon en warmte. \n\nHiermee krijgt de ambtenaar de tools om de lokale input strategisch te vertalen naar het regionale kader en het pMIEK, waardoor de gemeente proactief kan sturen op de uitvoering en monitoring van de energietransitie in plaats van enkel reactief te opereren.",
    aiDetaillering: {
      description: "De Handreiking en werkbladen worden uitgegeven door het Nationaal Programma RES (NP RES) en zijn opgesteld in themagroepen met experts en betrokkenen bij de RES. Het is bedoeld als vrijwillige houvast en inspiratie op weg naar 2030, niet als wettelijk voorschrift. Het betreft de Handreiking 2.0 (geactualiseerd in 2022); de afzonderlijke werkbladen worden doorlopend bijgewerkt, waarbij de laatste versie steeds op de NP RES-website staat.",
      organization: "Nationaal Programma RES (NP RES)",
      sources: [
        { url: "https://www.regionale-energiestrategie.nl/werkwijze/handreiking+20+en+werkbladen/default.aspx", label: "Handreiking RES en werkbladen – NP RES" },
      ],
    },
  },
  {
    id: "bouwstenen-energievisie",
    name: "Aanvulling op bouwstenen voor een energievisie (januari 2025)",
    domain: "energie",
    processStep: "ambitie_visie_doel",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["domein_overstijgend"],
    description: "De Aanvulling op bouwstenen voor een energievisie (januari 2025) scherp het kader voor het vormgeven van een energievisie als integraal onderdeel van het omgevingsbeleid, met als doel de energietransitie te versnellen. Het document onderscheidt twee routes: een sectorale route die concrete plannen uit sectoren zoals industrie en mobiliteit vertaalt naar duurzame initiatieven, en een omgevingsroute die de energievisie direct verankert in de omgevingsvisie zodat energiekeuzes worden afgewogen tegen ruimtelijke ordening, milieu en leefbaarheid. Centraal staan hierbij de structurerende keuzes; de visie moet niet alleen een toekomstbeeld schetsen, maar ook beslissende keuzes bevatten over de inrichting van het energiesysteem. Door deze keuzes direct in de omgevingsvisie op te nemen, wordt de besluitvorming efficiënter en wordt voorkomen dat projecten vastlopen in losse procedures, waardoor een integrale aanpak de transitie naar 2050 versnelt.",
    linkText: "",
    link: "https://www.rvo.nl/sites/default/files/2025-02/Aanvulling-op-bouwstenen-voor-een-energievisie-januari-2025.pdf",
    remarks: "De Aanvulling op bouwstenen voor een energievisie biedt de gemeentelijke ambtenaar een helder kader om de energievisie integraal te verankeren in de omgevingsvisie, waardoor energiekeuzes direct worden afgewogen tegen ruimtelijke ordening, leefbaarheid en milieu. \n\nHet document faciliteert de ambtenaar als adviseur en uitvoerder door richtlijnen te geven voor het juridisch onderbouwen van structurerende keuzes en het opstellen van plan-MER's, wat de besluitvorming versnelt en rechtszekerheid biedt. \n\nDoor sectorale plannen en omgevingsbeleid op elkaar af te stemmen, helpt het materiaal conflicten te voorkomen en zorgt het voor een efficiënte procesvoering waarbij lokale energiewensen direct worden vertaald naar uitvoerbare projecten binnen de ruimtelijke ordening.",
    aiDetaillering: {
      description: "Dit document is uitgegeven door RVO en is een aanvulling op de eerdere publicatie 'Bouwstenen voor een energievisie' (september 2023); deze versie van januari 2025 volgt op een tussentijdse aanvulling uit mei 2024. Het maakt onderdeel uit van de ondersteuning bij integraal programmeren en helpt provincies, gemeenten en netbeheerders hun energievisie verder uit te werken als bouwsteen voor de omgevingsvisie. Het is een ondersteunend, vrijwillig hulpmiddel en geen verplicht instrument.",
      organization: "RVO (Rijksdienst voor Ondernemend Nederland)",
      sources: [
        { url: "https://www.rvo.nl/sites/default/files/2025-02/Aanvulling-op-bouwstenen-voor-een-energievisie-januari-2025.pdf", label: "Aanvulling op bouwstenen voor een energievisie (januari 2025) – RVO" },
        { url: "https://www.rvo.nl/onderwerpen/energiesysteem/samenwerken-de-regio", label: "Samenwerken aan het energiesysteem in uw regio – RVO" },
      ],
    },
  },
  {
    id: "handreiking-betaalbaarheid",
    name: "Handreiking betaalbaarheid (hulpmiddel voor gemeenten voor de warmtetransitie in de wijkaanpak)",
    domain: "energie",
    processStep: "beleids_probleemanalyse",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["data_gedreven"],
    description: "De Handreiking betaalbaarheid (voor de warmtetransitie in de wijkaanpak) biedt gemeenten een systematisch kader om te voorkomen dat de overstap naar duurzame warmte leidt tot onbetaalbare woonlasten voor bewoners.\n\nDe kern in één notendop:\n\nHet document stelt een methodiek voor waarin gemeenten eerst een gedetailleerde wijk- en buurtanalyse uitvoeren (op basis van energielabels, isolatiekosten en huidige verbruik) om vervolgens een betaalbaarheidsgrens te hanteren: de totale lasten (investering + extra energiekosten) mogen doorgaans niet meer bedragen dan 10% van het besteedbaar inkomen van de huishoudens. Op basis hiervan worden kwetsbare groepen geïdentificeerd en wordt een mix van financiële instrumenten (subsidies, leningen, fondsen) ingezet om de transitie betaalbaar te houden.",
    linkText: "",
    link: "https://www.volkshuisvestingnederland.nl/site/binaries/site-content/collections/documents/2023/07/19/handreiking-betaalbaarheid/2.+Handreiking+Betaalbaarheid+def.pdf",
    remarks: "Deze handreiking biedt de gemeentelijke ambtenaar een concreet rekenkader en processtappen om de sociale en financiële haalbaarheid van de warmtetransitie te borgen, door eerst een gedetailleerde wijkanalyse uit te voeren en vervolgens de '10%-regel' als toetsingskader te hanteren om kwetsbare huishoudens te identificeren.\n \nHet document ondersteunt de ambtenaar bij het vroegtijdig signaleren van financiële risico's, het samenstellen van een passende mix van subsidies en leningen om lasten te drukken, en het transparant communiceren over kosten en besparingen om draagvlak te creëren. \n\nDaarnaast faciliteert het een monitoringssysteem om de voortgang van de betaalbaarheid te volgen en het plan tijdig bij te sturen, waardoor de ambtenaar de transitie niet alleen technisch, maar ook sociaal verantwoord en financieel onderbouwd kan uitvoeren.",
    aiDetaillering: {
      description: "Deze handreiking is ontwikkeld door de VNG samen met het ministerie van Binnenlandse Zaken en Koninkrijksrelaties (BZK) en verscheen in juli 2023. Het is een dynamisch document dat periodiek wordt geactualiseerd en dat gemeenten helpt de betaalbaarheid en woonlastenneutraliteit voor eigenaar-bewoners in de wijkgerichte warmtetransitie inzichtelijk te maken. De handreiking bevat een stappenplan en een overzicht van beschikbare subsidie- en financieringsinstrumenten en ondersteunt gemeenten bij de transitievisie warmte, warmteprogramma's, uitvoeringsplannen en de onderbouwing van een omgevingsplanwijziging.",
      organization: "VNG (Vereniging van Nederlandse Gemeenten) en het ministerie van Binnenlandse Zaken en Koninkrijksrelaties (BZK)",
      sources: [
        { url: "https://vng.nl/publicaties/handreiking-betaalbaarheid-hulpmiddel-voor-gemeenten-voor-de-warmtetransitie-in-de-wijkaanpak", label: "Handreiking Betaalbaarheid – VNG" },
        { url: "https://www.volkshuisvestingnederland.nl/site/binaries/site-content/collections/documents/2023/07/19/handreiking-betaalbaarheid/2.+Handreiking+Betaalbaarheid+def.pdf", label: "Handreiking Betaalbaarheid (PDF) – Volkshuisvesting Nederland" },
      ],
    },
  },
  {
    id: "handreiking-energienetwerken",
    name: "Handreiking Energienetwerken - ruimtelijk vormgeven energietransitie (MooiNL)",
    domain: "energie",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "De Handreiking Energienetwerken (MooiNL, 2024) biedt gemeenten een praktisch kader om de uitbreiding van energienetwerken niet als een noodzakelijk kwaad, maar als een kans voor ruimtelijke kwaliteit te benaderen. Het document fungeert als een \"kookboek\" met drie concrete inrichtingsconcepten die laten zien hoe infrastructuur als nieuwe ruimtelijke structuur kan dienen, hoe deze in bestaande landschappen kan worden geïntegreerd, of hoe groene corridors ontstaan waar energietransport en natuurontwikkeling samengaan. Door deze stappenplannen en voorbeelden te volgen, kunnen gemeenten de energietransitie versnellen door de ruimtelijke inpassing proactief en kwalitatief hoogwaardig vorm te geven, waardoor weerstand tegen de visuele impact van projecten wordt voorkomen.",
    linkText: "",
    link: "https://www.ruimtelijkeordening.nl/site/binaries/site-content/collections/documents/2024/05/08/handreiking-energienetwerken/Handreiking-energienetwerken.pdf",
    remarks: "Deze handreiking biedt de gemeentelijke ambtenaar een concreet handelingsperspectief om de uitbreiding van energienetwerken te vertalen van een technische noodzaak naar een positieve ruimtelijke toevoeging, door middel van drie specifieke inrichtingsconcepten die als blauwdruk dienen voor ontwerp en inpassing. \n\nHet document ondersteunt de ambtenaar bij het reduceren van maatschappelijke weerstand door proactief de visuele impact te minimaliseren en netwerken te integreren met andere beleidsdoelen zoals natuur en recreatie, terwijl het gestructureerde stappenplannen en voorbeelden bieden om de complexe afwegingen tussen energiedoelen en ruimtelijke kwaliteit te versnellen. \n\nHiermee schakelt de ambtenaar van een reactieve rol in bezwaarprocedures naar een sturende positie, waarbij energienetwerken worden ontworpen als kwalitatieve projecten die de leefomgeving versterken in plaats van belasten.",
    aiDetaillering: {
      description: "Deze handreiking is een uitgave van het ministerie van Binnenlandse Zaken en Koninkrijksrelaties (BZK) in het kader van het programma Mooi Nederland (MooiNL) en werd op 8 mei 2024 gepubliceerd. Ze maakt deel uit van een reeks handreikingen op gebiedsniveau en reikt drie inrichtingsconcepten aan (Hub der hubs, Energiemozaïek en Win-win), ontwikkeld door de ontwerpbureaus Bright, Generation.Energy en Groen Licht. Het document biedt gemeenten en provincies een landelijk toepasbaar handelingsperspectief om het energiesysteem ruimtelijk vorm te geven, met een blik op ontwikkelingen richting 2050 en 2100.",
      organization: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties (programma Mooi Nederland); ontwerp door Bright, Generation.Energy en Groen Licht",
      sources: [
        { url: "https://www.ruimtelijkeordening.nl/documenten/publicaties/2024/05/08/handreiking-energienetwerken", label: "Handreiking Energienetwerken – Ruimtelijke ordening Nederland" },
        { url: "https://www.ruimtelijkeordening.nl/site/binaries/site-content/collections/documents/2024/05/08/handreiking-energienetwerken/Handreiking-energienetwerken.pdf", label: "Handreiking Energienetwerken (PDF)" },
      ],
    },
  },
  {
    id: "middenspanningsruimtes-gmr",
    name: "Handreiking Ruimtelijke Inpassing Middenspanningsruimtes Groene Metropoolregio Arnhem-Nijmegen",
    domain: "energie",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "De Handreiking Ruimtelijke Inpassing Middenspanningsruimtes van de Groene Metropoolregio Arnhem-Nijmegen (GMR) biedt een regionaal afgestemde aanpak om de noodzakelijke uitbreiding van middenspanningsinfrastructuur (zoals transformatorstations) snel en ruimtelijk kwalitatief goed te realiseren.\n\nHet document beschrijft een geïntegreerde samenwerking tussen gemeenten, netbeheerder Liander en andere partijen om middenspanningsruimtes niet als losse objecten, maar als onderdeel van de bredere ruimtelijke ontwikkeling te plannen.",
    linkText: "",
    link: "https://www.gmr.nl/media/0jwivaob/handreiking-ruimtelijke-inpassing-middenspanningsruimte-definitief.pdf",
    remarks: "Deze handreiking biedt de gemeentelijke ambtenaar een regionaal gestandaardiseerd kader dat de vaak vertraagde procedure voor het inpassen van middenspanningsruimtes versnelt en vereenvoudigt door uniforme richtlijnen voor vergunningverlening, veiligheid en ontwerp te bieden. \n\nHet document faciliteert de ambtenaar bij het proactief identificeren van geschikte locaties, met name door te focussen op bestaande gebieden en multifunctionele corridors in samenwerking met netbeheerder Liander, waardoor de omgevingsimpact en maatschappelijke weerstand worden verkleind. \n\nDaarnaast zorgt het voor regio-coherentie door lokale besluiten direct te koppelen aan de Regionale Energiestrategie en de bredere economische agenda van de GMR, en beperkt het juridische risico's door duidelijke kaders te stellen. Hiermee schakelt de ambtenaar van een reactieve vergunningverlener naar een sturende regio-partner, waardoor de energietransitie op middenspanningsniveau efficiënter, ruimtelijk kwalitatief en gecoördineerd wordt uitgevoerd.",
    aiDetaillering: {
      description: "Deze handreiking is ontwikkeld en gepubliceerd door de Groene Metropoolregio Arnhem-Nijmegen (september 2025), mede vanuit de context van de Regionale Energiestrategie van de regio. Het is een regionaal hulpmiddel voor ambtenaren ruimtelijke ordening, vastgoed, stedenbouw en energietransitie die betrokken zijn bij het inpassen van de vele nieuwe middenspanningsruimtes die de energietransitie vergt. De handreiking biedt geen vast recept maar een verzameling inzichten, lessen en voorbeelden uit de regio en daarbuiten, met aandacht voor integrale afweging en ruimtelijke kwaliteit in samenwerking met netbeheerders.",
      organization: "Groene Metropoolregio Arnhem-Nijmegen (mede vanuit RES Groene Metropoolregio)",
      sources: [
        { url: "https://www.gmr.nl/actueel/nieuwe-handreiking-helpt-gemeenten-bij-het-ruimtelijk-inpassen-van-middenspanningsruimtes/", label: "Nieuwe handreiking middenspanningsruimtes – Groene Metropoolregio" },
        { url: "https://www.gmr.nl/media/0jwivaob/handreiking-ruimtelijke-inpassing-middenspanningsruimte-definitief.pdf", label: "Handreiking Ruimtelijke Inpassing Middenspanningsruimtes (PDF)" },
      ],
    },
  },
  {
    id: "ruimtelijke-handreiking-elektriciteitsstations",
    name: "Ruimtelijke Handreiking Elektriciteitsstations - Handvatten voor locatiekeuze van elektriciteitsstations en hun inpassing in het landschap",
    domain: "energie",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "De Ruimtelijke Handreiking Elektriciteitsstations van de provincie Noord-Holland biedt een landschapsgerichte aanpak waarbij de behoud van openheid en panoramazichten, zoals zichten over de dijk en langs de ringvaart, leidend zijn bij de locatiekeuze van nieuwe stations. Het document stelt dat de positionering en vormgeving moeten aansluiten bij de specifieke landschapswaarden: in gebieden met hoge openheidswaarde moeten stations de zichtlijnen en herkenbare randen respecteren, terwijl in gebieden zonder deze kernwaarde integratie in nieuwe natuurgebieden of bosplantages mogelijk is om de visuele impact te maskeren. Daarnaast maakt de handreiking onderscheid tussen kleine en grote stations om de maatschappelijke impact te differentiëren en biedt het een gestructureerd stappenplan voor de ARO-procedure, zodat de technische noodzaak van het net wordt gebalanceerd met de ambitie voor een klimaatneutraal en visueel coherent landschap.",
    linkText: "",
    link: "https://www.noord-holland.nl/bestanden/pdf/Ruimtelijke%20handreiking%20elektriciteitsstations%20%20(1).pdf",
    remarks: "Deze handreiking helpt de gemeentelijke ambtenaar door een helder, provinciaal afgestemd kader te bieden voor het beoordelen en positioneren van elektriciteitsstations, waardoor de vaak complexe afweging tussen technische noodzaak en ruimtelijke kwaliteit wordt gestructureerd. \n\nDe ambtenaar krijgt hiermee concrete richtlijnen om te bepalen waar stations wel of niet passen op basis van landschapswaarden zoals openheid en panoramazichten, en hoe ze in verschillende zones (bijvoorbeeld langs de ringvaart versus in nieuwe natuurgebieden) het beste kunnen worden ingepast.",
    aiDetaillering: {
      description: "Deze handreiking is ontwikkeld door de provincie Noord-Holland en gepresenteerd eind maart 2023. Het is een provinciaal instrument dat netbeheerders (zoals Liander en TenneT) en gemeenten uitgangspunten biedt voor toekomstbestendige locatiekeuzes en zorgvuldige landschappelijke inpassing van elektriciteits- en transformatorstations, met nadruk op de bovengrondse, visuele en ruimtelijke effecten op het Noord-Hollandse landschap. Regels uit de handreiking zijn verankerd in de provinciale Omgevingsverordening Noord-Holland.",
      organization: "Provincie Noord-Holland",
      sources: [
        { url: "https://www.noord-holland.nl/bestanden/pdf/Ruimtelijke%20handreiking%20elektriciteitsstations%20%20(1).pdf", label: "Ruimtelijke Handreiking Elektriciteitsstations (PDF) – Provincie Noord-Holland" },
      ],
    },
  },
  {
    id: "warmte-kermis",
    name: "De Warm(t)e Kermis De ontwikkeling en pilot van een innovatieve tool voor het ophalen van participatiebehoeftes onder bewoners",
    domain: "energie",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["participatie"],
    description: "De Warm(t)e Kermis van TNO is een innovatief, laagdrempelig participatie-instrument dat de vorm van een kermisevenement aanneemt om bewoners op een interactieve manier te betrekken bij de warmtetransitie. Het centrale doel is niet primair technische voorlichting, maar het ophalen van specifieke participatiebehoeften: de tool, met name de interactieve 'Blikvanger', helpt inzicht te krijgen in hoe bewoners betrokken willen worden bij de verduurzaming van hun woning en wijk. Uit pilots, zoals in Wierden, is gebleken dat het succes van de aanpak sterk afhangt van de omgevingsfactoren en organisatie, waarbij wachttijden, de rolverdeling van begeleiders en de keuze van locatie en tijdstip cruciaal zijn om voldoende bewoners te trekken. Kortom, het is een ervaringsgerichte methode die de kloof tussen beleid en bewoners overbrugt door de energietransitie te vertalen naar een toegankelijk en sociaal evenement.",
    linkText: "",
    link: "https://publications.tno.nl/publication/34642209/FjGTMg/TNO-2024-R10469.pdf",
    remarks: "Deze handreiking helpt de gemeentelijke ambtenaar door een bewezen, laagdrempelige methode aan te reiken om de vaak moeilijke stap te maken van abstract beleid naar concrete, actieve burgerbetrokkenheid bij de warmtetransitie.\n\nIn plaats van traditionele, vaak passieve informatieavonden, biedt de \"Warm(t)e Kermis\" een interactief format dat bewoners op een natuurlijke en sociale manier aanspreekt, waardoor de ambtenaar direct inzicht krijgt in de specifieke wensen en voorkeuren van de bevolking voor inspraak en actie.",
    aiDetaillering: {
      description: "De Warm(t)e Kermis is ontwikkeld door TNO en gepubliceerd in 2024 als rapport TNO-2024-R10469. De tool draait om 'de Blikvanger', een informatiebord dat via creatieve vragen de participatiebehoefte van bewoners in kaart brengt: niet alleen of, maar vooral hoe en in welke mate mensen betrokken willen worden bij de warmte- en verduurzamingstransitie. De aanpak is in de praktijk getest met de gemeente Wierden en blijkt vooral moeilijk bereikbare groepen laagdrempelig aan te spreken.",
      organization: "TNO",
      sources: [
        { url: "https://publications.tno.nl/publication/34642209/FjGTMg/TNO-2024-R10469.pdf", label: "TNO-rapport TNO-2024-R10469 (volledige tekst, PDF)" },
        { url: "https://energy.nl/publications/warmte-kermis-participatiebehoefte/", label: "De Warm(t)e Kermis – Energy.nl" },
      ],
    },
  },
  {
    id: "estrac-transforming-regions",
    name: "ESTRAC Transforming Regions: Gebouwde Omgeving (D5.2 Synthese rapport van de ESTRAC casestudies)",
    domain: "energie",
    processStep: "implementatie",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["domein_overstijgend", "evaluatie"],
    description: "De kern van het rapport ESTRAC Transforming Regions (D5.2) is een synthese van praktijklessen uit regionale energietransitie-casestudies die een methodiek biedt om de overgang van beleid naar uitvoering in de gebouwde omgeving effectief te sturen. Het rapport concludeert dat succesvolle transities niet primair afhankelijk zijn van technische oplossingen, maar van integraal sturen op governance, proces en inhoud; dit betekent het opzetten van effectieve samenwerkingsverbanden tussen overheden en burgers, het volgen van een gestructureerd traject van visievorming tot actieplannen, en het maken van integrale afwegingen waarbij de gebouwde omgeving wordt gekoppeld aan ruimtelijke, sociale en economische doelen. Kortom, het rapport vertaalt theoretische kaders naar een praktijkgerichte aanpak die gemeenten helpt complexe regionale energiestrategieën concreet, draagvlakrijk en uitvoerbaar te maken.",
    linkText: "",
    link: "https://www.newenergycoalition.org/custom/uploads/2025/07/D5.2_TNO-2021-R12646-eindrapportage-project-Tranforming-Regions.pdf",
    remarks: "Het rapport TNO 2021 R12646 (ESTRAC Transforming Regions) biedt de gemeentelijke ambtenaar geen nieuwe wetgeving, maar fungeert als een methodologisch kompas en leermiddel gebaseerd op de synthese van praktijkervaringen uit diverse regio's. \n\nDe kernwaarde voor de ambtenaar ligt in de identificatie van succesfactoren en valkuilen bij de uitvoering van de energietransitie in de gebouwde omgeving, waardoor complexe afwegingen bij het opstellen van Regionale Energiestrategieën en wijkplannen beter onderbouwd kunnen worden. \n\nHet rapport faciliteert een gestructureerde aanpak voor besluitvorming, biedt inzicht in de dynamiek van samenwerking tussen overheden, netbeheerders en bewoners, en benadrukt de noodzaak van integrale oplossingen die de gebouwde omgeving koppelen aan andere sectoren. \n\nDoor te leren van concrete casestudies, kan de ambtenaar lokale knelpunten zoals netcongestie of betaalbaarheid aanpakken zonder het wiel opnieuw uit te vinden, wat resulteert in een robuustere en minder risicovolle transitieaanpak.",
    aiDetaillering: {
      description: "Dit is de eindrapportage (deliverable D5.2, TNO-2021-R12646) van het werkpakket Gebouwde Omgeving binnen het onderzoeksprogramma ESTRAC / Transforming Regions. ESTRAC was een samenwerking tussen TNO, Hanzehogeschool Groningen, de Rijksuniversiteit Groningen en New Energy Coalition. Het rapport bundelt praktijkgericht onderzoek naar de regionale en lokale energietransitie en beschrijft techno-economische energiemodellen waarmee gemeenten en regio's duurzame warmtescenario's op wijk- en regioniveau kunnen doorrekenen.",
      organization: "TNO, Hanzehogeschool Groningen, Rijksuniversiteit Groningen en New Energy Coalition (programma ESTRAC)",
      sources: [
        { url: "https://publications.tno.nl/publication/34639152/CfyPTr/TNO-2021-R12646.pdf", label: "TNO-2021-R12646 – TNO Publications" },
        { url: "https://www.newenergycoalition.org/custom/uploads/2025/07/D5.2_TNO-2021-R12646-eindrapportage-project-Tranforming-Regions.pdf", label: "Eindrapportage D5.2 Transforming Regions (PDF)" },
      ],
    },
  },
  {
    id: "nipv-waterstofdragers",
    name: "NIPV Kennisbundel transport van waterstofdragers",
    domain: "energie",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "De bundel richt zich op de vier belangrijkste waterstofdragers die momenteel relevant zijn voor transport van (1) gecomprimeerd waterstofgas (via tubetrailers), (2) vloeibaar waterstof (cryogeen gekoeld), (3) ammoniak (onder druk of gekoeld vloeibaar, vaak als drager voor waterstof) en (4) LOHC (Liquid Organic Hydrogen Carriers).\nVoor elk van deze dragers beschrijft de bundel de mogelijkheden en beperkingen van transport over de weg, het spoor, de binnenvaart en het zeevervoer, inclusief de specifieke regelgeving (zoals het Wvgs, Bvgs en Vbg) en de vereiste veiligheidsmaatregelen (containers, risicoanalyse bij laden/lossen).",
    linkText: "",
    link: "https://nipv.nl/wp-content/uploads/2024/12/20241211-NIPV-Kennisbundel-transport-van-waterstofdragers.pdf",
    remarks: "De kennisbundel fungeert als een praktische handleiding voor veiligheidsregio's, omgevingsdiensten en beleidsmakers om de toenemende stromen van waterstofdragers in de komende jaren veilig, juridisch correct en ruimtelijk goed ingepast te kunnen laten verlopen, terwijl ze anticiperen op de toekomstige verschuiving naar een buisleidingennet.",
    aiDetaillering: {
      description: "De Kennisbundel Transport van waterstof(dragers) is opgesteld door het Nederlands Instituut Publieke Veiligheid (NIPV) en gepubliceerd op 11 december 2024. De bundel richt zich op de veiligheidsaspecten van het transport van bulkhoeveelheden waterstofdragers via weg, water, spoor en buisleidingen; het gebruik van waterstof als brandstof en de opslag ervan vallen er nadrukkelijk buiten. De kennisbundel is bedoeld voor professionals bij veiligheidsregio's, vergunningverlening en incidentbestrijding en maakt deel uit van de NIPV-reeks kennisbundels 'veilige energietransitie'.",
      organization: "Nederlands Instituut Publieke Veiligheid (NIPV)",
      sources: [
        { url: "https://nipv.nl/onderzoek/waterstof/", label: "Waterstof en veilige energietransitie – NIPV" },
        { url: "https://nipv.nl/wp-content/uploads/2024/12/20241211-NIPV-Kennisbundel-transport-van-waterstofdragers.pdf", label: "Kennisbundel transport van waterstof(dragers) (PDF, 2024)" },
      ],
    },
  },
  {
    id: "burgerparticipatie-energietransitie",
    name: "Successen en valkuilen bij burgerparticipatie in de energietransitie",
    domain: "energie",
    processStep: "probleemanalyse",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["participatie"],
    description: "De kern van 'Bijdragen aan de Kennisbasis Energietransitie: Successen en valkuilen bij burgerparticipatie' is dat burgerparticipatie een cruciale succesfactor is voor de energietransitie, mits deze wordt uitgevoerd met een duidelijke strategie en oprechte intentie in plaats van als een optioneel extraatje. Succes hangt af van het vooraf helder definiëren van het participatiedoel en het betrekken van burgers vanaf het allereerste ontwerpstadium, waarbij transparantie over de invloed van hun input en het actief betrekken van een diverse, representatieve groep essentieel zijn. De belangrijkste valkuilen die worden benoemd zijn tokenisme, te krappe tijdlijnen, het ontbreken van terugkoppeling en het domineren van een kleine minderheid, omdat deze factoren wantrouwen zaaien en leiden tot weerstand. Kortom, het rapport pleit voor een cultuuromslag bij overheden van louter informeren naar échte co-creatie, waarbij burgers de ruimte krijgen om mee te denken en te beslissen om de transitie draaglijk en uitvoerbaar te maken.",
    linkText: "",
    link: "https://www.rivm.nl/bibliotheek/rapporten/successen-valkuilen-bij-burgerparticitipatie-energietransitie.pdf",
    remarks: "Deze bijdrage helpt de gemeentelijke ambtenaar door een praktisch kader te bieden om participatieprocessen te sturen van een vaak reactieve, procedurele verplichting naar een effectieve, strategische samenwerking die draagvlak garandeert. Het document fungeert als een 'checklist' voor het ontwerp van participatietrajecten, waarbij de ambtenaar wordt gewaarschuwd voor veelgemaakte fouten zoals tokenisme en te krappe planning, en wordt geleid naar succesfactoren zoals het vooraf helder definiëren van het doel (van informeren tot medebeslissen) en het actief betrekken van een diverse bevolkingsgroep.",
    aiDetaillering: {
      description: "Dit rapport is opgesteld door het Rijksinstituut voor Volksgezondheid en Milieu (RIVM) en onderzoekt welke factoren burgerparticipatie in de energietransitie succesvol maken en welke valkuilen daarbij optreden. Het bundelt theoretische inzichten en praktijkervaringen tot handvatten om de kwaliteit van participatie te verhogen. Het rapport past in de bredere kennisontwikkeling rond burgerbetrokkenheid bij de energie- en warmtetransitie.",
      organization: "Rijksinstituut voor Volksgezondheid en Milieu (RIVM)",
      sources: [
        { url: "https://www.rivm.nl/publicaties/successen-en-valkuilen-bij-burgerparticipatie-in-energietransitie", label: "Successen en valkuilen bij burgerparticipatie – RIVM" },
        { url: "https://www.rivm.nl/bibliotheek/rapporten/successen-valkuilen-bij-burgerparticitipatie-energietransitie.pdf", label: "RIVM-rapport (PDF)" },
      ],
    },
  },
  {
    id: "vng-staalkaarten",
    name: "Gemeentelijke staalkaarten voor het omgevingsplan",
    domain: "energie",
    processStep: "beleidskeuze",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["domein_overstijgend"],
    description: "Vanaf 2019 heeft de VNG gewerkt aan het project ‘Gemeentelijke staalkaarten voor het omgevingsplan’. De staalkaarten bevatten (juridische) regels die als voorbeeld en inspiratie voor een gemeente kunnen dienen.  Een staalkaart dient enerzijds ter inspiratie en anderzijds als een representatief voorbeeldmodel van een omgevingsplan.  \n\nDe geïntegreerde versie van de staalkaarten van de VNG is een praktisch inspiratie- en oriëntatieinstrument dat gemeenten helpt bij het opstellen van hun omgevingsplan onder de nieuwe Omgevingswet.",
    linkText: "",
    link: "https://vng.nl/artikelen/onderwerpgerichte-staalkaarten",
    remarks: "Deze staalkaarten helpen de gemeentelijke ambtenaar door een concreet, juridisch onderbouwd referentiekader te bieden voor het opstellen van het omgevingsplan onder de Omgevingswet, waardoor de complexe taak van het integreren van ruimtelijke en milieuregels aanzienlijk wordt vereenvoudigd.",
    aiDetaillering: {
      description: "De staalkaarten voor het omgevingsplan worden ontwikkeld door de Vereniging van Nederlandse Gemeenten (VNG), die hier sinds 2019 aan werkt in het kader van de Omgevingswet. Een staalkaart is geen modelverordening, maar een voorbeeld met juridische regels dat gemeenten inspiratie en houvast biedt bij het opstellen van hun omgevingsplan binnen de wettelijke kaders. De onderwerpgerichte staalkaarten behandelen specifieke thema's of gebiedstypen en vullen het omgevingsplan-casco en de geïntegreerde staalkaarten aan.",
      organization: "Vereniging van Nederlandse Gemeenten (VNG)",
      sources: [
        { url: "https://vng.nl/artikelen/onderwerpgerichte-staalkaarten", label: "Onderwerpgerichte staalkaarten – VNG" },
        { url: "https://vng.nl/artikelen/staalkaarten-omgevingsplan", label: "Staalkaarten omgevingsplan (overzicht) – VNG" },
      ],
    },
  },
  {
    id: "etm",
    name: "Energy Transition Model (ETM)",
    domain: "energie",
    processStep: "oplossingsrichtingen",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["data_gedreven"],
    description: "Het Energy Transition Model (ETM) is een gratis, open-source en interactieve online simulatietool die het mogelijk maakt om de toekomst van het energiesysteem van een gemeente, regio of land tot in detail te verkennen en te kwantificeren.\nDe tool stelt gebruikers in staat om via intuïtieve schuifbalken verschillende beleidsopties en technologische keuzes (zoals de inzet van wind, zon, waterstof, isolatie of warmtenetten) direct in te voeren voor een gekozen toekomstjaar (bijvoorbeeld 2030 of 2050). Het model berekent vervolgens real-time de impact van deze keuzes op energievraag, productie, kosten, CO₂-emissies en andere duurzaamheidsindicatoren, en visualiseert deze resultaten in grafieken en tabellen.",
    linkText: "",
    link: "https://energytransitionmodel.com/",
    remarks: "Met ETM kunnen beleidsmakers en ambtenaren zonder technische kennis verschillende transitiepaden testen, onderling vergelijken en de consequenties van hun beslissingen direct inzien, wat essentieel is voor het opstellen van onderbouwde en transparante energiestrategieën.",
    aiDetaillering: {
      description: "Het ETM wordt ontwikkeld en onderhouden door Quintel uit Amsterdam en is volledig open source, uitgebracht onder de MIT-licentie. Het is een interactief, webgebaseerd model waarmee gebruikers zelf energiescenario's voor een land, regio of stad kunnen doorrekenen tot 2050. Het wordt breed gebruikt door overheden, netbeheerders, RES-regio's en adviesbureaus, en levert onder meer input voor Europese scenario-oefeningen zoals de ENTSO-E/ENTSOG TYNDP.",
      organization: "Quintel (Quintel Intelligence)",
      sources: [
        { url: "https://energytransitionmodel.com/", label: "Energy Transition Model – officiële website" },
        { url: "https://docs.energytransitionmodel.com/main/intro/", label: "ETM-documentatie – introductie" },
        { url: "https://github.com/quintel/etmodel", label: "quintel/etmodel – broncode (MIT-licentie)" },
      ],
    },
  },
  {
    id: "vesta-mais",
    name: "Vesta MAIS",
    domain: "energie",
    processStep: "oplossingsrichtingen",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["data_gedreven"],
    description: "Het Vesta MAIS-model (ontwikkeld door het Planbureau voor de Leefomgeving, PBL) is  een kwantitatief, ruimtelijk energiemodel dat het energiegebruik en de bijbehorende CO₂-emissies van de gebouwde omgeving berekent op een gedetailleerd niveau.\n\nHet model integreert data over de bestaande bouwvoorraad (woningen, kantoren, winkels, industrie), de energetische prestaties van gebouwen, de aanwezige verwarmings- en koelsystemen, en ruimtelijke kenmerken. Hiermee maakt het het mogelijk om scenario's voor de warmtetransitie te doorrekenen en de impact van beleidsmaatregelen te analyseren. Het biedt zo inzicht in de toekomstige energievraag en emissies per regio, wat essentieel is voor het plannen van de transitie naar duurzame warmtebronnen en het verminderen van de klimaatimpact van de gebouwde omgeving.",
    linkText: "",
    link: "https://www.pbl.nl/publicaties/het-vesta-mais-ruimtelijk-energiemodel-voor-de-gebouwde-omgeving-algemene-beschrijving",
    remarks: "Het Vesta MAIS-model helpt de gemeentelijke ambtenaar door een data-gedreven onderbouwing te bieden voor de lokale warmtetransitie, waardoor van kwalitatieve schattingen naar kwantitatief onderbouwde strategieën kan worden overgegaan. Het model stelt de ambtenaar in staat om de effecten van verschillende warmtescenario's, zoals warmtenetten of all-electric oplossingen, op de lokale energievraag en emissies nauwkeurig door te rekenen en zo gebiedsgericht te prioriteren welke buurten het meest geschikt zijn voor specifieke maatregelen. Daarnaast faciliteert het het objectief evalueren van beleidsimpact en het onderbouwen van communicatie met stakeholders met concrete cijfers, wat zorgt voor een efficiëntere en doelgerichtere inrichting van de warmtetransitie binnen de gemeente.",
    aiDetaillering: {
      description: "Vesta MAIS is ontwikkeld door het Planbureau voor de Leefomgeving (PBL), oorspronkelijk vanaf 2010, om te verkennen hoe de gebouwde omgeving tegen de laagst mogelijke kosten klimaatneutraal kan worden verwarmd. Het model berekent per gebied energieverbruik, CO₂-uitstoot en de techno-economische kosten van maatregelen voor woningen en utiliteitsgebouwen tot 2050, met gevolgen voor de warmte-, gas- en elektriciteitsinfrastructuur. Volgens het functioneel ontwerp is het nieuwere model HESTIA (PBL/TNO) bedoeld om op termijn onder meer Vesta MAIS te vervangen.",
      organization: "Planbureau voor de Leefomgeving (PBL)",
      sources: [
        { url: "https://www.pbl.nl/publicaties/het-vesta-mais-ruimtelijk-energiemodel-voor-de-gebouwde-omgeving-algemene-beschrijving", label: "Vesta MAIS – algemene beschrijving (PBL)" },
        { url: "https://www.pbl.nl/modellen/vesta", label: "Modellenpagina Vesta – PBL" },
      ],
    },
  },
  {
    id: "hestia",
    name: "Functioneel Ontwerp HESTIA 1.0 - Ruimtelijk energiemodel voor de gebouwde omgeving",
    domain: "energie",
    processStep: "oplossingsrichtingen",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["data_gedreven"],
    description: "Het opsen source HESTIA-model van TNO en PBL levert een breed scala aan effectenberekeningen, waaronder de kosten en energiebesparing bij verschillende beleidsbeslissingen. Het model wordt onder andere ingezet voor de Klimaat- en Energie Verkenning (KEV).\n\nNaast de ontwikkeling van het gas-, elektriciteits- en warmteverbruik rekent Hestia ook de kosten en baten van investeringen voor alle relevante factoren en vele andere aspecten gerelateerd aan de verduurzaming van woningen. Om tot effectief beleid te komen en gericht besluiten te nemen zijn betrouwbare inzichten nodig in de effecten van verschillende maatregelen. Met perspectieven en scenario’s worden daarvoor prognoses gemaakt, gebaseerd op inputdata uit de praktijk en gevalideerde fysische modellen.",
    linkText: "",
    link: "https://www.pbl.nl/publicaties/functioneel-ontwerp-hestia-10",
    remarks: "Het HESTIA-rekenmodel, ontwikkeld door TNO en het PBL, biedt de gemeentelijke ambtenaar een gedetailleerd ruimtelijk simulatiekader om de effecten van de energietransitie in de gebouwde omgeving op wijk- en gemeenteniveau nauwkeurig te kwantificeren. \n\nHet model stelt de ambtenaar in staat om diverse transitiepaden en beleidsmaatregelen, zoals de overstap naar all-electric of warmtenetten, te doorrekenen op zowel energieverbruik als de financiële consequenties voor huishoudens en de overheid. Hierdoor kan het beleid objectief worden onderbouwd met data in plaats van schattingen, kunnen investeringslasten en besparingen worden ingeschat voor het opstellen van betaalbare warmteplannen, en kan de woningvoorraad op wijkniveau worden gemodelleerd om maatregelen gerichter in te zetten.\n\nDaarnaast faciliteert Hestia het monitoren van de lokale voortgang ten opzichte van landelijke doelen en de Klimaat- en Energieverkenning, waardoor de ambtenaar tijdig kan bijsturen en de energietransitie realistischer, eerlijker en doelgerichter kan worden ingericht.",
    aiDetaillering: {
      description: "HESTIA is een gezamenlijk model van PBL en TNO en wordt open source en open data aangeboden. Het simuleert op woningniveau alle woningen in Nederland op basis van ruimtelijke databestanden zoals de BAG, en berekent de ontwikkeling van gas-, elektriciteits- en warmteverbruik plus kosten en baten van verduurzamingsinvesteringen voor alle relevante actoren. Volgens het functioneel ontwerp (gepubliceerd augustus 2023) is HESTIA ontwikkeld om het SAWEC-model en op termijn het Vesta MAIS-model te vervangen.",
      organization: "PBL (Planbureau voor de Leefomgeving) en TNO",
      sources: [
        { url: "https://www.pbl.nl/publicaties/functioneel-ontwerp-hestia-10", label: "Functioneel ontwerp HESTIA 1.0 – PBL" },
        { url: "https://www.pbl.nl/modellen/hestia", label: "Modellenpagina HESTIA – PBL" },
      ],
    },
  },
  {
    id: "egk-tool",
    name: "Eindgebruikerskostentool (EGK-tool)",
    domain: "energie",
    processStep: "beleids_probleemanalyse",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["data_gedreven"],
    description: "De Eindgebruikerskostentool (EGK-tool) is een digitaal rekeninstrument dat gemeenten en andere overheden in staat stelt om de totale financiële impact van de energietransitie voor individuele huishoudens en bedrijven nauwkeurig te berekenen.\n\nDe tool gaat verder dan alleen de energierekening; ze berekent de totale woonlasten door de eenmalige investeringskosten (voor isolatie, warmtepomp, aansluiting) en de terugkerende energiekosten (gas, elektriciteit, warmte) te combineren en te vergelijken met het besteedbaar inkomen van de bewoner. Het centrale doel is om te toetsen of een bepaalde transitieoptie (bijvoorbeeld een warmtenet of all-electric) betaalbaar blijft voor de bewoner, en om specifiek kwetsbare groepen te identificeren die risico lopen op energiearmoede.",
    linkText: "",
    link: "https://www.volkshuisvestingnederland.nl/documenten/2025/10/01/achtergrondnotitie-data-tool-eindgebruikerskosten",
    remarks: "De EGK-tool vertaalt complexe energietechnische plannen naar een concreet beeld van de financiële draagkracht per huishouden, waardoor gemeenten hun warmteplannen kunnen sturen op betaalbaarheid en sociale rechtvaardigheid, in plaats van alleen op technische haalbaarheid. Het is het essentiële instrument om te voorkomen dat de energietransitie leidt tot onbetaalbare woonlasten.",
    aiDetaillering: {
      description: "De Eindgebruikerskostentool (EGK-tool) is sinds 2 oktober 2025 beschikbaar voor gemeenten en is ontwikkeld door het ministerie van Volkshuisvesting en Ruimtelijke Ordening (VRO) samen met TNO en RVO. De tool geeft inzicht in de jaarlijkse kosten en baten van verschillende warmteoplossingen voor bewoners, uitgesplitst naar buurt, woningtype en bouwjaar. Hij vervangt het eerdere Dashboard Eindgebruikerskosten uit 2021 en dient als informatiebron bij de onderbouwing van haalbaarheid en betaalbaarheid die gemeenten nodig hebben voor de aanwijsbevoegdheid onder de Wet gemeentelijke instrumenten warmtetransitie (Wgiw).",
      organization: "Ministerie van Volkshuisvesting en Ruimtelijke Ordening (VRO), TNO en RVO",
      sources: [
        { url: "https://www.volkshuisvestingnederland.nl/onderwerpen/verduurzamen-en-verbeteren/lokale-warmtetransitie/eindgebruikerskostentool", label: "Eindgebruikerskostentool – Volkshuisvesting Nederland" },
        { url: "https://www.volkshuisvestingnederland.nl/documenten/2025/10/01/achtergrondnotitie-data-tool-eindgebruikerskosten", label: "Achtergrondnotitie Data Tool Eindgebruikerskosten" },
      ],
    },
  },
  {
    id: "rev",
    name: "Ruimtelijke Energie Verkenner (REV)",
    domain: "energie",
    processStep: "oplossingsrichtingen",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["data_gedreven", "openbare_ruimte"],
    description: "De Ruimtelijke Energie Verkenner (REV) van TNO is een digitaal hulpmiddel dat ruimtelijke planning en het energienetwerk aan elkaar koppelt. Het instrument laat overheden en netbeheerders vooraf zien wat de impact van nieuwe plannen—zoals woonwijken of zonneparken—is op het (overvolle) energienet. Door deze data-gedreven scenario's visueel inzichtelijk te maken, fungeert de verkenner als een gezamenlijke taal. Hierdoor kunnen partijen vroegtijdig samenwerken en wordt energie-infrastructuur vanaf de allereerste ontwerpfase een sturend principe in de ruimtelijke ordening, wat netcongestie en vertraging helpt te voorkomen.",
    linkText: "",
    link: "https://www.esdl.nl/wp-content/uploads/2025/02/Ruimtelijke-Energie-Verkenner-TNO.pdf",
    remarks: "",
    aiDetaillering: {
      description: "De Ruimtelijke Energie Verkenner is ontwikkeld door TNO binnen het programma 'Ruimte voor Energie'. De tool geeft regionale overheden en netbeheerders inzicht in het effect van beleidsplannen (nieuwbouw, transitievisies warmte, RES, NAL, CES) op de energie-infrastructuur van de netbeheerders. De REV maakt gebruik van de door TNO ontwikkelde ESDL (Energy System Description Language) om het energiesysteem uniform te beschrijven, en brengt de technische, energetische, ruimtelijke, temporele en financiële aspecten samen.",
      organization: "TNO (programma Ruimte voor Energie)",
      sources: [
        { url: "https://www.esdl.nl/en/ruimte-voor-energie/", label: "Ruimte voor Energie – ESDL" },
        { url: "https://www.esdl.nl/wp-content/uploads/2025/02/Ruimtelijke-Energie-Verkenner-TNO.pdf", label: "Ruimtelijke Energie Verkenner – TNO (factsheet PDF)" },
      ],
    },
  },
  {
    id: "warmingup-design-toolkit",
    name: "WarmingUP Design Toolkit",
    domain: "energie",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["data_gedreven"],
    description: "De WarmingUP Design Toolkit is een geïntegreerd softwarepakket waarmee complexe, duurzame warmtenetten sneller, goedkoper en met minder risico ontworpen kunnen worden. De tool brengt het hele systeem—van verschillende duurzame warmtebronnen en opslag tot de exacte route van de leidingen—samen in één digitale omgeving. Door op basis van open-source modellen dynamisch door te rekenen wat er door het jaar heen gebeurt met temperatuur, druk en kosten, biedt de toolkit een transparante, gedeelde waarheid voor warmtebedrijven en overheden. Dit helpt om collectieve warmtesystemen optimaal in te richten, CO2-uitstoot extra te verlagen en de totale aanlegkosten met 10% tot 25% te verminderen.",
    linkText: "",
    link: "https://www.warmingup.info/designtoolkit",
    remarks: "",
    aiDetaillering: {
      description: "De WarmingUP Design Toolkit is ontwikkeld binnen het nationale innovatieprogramma WarmingUP (2020-2023), waarin circa 38 partijen uit de warmteketen samenwerkten aan kennis over collectieve, duurzame warmtesystemen. De toolkit bundelt tools voor planning, ontwerp, hydraulisch dimensioneren en regeling van warmtenetten in één softwarepakket en werd als betaversie gebruikt door onder meer gemeenten en adviespartijen. Doorontwikkeling richting een 1.0-versie vindt plaats onder het opvolgende programma Nederlands Warmtenetwerk, met TNO, Deltares en The People Group als betrokken ontwikkelaars.",
      organization: "WarmingUP-consortium; doorontwikkeling door TNO, Deltares en The People Group",
      sources: [
        { url: "https://www.warmingup.info/designtoolkit", label: "Design Toolkit – WarmingUP" },
        { url: "https://www.warmingup.info/actueel/94/betaversie-design-toolkit-gelanceerd", label: "Betaversie Design Toolkit gelanceerd – WarmingUP" },
      ],
    },
  },
  {
    id: "vision-network-analysis",
    name: "Vision Network Analysis",
    domain: "energie",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["data_gedreven"],
    description: "Vision Network Analysis is een programma voor planning, ontwerp en beheer van elektriciteitsnetten. Met het pakket kunnen zeer eenvoudig loadflow- en kortsluitberekeningen, storings- en betrouwbaarheidsanalyses worden uitgevoerd. Met Vision Network Analysis kan de gebruiker bovendien de werking van beveiligingen simuleren. Vision Network Analysis is geschikt voor grote en kleine netten; het wordt gebruikt voor transport-, distributie- en industriële netten.",
    linkText: "",
    link: "https://www.phasetophase.nl/producten-diensten/producten/vision-network-analysis/",
    remarks: "",
    aiDetaillering: {
      description: "Vision Network Analysis is commerciële software voor planning, ontwerp en beheer van elektriciteitsnetten, ontwikkeld door Phase to Phase B.V. uit Arnhem (onderdeel van Technolution). Het pakket voert onder meer load-flow-, kortsluit- en betrouwbaarheidsberekeningen uit voor transport-, distributie- en industriële netten. Typische gebruikers zijn netbeheerders, ingenieurs- en adviesbureaus en industriële organisaties; een licentie is vereist, zonder licentie draait het alleen in demonstratiemodus.",
      organization: "Phase to Phase B.V. (onderdeel van Technolution)",
      sources: [
        { url: "https://www.phasetophase.nl/producten-diensten/producten/vision-network-analysis/", label: "Vision Network Analysis – Phase to Phase" },
      ],
    },
  },
  {
    id: "gaia-lv-network-design",
    name: "Gaia LV Network Design",
    domain: "energie",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["data_gedreven"],
    description: "Gaia LV Network Design richt zich op de 'haarvaten' van het elektriciteitsnet, de laagspanningsnetten tot aan de meterkast. Dit model simuleert het gelijktijdige gedrag van moderne stroomverbruikers en -opwekkers, waardoor netbeheerders direct zien of een netwerk toekomstbestendig is bij een snelle toename van zonnepanelen, warmtepompen en laadpalen. Gekoppeld aan specifieke spanningsverlies- en kortsluitberekeningen controleert dit model continu of kabels dik genoeg zijn en of de zekeringen in de wijkkasten bij overbelasting nog op tijd aanspreken.",
    linkText: "",
    link: "https://www.phasetophase.nl/producten-diensten/producten/gaia-lv-network-design/",
    remarks: "",
    aiDetaillering: {
      description: "Gaia LV Network Design is commerciële software voor planning, ontwerp en beheer van distributie- en industriële laagspanningsnetten, ontwikkeld door Phase to Phase B.V. uit Arnhem (onderdeel van Technolution). Het pakket berekent onder meer spanningsval, componentbelasting en veiligheid van laagspanningsnetten en is samen met distributiebedrijven en de industrie ontwikkeld. Gebruikers zijn vooral netbeheerders, industriële bedrijven en ingenieursbureaus; volledige functionaliteit vereist een licentie.",
      organization: "Phase to Phase B.V. (onderdeel van Technolution)",
      sources: [
        { url: "https://www.phasetophase.nl/producten-diensten/producten/gaia-lv-network-design/", label: "Gaia LV Network Design – Phase to Phase" },
      ],
    },
  },
  {
    id: "vision-cloud-solution",
    name: "Vision Cloud & Navigator",
    domain: "energie",
    processStep: "interventies",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["data_gedreven"],
    description: "Vision Cloud Solution berekent, analyseert en beoordeelt geheel automatisch MS- en LS-netten. Assetmanagers, netontwerpers, relatiemanagers en storingsmonteurs maar bijvoorbeeld ook voorlichters krijgen hierdoor op grote en kleine schaal inzicht in actueel en toekomstig gedrag van hun netten.\nVision Cloud Solution kan worden gebruikt voor netplanning, netontwerp en duurzame gebiedsontwikkeling. Door de heldere, eenduidige presentatie bevordert Vision Cloud Solution bovendien de communicatie en daarmee de samenwerking tussen DSO’s, lokale overheden, woningcorporaties en het publiek. Zo kan bijvoorbeeld snel en overtuigend worden bepaald of de Regionale EnergieStrategieën (RES), die de dertig energieregio’s volgens het Klimaatakkoord zullen ontwikkelen, in de bestaande netten zullen kunnen worden verwezenlijkt.",
    linkText: "",
    link: "https://www.phasetophase.nl/producten-diensten/producten/vision-cloud-solution/",
    remarks: "",
    aiDetaillering: {
      description: "Vision Cloud Solution is een commerciële webapplicatie van Phase to Phase B.V. uit Arnhem (onderdeel van Technolution) die middenspannings- en laagspanningsnetten volautomatisch doorrekent, analyseert en beoordeelt. De oplossing ondersteunt netontwikkeling en what-if-scenario's voor bijvoorbeeld zonnepanelen, warmtepompen en laadpalen. Ze richt zich op meerdere rollen binnen netbeheerders en faciliteert samenwerking tussen DSO's, gemeenten en woningcorporaties.",
      organization: "Phase to Phase B.V. (onderdeel van Technolution)",
      sources: [
        { url: "https://www.phasetophase.nl/producten-diensten/producten/vision-cloud-solution/", label: "Vision Cloud Solution – Phase to Phase" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════
  // WATER
  // ═══════════════════════════════════════════════════════════
  {
    id: "nationaal-water-programma",
    name: "Nationaal Water Programma (NWP)",
    domain: "water",
    processStep: "ambitie_visie_doel",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["domein_overstijgend"],
    description: "Het Nationaal Water Programma 2022–2027 geeft een overzicht van de ontwikkelingen binnen het waterdomein en legt nieuw ontwikkeld beleid vast. We werken aan schoon, veilig en voldoende water, dat klimaatadaptief en toekomstbestendig is. Ook is er aandacht voor de raakvlakken van water met andere sectoren.",
    linkText: "",
    link: "https://www.helpdeskwater.nl/onderwerpen/wetgeving-beleid/nationaal/nationaal-water-programma-2022-2027/",
    remarks: "Het NWP vormt de basis voor het principe dat water en bodem leidend moeten zijn bij ruimtelijke keuzes. Waar voorheen water pas achteraf 'technisch werd opgelost' bij een bouwproject, moet het nu het startpunt zijn.\n\nHet NWP (en de daaruit voortvloeiende instrumenten zoals de Landelijke maatlat groene en klimaatadaptieve gebouwde omgeving) geeft de gemeenteambtenaar de juridische en beleidsmatige ruggengraat om bij projectontwikkelaars of intern harde eisen te stellen aan waterberging, groenblauwe structuren en klimaatbestendig bouwen.",
    aiDetaillering: {
      description: "Het Nationaal Water Programma 2022-2027 beschrijft de hoofdlijnen van het nationale waterbeleid en het beheer van de rijkswateren, en is vastgesteld door de minister van Infrastructuur en Waterstaat op grond van de Waterwet, die eens per zes jaar een nationaal waterplan voorschrijft. Onder de Omgevingswet valt het NWP via het overgangsrecht uiteen in verplichte programma's, waaronder de stroomgebiedsbeheerplannen (KRW), de overstromingsrisicobeheerplannen en het Programma Noordzee. Het principe 'water en bodem sturend' werkt als leidend uitgangspunt door in de uitvoering en de volgende planperiode.",
      organization: "Ministerie van Infrastructuur en Waterstaat, in samenwerking met Rijkswaterstaat",
      sources: [
        { url: "https://iplo.nl/thema/water/beleid-regelgeving-water/programma-omgevingswet-water/nationaal-water-programma-2022-2027/", label: "Nationaal Water Programma 2022-2027 – IPLO" },
        { url: "https://iplo.nl/thema/water/beleid-regelgeving-water/programma-omgevingswet-water/nationaal-water-programma-2022-2027/nationaal-water-programma-2022-2027-totstandkoming/", label: "Totstandkoming en wettelijke grondslag NWP – IPLO" },
      ],
    },
  },
  {
    id: "regionale-waterprogrammas",
    name: "Regionale Waterprogramma's",
    domain: "water",
    processStep: "ambitie_visie_doel",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["domein_overstijgend"],
    description: "Een Regionaal Waterprogramma (RWP) is een wettelijk verplicht plan onder de Omgevingswet dat niet door het waterschap, maar door de provincie (Gedeputeerde Staten) wordt opgesteld.\n\nWaar het Waterbeheerprogramma van het waterschap zich richt op de concrete uitvoering buiten, vormt het Regionale Waterprogramma van de provincie de strategische en coördinerende laag daarboven. Het vertaalt de provinciale Omgevingsvisie naar concreet waterbeleid voor de hele provincie en zorgt dat gemeenten en waterschappen op één lijn zitten. Dit programma wordt, net als dat van het waterschap, elke zes jaar geactualiseerd.\n\nBijgevoegd is een voorbeeld voor de Provincie Noord-Holland",
    linkText: "",
    link: "https://www.noord-holland.nl/bestanden/pdf/REGIONAAL%20WATERPROGRAMMA%20NOORD-HOLLAND%202022-2027%20febr%202022.pdf",
    remarks: "Waar het plan van het waterschap vooral praktisch en uitvoerend is, is het Regionaal Waterprogramma (RWP) van de provincie strategisch en kaderstellend. Voor een gemeenteambtenaar – met name beleidsadviseurs ruimtelijke ordening, milieu, juristen en strategen – is dit plan de bovenliggende wet- en regelgeving waarmee rekening gehouden moet worden.",
    aiDetaillering: {
      description: "Het regionale waterprogramma is een verplicht programma onder de Omgevingswet (artikel 3.8): Gedeputeerde Staten van elke provincie moeten het vaststellen om Europese richtlijnen als de Kaderrichtlijn Water en de Grondwaterrichtlijn uit te voeren en het provinciale waterbeleid vast te leggen. Het programma coördineert de gebiedsgerichte taakuitoefening van gemeenten en waterschappen en wordt iedere zes jaar geactualiseerd. Het Regionaal Waterprogramma Noord-Holland 2022-2027 (vastgesteld februari 2022) is hiervan een voorbeeld.",
      organization: "Provincies (Gedeputeerde Staten); in het voorbeeld Provincie Noord-Holland",
      sources: [
        { url: "https://iplo.nl/thema/water/beleid-regelgeving-water/programma-omgevingswet-water/regionaal-waterprogramma/", label: "Regionaal waterprogramma (wettelijke grondslag) – IPLO" },
        { url: "https://www.noord-holland.nl/bestanden/pdf/REGIONAAL%20WATERPROGRAMMA%20NOORD-HOLLAND%202022-2027%20febr%202022.pdf", label: "Regionaal Waterprogramma Noord-Holland 2022-2027 (PDF)" },
      ],
    },
  },
  {
    id: "waterbeheerprogramma-waterschappen",
    name: "Waterbeheerprogramma's Waterschappen",
    domain: "water",
    processStep: "beleidskeuze",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["domein_overstijgend"],
    description: "Het Waterbeheerprogramma (WBP) is een wettelijk verplicht plan dat elk waterschap in Nederland eens in de zes jaar opstelt (als instrument onder de Omgevingswet).\n\nHet hoofddoel van een waterbeheerprogramma is het concreet en operationeel maken van het waterbeleid voor de eigen regio. Het vormt de brug tussen strategische langetermijnvisies (van het Rijk en de provincies) en de daadwerkelijke uitvoering buiten in het veld. In dit programma legt het waterschap voor een periode van zes jaar vast welke doelen ze willen bereiken, welke maatregelen ze gaan nemen en hoeveel dit gaat kosten.\n\nHet programma beschrijft hoe het waterschap zijn wettelijke kerntaken uitvoert en garandeert. Deze taken vallen uiteen in vier pijlers:\n- Bescherming tegen overstromingen (Veiligheid)\n- Voldoende water (Waterkwantiteit)\n- Schoon en gezond water (Waterkwaliteit)\n- Zuiveren van afvalwater\n\nHet uiteindelijke doel van het programma is om de regio klimaatrobuust, veilig en leefbaar te houden voor inwoners, ondernemers en de natuur.\n\nBijgevoegd is een voorbeeld voor Hoogheemraadschap Delfland",
    linkText: "",
    link: "https://wbp6.hhdelfland.nl/files/hhd-2223-wbp6-hoofdlijnen-toegankelijk-wcag.pdf",
    remarks: "Voor een gemeenteambtenaar – en dan met name degenen die werken binnen ruimtelijke ordening, stadsontwikkeling, klimaatadaptatie of het beheer van de openbare ruimte – is het Waterbeheerprogramma (WBP) van het waterschap een essentieel document.\n\nOnder de Omgevingswet en met het landelijke principe 'water en bodem sturend' kunnen gemeenten en waterschappen niet meer los van elkaar opereren. Het WBP biedt de ambtenaar een concrete handleiding, kader en kansen voor samenwerking.",
    aiDetaillering: {
      description: "Waterschappen stellen voor de watersystemen die zij beheren een waterbeheerprogramma vast; dit is een verplicht programma onder de Omgevingswet (artikel 3.7) dat elke zes jaar wordt geactualiseerd. Het Besluit kwaliteit leefomgeving bepaalt welke maatregelen erin moeten staan, onder meer de uitvoering van de Kaderrichtlijn Water en de Grondwaterrichtlijn; het waterschap moet daarbij rekening houden met het regionale waterprogramma van de provincie. Het WBP6 van Hoogheemraadschap Delfland (2022-2027) is vastgesteld door de Verenigde Vergadering op 10 maart 2022.",
      organization: "Waterschappen (algemeen bestuur); in het voorbeeld Hoogheemraadschap van Delfland",
      sources: [
        { url: "https://iplo.nl/thema/water/beleid-regelgeving-water/programma-omgevingswet-water/waterbeheerprogramma/", label: "Waterbeheerprogramma van het waterschap – IPLO" },
        { url: "https://wbp6.hhdelfland.nl/files/hhd-2223-wbp6-hoofdlijnen-toegankelijk-wcag.pdf", label: "Delfland WBP6 2022-2027 – Hoofdlijnen (PDF)" },
      ],
    },
  },
  {
    id: "trowa",
    name: "TROWA - Handreiking waterschapsverordening",
    domain: "water",
    processStep: "beleidskeuze",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["data_gedreven"],
    description: "TROWA staat voor Transitieondersteuning Omgevingswet Waterschappen. Dit is een grootschalig project van de Unie van Waterschappen en Het Waterschapshuis. Het is in het leven geroepen om de 21 Nederlandse waterschappen te ondersteunen bij de invoering van de Omgevingswet, met een sterke focus op het digitaal en doelgericht inrichten van de nieuwe waterschapsverordening.\n\nHoewel TROWA dus primair een programma voor en door de waterschappen is, is het resultaat ervan cruciaal voor gemeenten. De Omgevingswet eist immers dat overheden opereren als 'één overheid'.\n\nEen gemeente vult het DSO met regels uit het gemeentelijke Omgevingsplan. Het waterschap doet hetzelfde met de Waterschapsverordening. TROWA heeft een landelijke methode ontwikkeld voor 'doelgerichte digitale regelgeving'.\n\nTROWA dwingt de waterschappen hun regels op exact dezelfde technische en logische manier op te bouwen als het Rijk en de gemeenten. Zo sluiten de systemen op elkaar aan. Als een inwoner in het omgevingsloket een vergunningcheck doet, lopen de gemeentelijke regels en de waterschapsregels vloeiend in elkaar over zonder dat de boel vastloopt.",
    linkText: "",
    link: "https://trowa.hetwaterschapshuis.nl/35-doelgerichte-digitale-regelgeving-en-de-omgevingswetarchitectuur-%20en%20informatiemodel%20ontwikkeld.%20Hiermee%20willen%20we%20de%20landelijke%20standaarden%20vertalen%20naar%20de%20unieke%20situatie%20van%20elk%20waterschap.",
    remarks: "",
    aiDetaillering: {
      description: "TROWA (Transitieondersteuning Omgevingswet Waterschappen) is ontwikkeld door Het Waterschapshuis, de gezamenlijke ICT-uitvoeringsorganisatie van de 21 waterschappen, samen met de Unie van Waterschappen. Het biedt een handreiking, de methodiek van 'doelgerichte digitale regelgeving', modellen en praktijkvoorbeelden om aan te sluiten op het Digitaal Stelsel Omgevingswet (DSO). De methodiek koppelt regels aan beleidsdoelen om inzichtelijkheid, voorspelbaarheid en gebruiksgemak te vergroten en snellere, gebiedsgerichte besluitvorming mogelijk te maken.",
      organization: "Het Waterschapshuis (namens de 21 waterschappen), in samenwerking met de Unie van Waterschappen",
      sources: [
        { url: "https://trowa.hetwaterschapshuis.nl/35-doelgerichte-digitale-regelgeving-en-de-omgevingswet", label: "Doelgerichte digitale regelgeving en de Omgevingswet – TROWA" },
        { url: "https://trowa.hetwaterschapshuis.nl/", label: "TROWA – Het Waterschapshuis" },
      ],
    },
  },
  {
    id: "handboek-water-ruimtelijke-plannen",
    name: "Handboek Water in ruimtelijke plannen Inspiratie en adviesdocument bij de Weging van het Waterbelang - Hoogheemraadschap De Stichtse Rijnlanden",
    domain: "water",
    processStep: "probleemanalyse",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "Handboek dat de handvatten biedt om invulling te kunnen geven aan het principe ‘water en bodem sturend’.\nHet klimaat wordt grilliger: het wordt warmer, natter én droger. Daar zullen we steeds meer rekening mee moeten houden bij ruimtelijke ontwikkelingen. Er zal letterlijk meer ruimte moeten komen voor water(berging). Ook willen we dat de waterkwaliteit verbetert. Dat draagt ook bij aan gezondheid, leefbaarheid en biodiversiteit. Water en bodem zijn\nsturend bij ruimtelijke ontwikkelingen.",
    linkText: "",
    link: "https://www.hdsr.nl/publish/pages/114380/2023_03_23_handboek_water_in_ruimtelijke_plannen_spreads.pdf",
    remarks: "",
    aiDetaillering: {
      description: "Ontwikkeld door Hoogheemraadschap De Stichtse Rijnlanden en gepubliceerd in maart 2023 als opvolger van eerdere handboeken. Het is uitdrukkelijk een inspiratie- en adviesdocument, geen verplicht toetsingskader, voor gemeenten, ontwikkelaars, adviesbureaus en provincies bij het opstellen van ruimtelijke plannen en omgevingsplannen. De actualisatie werd ingegeven door de komst van de Omgevingswet, het principe 'water en bodem sturend' en afspraken over duurzaam bouwen, en behandelt thema's als klimaatadaptatie, oppervlaktewater, waterkwaliteit en -veiligheid, bodem en grondwater.",
      organization: "Hoogheemraadschap De Stichtse Rijnlanden (HDSR)",
      sources: [
        { url: "https://www.hdsr.nl/@162617/nieuw-handboek-water-ruimtelijke-plannen/", label: "Nieuw handboek 'Water in ruimtelijke plannen' – HDSR" },
        { url: "https://www.hdsr.nl/publish/pages/114380/2023_03_23_handboek_water_in_ruimtelijke_plannen_spreads.pdf", label: "Handboek Water in ruimtelijke plannen (PDF, 2023)" },
      ],
    },
  },
  {
    id: "weging-waterbelang-delfland",
    name: "Handreiking weging van het waterbelang voor gemeenten - Hoogheemraadschap van Delfland",
    domain: "water",
    processStep: "probleemanalyse",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "",
    linkText: "",
    link: "",
    remarks: "",
    aiDetaillering: {
      description: "Uitgegeven door het Hoogheemraadschap van Delfland; de vigerende definitieve versie dateert van 2025. Het is een handreiking (advies, geen zelfstandig bindend kader) die gemeenten helpt het waterbelang expliciet en volwaardig mee te wegen in ruimtelijke besluiten. Onder de Omgevingswet is de klassieke watertoets vervangen door de 'weging van het waterbelang'; de handreiking beschrijft hoe gemeenten daarbij het advies van de waterbeheerder betrekken en alle relevante wateraspecten afwegen, in lijn met het principe water en bodem sturend. Let op: de brondata bevat voor dit item geen omschrijving en geen link; onderstaande bronnen zijn aanvullend opgezocht en geverifieerd.",
      organization: "Hoogheemraadschap van Delfland",
      sources: [
        { url: "https://www.hhdelfland.nl/publish/pages/1520/handreiking_weging_waterbelang_hoofdtekst_definitieve_versie_met_voorkant.pdf", label: "Handreiking weging van het waterbelang – hoofdtekst (PDF)" },
        { url: "https://www.hhdelfland.nl/over-ons/beleid/beleid/", label: "Beleid en handreikingen – Hoogheemraadschap van Delfland" },
      ],
    },
  },
  {
    id: "maatlat-klimaatadaptieve-gebouwde-omgeving",
    name: "Maatlat groene klimaatadaptieve gebouwde omgeving",
    domain: "water",
    processStep: "oplossingsrichtingen",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "De maatlat biedt houvast voor overheden, woningcorporaties en partijen uit de bouw zoals projectontwikkelaars. De maatlat is nodig om beter voorbereid te zijn op de gevolgen van klimaatverandering. Zo kunnen we ook in de toekomst in een veilige, gezonde én groene omgeving blijven wonen en werken. \n\nDe maatlat maakt duidelijk hoe klimaatadaptief bouwen eruitziet. Het instrument beschrijft doelen en prestatie-eisen, en geeft richtlijnen voor de thema’s wateroverlast, droogte, hitte, biodiversiteit, bodemdaling en gevolgbeperking overstromingen. \n\nDe maatlat schrijft geen specifieke maatregelen voor. Daardoor blijft er lokaal ruimte voor maatwerk en krijgen innovatieve en slimme oplossingen alle ruimte.",
    linkText: "",
    link: "https://klimaatadaptatienederland.nl/actueel/actueel/nieuws/2023/webinar-landelijke-maatlat-gemist/",
    remarks: "",
    aiDetaillering: {
      description: "Opgesteld door de adviesbureaus TAUW en Arcadis in opdracht van de ministeries van BZK, IenW en LNV, en op 23 maart 2023 aangeboden aan de Tweede Kamer. De maatlat beschrijft doelen, prestatie-eisen en richtlijnen voor klimaatadaptief en groen bouwen en sluit aan op het principe water en bodem sturend. De maatlat is niet wettelijk verplicht maar een advieskader; het kabinet besloot in april 2025 de maatlat te versoberen. Toepassing kan onder de Omgevingswet via omgevingsplannen worden geborgd.",
      organization: "Ministeries van BZK, IenW en LNV (opgesteld door TAUW en Arcadis)",
      sources: [
        { url: "https://klimaatadaptatienederland.nl/aan-de-slag/overheden/klimaatadaptief-bouwen/landelijke-maatlat/", label: "Landelijke maatlat – Kennisportaal Klimaatadaptatie" },
        { url: "https://www.rijksoverheid.nl/documenten/kamerstukken/2023/03/23/kamerbrief-over-landelijke-maatlat-voor-een-groene-klimaatadaptieve-gebouwde-omgeving", label: "Kamerbrief Landelijke maatlat (23-03-2023) – Rijksoverheid" },
      ],
    },
  },
  {
    id: "gereedschapskist-wbs",
    name: "Gereedschapskist Water en Bodem Sturend",
    domain: "water",
    processStep: "oplossingsrichtingen",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["openbare_ruimte", "domein_overstijgend"],
    description: "De Gereedschapskist Water en Bodem Sturend (WBS) is een praktische set van acht concrete instrumenten. Deze is ontwikkeld door het landelijke Kennisnetwerk WBS (waarin onder andere Deltares, ministeries, provincies en waterschappen samenwerken).\n\nDe Gereedschapskist vertaalt  het WBS-principe naar de dagelijkse praktijk van ruimtelijke ordening, ontwerp en procesvoering.",
    linkText: "",
    link: "https://klimaatadaptatienederland.nl/publish/pages/189689/handreiking-stedelijk-waterbeheer-onder-de-omgevingswet.pdf",
    remarks: "",
    aiDetaillering: {
      description: "Ontwikkeld door het Kennisnetwerk Water en Bodem Sturend met onder meer Deltares, Rijkswaterstaat en het ministerie van IenW. De gereedschapskist bundelt circa acht instrumenten die overheden en ontwerpers helpen het principe water en bodem sturend (uit de Kamerbrief van november 2022) in de praktijk toe te passen, van inhoudelijke onderbouwing en ontwerpprincipes tot procesbegeleiding. Het is een hulpmiddel, geen verplichte norm. Let op: de link in de brondata verwijst naar de Handreiking Stedelijk waterbeheer; de juiste vindplaats staat hieronder.",
      organization: "Kennisnetwerk Water en Bodem Sturend / Deltares (i.s.m. Rijkswaterstaat en ministerie van IenW)",
      sources: [
        { url: "https://www.deltares.nl/expertise/publicaties/gereedschapskist-water-en-bodem-sturend-voor-onderbouwing-en-geleiding", label: "Gereedschapskist Water en Bodem Sturend – Deltares" },
        { url: "https://klimaatadaptatienederland.nl/publish/pages/232465/gereedschapskist-water-en-bodem-sturend_1.pdf", label: "Gereedschapskist Water en Bodem Sturend (PDF)" },
      ],
    },
  },
  {
    id: "handreiking-stedelijk-waterbeheer",
    name: "Handreiking Stedelijk waterbeheer onder de Omgevingswet",
    domain: "water",
    processStep: "beleidskeuze",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["openbare_ruimte"],
    description: "De Handreiking Stedelijk waterbeheer onder de Omgevingswet (opgesteld in opdracht van het ministerie van Infrastructuur en Waterstaat, in nauwe samenwerking met Stichting RIONED en de VNG) is de praktische handleiding voor de gemeentelijke water- en rioleringszorg.\n\nDe  essentie van de handreiking is: 'Hoe borgt, financieert en regelt een gemeenten de drie wettelijke gemeentelijke watertaken (afvalwater, hemelwater en grondwater) binnen de systematiek van de Omgevingswet? De Omgevingswet verandert immers de instrumenten en de manier van samenwerken, maar de zorgplichten zelf blijven onveranderd overeind. De handreiking legt uit hoe een gemeente  deze transitie vormgeeft en hoe je de nieuwe wet kunt gebruiken om de openbare ruimte klimaatbestendig in te richten.",
    linkText: "",
    link: "https://klimaatadaptatienederland.nl/publish/pages/189689/handreiking-stedelijk-waterbeheer-onder-de-omgevingswet.pdf",
    remarks: "",
    aiDetaillering: {
      description: "De handreiking is in april 2021 opgesteld door Sterk Consulting, Ambiënt Advies en FLO Legal in opdracht van het ministerie van Infrastructuur en Waterstaat, ter voorbereiding op de Omgevingswet. Een brede begeleidingscommissie met vertegenwoordigers van Stichting RIONED, gemeenten, provincies, waterschappen, het Rijk, omgevingsdiensten en drinkwaterbedrijven heeft meegelezen. De handreiking richt zich op beleidsmakers, juristen, waterbeheerders en rioleurs, met aandacht voor de omgevingsvisie, het rioleringsprogramma en het omgevingsplan, en expliciete aandacht voor kansen voor klimaatadaptatie en waterkwaliteit.",
      organization: "Ministerie van Infrastructuur en Waterstaat (opdrachtgever); opgesteld door Sterk Consulting, Ambiënt Advies en FLO Legal",
      sources: [
        { url: "https://klimaatadaptatienederland.nl/hulpmiddelen/overzicht/handreiking-stedelijk-waterbeheer-omgevingswet/", label: "Handreiking Stedelijk waterbeheer onder de Omgevingswet – Kennisportaal Klimaatadaptatie" },
        { url: "https://vng.nl/publicaties/handreiking-stedelijk-waterbeheer-onder-de-omgevingswet", label: "Publicatiepagina handreiking – VNG" },
      ],
    },
  },
  {
    id: "d-hydro",
    name: "D-HYDRO",
    domain: "water",
    processStep: "oplossingsrichtingen",
    policyTrack: "beleidsontwikkeling",
    crossCuttingThemes: ["data_gedreven"],
    description: "Met D-HYDRO kunnen onder meer wateroverlast door hevige neerslag en overstromingen door extreme afvoeren en dijkdoorbraken gesimuleerd worden. Hiermee sluit D-HYDRO aan bij het veranderend klimaat, waarbij extreme weersituaties vaker op zullen treden. \nDe D-HYDRO Suite 1D2D is ontwikkeld door Deltares, waarbij waterschappen, Het Waterschapshuis, gemeenten en vele adviesbureaus aan de ontwikkeling hebben bijgedragen.",
    linkText: "",
    link: "https://www.deltares.nl/software-en-data/producten/d-hydro-suite-1d2d",
    remarks: "",
    aiDetaillering: {
      description: "D-HYDRO Suite 1D2D wordt ontwikkeld en uitgegeven door kennisinstituut Deltares en is de beoogde opvolger van SOBEK voor het simuleren van waterstroming in een 1D-netwerk van waterlopen en kunstwerken, optioneel gekoppeld aan een 2D-terreinrooster. De software is open source beschikbaar; officieel goedgekeurde releases en ondersteuning verlopen via Deltares. Typische gebruikers zijn Rijkswaterstaat, waterschappen, provincies en adviesbureaus. Voor het geautomatiseerd opzetten van modellen bestaat de open source Python-module D-HyDAMO, die aansluit op het DAMO-datamodel van de waterschappen.",
      organization: "Deltares",
      sources: [
        { url: "https://www.deltares.nl/software-en-data/producten/d-hydro-suite-1d2d", label: "D-HYDRO Suite 1D2D – Deltares" },
        { url: "https://nhi.nu/modelcode/d-hydro-suite-1d2d/", label: "Modelcode D-HYDRO Suite (1D2D) – NHI" },
      ],
    },
  },
  {
    id: "damo",
    name: "DAMO (Data Afspraken Modelmatig Ondersteund)",
    domain: "water",
    processStep: "beleids_probleemanalyse",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["data_gedreven"],
    description: "DAMO  is het datamodel van en voor\nde waterschappen, waarin de kerngegevens voor de primaire processen en de wettelijke\nverplichtingen gestandaardiseerd staan omschreven.\n\nDe waterschappen streven naar het gestandaardiseerd vastleggen en ontsluiten van kerngegevens. Zij doen dit zowel ten behoeve van uitwisseling van informatie met\nderden, die vaak een wettelijk verplicht karakter heeft (bijv. INSPIRE) als voor de ondersteuning van de eigen primaire processen. Wetgevingen als INSPIRE, BGT, KRW, Waterwet, Omgevingswet, WIBON, etc. en gewenste dataleveringen aan landelijke en\nregionale programma’s eisen dat de waterschappen van de verschillende thema’s uniforme gegevens aanleveren. Daarnaast vragen ook de ontwikkelingen rondom een\n'Open Overheid' om een eenduidige ontsluiting van gegevens.",
    linkText: "",
    link: "https://damo.hetwaterschapshuis.nl/DAMO%202.6/Objectenhandboek%20DAMO%202.6/pdf/Objectenhandboek%20DAMO%202.6.pdf",
    remarks: "",
    aiDetaillering: {
      description: "DAMO is het gestandaardiseerde logische datamodel van en voor de waterschappen, ontwikkeld en beheerd door de waterschappen samen met Het Waterschapshuis. Het model is modulair opgebouwd (onder meer DAMO Watersysteem, DAMO Keringen en DAMO Afvalwaterketen) en verwerkt bestaande informatiestandaarden zoals IMWA, IMGeo, IMKL, GWSW, BGT en INSPIRE, zodat gegevens uniform kunnen worden vastgelegd en uitgewisseld ten behoeve van wettelijk verplichte leveringen en de eigen primaire processen. De gelinkte versie is DAMO 2.6.",
      organization: "De waterschappen en Het Waterschapshuis",
      sources: [
        { url: "https://damo.hetwaterschapshuis.nl/", label: "DAMO-portaal – Het Waterschapshuis" },
        { url: "https://damo.hetwaterschapshuis.nl/DAMO%202.6/Objectenhandboek%20DAMO%202.6/pdf/Objectenhandboek%20DAMO%202.6.pdf", label: "Objectenhandboek DAMO 2.6 (PDF)" },
      ],
    },
  },
  {
    id: "nhi",
    name: "Het Nederlands Hydrologisch Instrumentarium",
    domain: "water",
    processStep: "beleids_probleemanalyse",
    policyTrack: "beleidsdoorwerking",
    crossCuttingThemes: ["data_gedreven"],
    description: "Het Nederlands Hydrologisch Instrumentarium (NHI) is de verzameling van software en data voor het ontwikkelen van grondwater- en oppervlaktewatermodellen voor Nederland op landelijke en regionale schaal. Het NHI is bedoeld om de kennis van specialisten bij waterbeheerders, instituten en adviesbureau’s te bundelen om te komen tot kwalitatief goede instrumenten en data.",
    linkText: "",
    link: "https://nhi.nu",
    remarks: "",
    aiDetaillering: {
      description: "Het NHI is de gezamenlijke verzameling software en data voor het bouwen van grondwater- en oppervlaktewatermodellen van Nederland op landelijke en regionale schaal, met als kern het Landelijk Hydrologisch Model (LHM). Het is opgezet als open data en open software en wordt inhoudelijk mede ontwikkeld door Deltares en andere kennisinstituten. Achter het NHI staat een samenwerkingsovereenkomst van circa vijftig (semi-)overheidsorganisaties; sinds 1 januari 2024 voert Het Waterschapshuis het beheer en onderhoud. Het instrumentarium wordt onder meer gebruikt voor het Deltaprogramma en beleidsanalyses rond droogte, verzilting en klimaatverandering.",
      organization: "Beheer door Het Waterschapshuis; ontwikkeld met Deltares en partners (waterschappen, provincies, drinkwaterbedrijven, Rijkswaterstaat)",
      sources: [
        { url: "https://nhi.nu/", label: "Nederlands Hydrologisch Instrumentarium – officiële site" },
        { url: "https://nhi.nu/organisatie/", label: "Organisatie en beheer – NHI" },
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
  energie: "Elektriciteit & Energie",
  water: "Water",
  algemeen: "Algemeen",
};

export const domainColors: Record<Domain, string> = {
  mobiliteit: "bg-[#7ECBC0] text-[#004B87]",
  gezondheid: "bg-[#5CB85C] text-white",
  energie: "bg-[#F2A900] text-[#004B87]",
  water: "bg-[#0091B3] text-white",
  algemeen: "bg-[#004B87] text-white",
};

export const domainBorderColors: Record<Domain, string> = {
  mobiliteit: "border-[#7ECBC0]",
  gezondheid: "border-[#5CB85C]",
  energie: "border-[#F2A900]",
  water: "border-[#0091B3]",
  algemeen: "border-[#004B87]",
};

export const domainBgLight: Record<Domain, string> = {
  mobiliteit: "bg-[#E6F5F3]",
  gezondheid: "bg-[#E8F5E9]",
  energie: "bg-[#FFF6E0]",
  water: "bg-[#E0F4F9]",
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
