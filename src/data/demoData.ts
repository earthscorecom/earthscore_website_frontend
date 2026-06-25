// Demo data for the interactive section (3 industries x 4 features), bilingual.
// Ported verbatim from the handover's demo-data.js. Text fields are { de, en }.

export type Loc = { de: string; en: string }
export type Chip = { t: 'waste' | 'raw'; l: Loc }
export type Row = { n: Loc; meta: Loc; w: number; v: string; co2: string; chip?: Chip }
export type Metric = { k: Loc; before: number; after: number; fmt: string; betterDown?: boolean }
export type RankCombo = { title: Loc; context: Loc; rows: Row[] }
export type EffectCombo = { title: Loc; context: Loc; metrics: Metric[]; summary: { euro: Loc; co2: Loc } }
export type Combo = RankCombo | EffectCombo
export type Industry = { id: string; label: Loc; sub: Loc }
export type Feature = { id: string; label: Loc }
export type Badge = { label: Loc; variant: string }

export interface DemoData {
  industries: Industry[]
  features: Feature[]
  badges: Record<string, Badge>
  data: Record<string, Record<string, Combo>>
}

export const DEMO: DemoData = {
  "industries": [
    {
      "id": "mfg",
      "label": {
        "de": "Produzierendes Gewerbe",
        "en": "Manufacturing"
      },
      "sub": {
        "de": "CNC · Metall · Verarbeitung",
        "en": "CNC · metal · processing"
      }
    },
    {
      "id": "log",
      "label": {
        "de": "Logistik & Distribution",
        "en": "Logistics & distribution"
      },
      "sub": {
        "de": "Lager · Flotte · Mehrstandort",
        "en": "Warehouse · fleet · multi-site"
      }
    },
    {
      "id": "off",
      "label": {
        "de": "Bürobetrieb & Services",
        "en": "Office & services"
      },
      "sub": {
        "de": "Dienstleister · Mehrstandort",
        "en": "Service firms · multi-site"
      }
    }
  ],
  "features": [
    {
      "id": "blueprint",
      "label": {
        "de": "Circular Blueprints",
        "en": "Circular Blueprints"
      }
    },
    {
      "id": "research",
      "label": {
        "de": "Research",
        "en": "Research"
      }
    },
    {
      "id": "matching",
      "label": {
        "de": "Search & Match",
        "en": "Search & Match"
      }
    },
    {
      "id": "effect",
      "label": {
        "de": "Wirkungs-Simulation",
        "en": "Impact simulation"
      }
    }
  ],
  "badges": {
    "blueprint": {
      "label": {
        "de": "Entscheidungsreif · inkl. Payback",
        "en": "Decision-ready · incl. payback"
      },
      "variant": "neutral"
    },
    "research": {
      "label": {
        "de": "Externe Quellen",
        "en": "External sources"
      },
      "variant": "info"
    },
    "matching": {
      "label": {
        "de": "Geprüfte Partner",
        "en": "Verified partners"
      },
      "variant": "payment"
    },
    "effect": {
      "label": {
        "de": "Vorher / Nachher",
        "en": "Before / after"
      },
      "variant": "special"
    }
  },
  "data": {
    "mfg": {
      "blueprint": {
        "title": {
          "de": "Drei umsetzungsreife Handlungspakete",
          "en": "Three ready-to-implement action packages"
        },
        "context": {
          "de": "Priorisiert nach Wirtschaftlichkeit — inkl. CAPEX, Payback und Verantwortlichen.",
          "en": "Prioritised by economics — incl. CAPEX, payback and owners."
        },
        "rows": [
          {
            "n": {
              "de": "Druckluft-Leckage-Programm",
              "en": "Compressed-air leak programme"
            },
            "meta": {
              "de": "Payback 7 Mon. · CAPEX €280k",
              "en": "Payback 7 mo. · CAPEX €280k"
            },
            "w": 94,
            "v": "€480k",
            "co2": "540 t"
          },
          {
            "n": {
              "de": "Ventilatoren-Retrofit (EC-Motoren)",
              "en": "Fan retrofit (EC motors)"
            },
            "meta": {
              "de": "Payback 13 Mon. · CAPEX €180k",
              "en": "Payback 13 mo. · CAPEX €180k"
            },
            "w": 76,
            "v": "€160k",
            "co2": "240 t"
          },
          {
            "n": {
              "de": "Dachflächen-PV Eigenverbrauch",
              "en": "Rooftop PV for self-consumption"
            },
            "meta": {
              "de": "Payback 17 Mon. · CAPEX €520k",
              "en": "Payback 17 mo. · CAPEX €520k"
            },
            "w": 64,
            "v": "€210k",
            "co2": "380 t"
          }
        ]
      },
      "research": {
        "title": {
          "de": "Externe Treffer für Ihre Material-Anfrage",
          "en": "External hits for your material request"
        },
        "context": {
          "de": "Buy- oder Sell-Anfrage gestellt — der Research-Agent durchsucht externe Quellen nach passenden Handelspartnern und sortiert sie nach Match-Logik. Ohne Treffer bleibt die Anfrage aktiv, mit Verfügbarkeits-Alert.",
          "en": "Buy or sell request placed — the Research Agent scans external sources for matching trading partners and ranks them by match logic. With no hit, the request stays active, with an availability alert."
        },
        "rows": [
          {
            "n": {
              "de": "Aluminium-Späne EN AW-6060 → Abnehmer",
              "en": "Aluminium chips EN AW-6060 → buyer"
            },
            "meta": {
              "de": "Verkaufen · extern (NL) · 92% Match",
              "en": "Sell · external (NL) · 92% match"
            },
            "w": 92,
            "v": "€140k",
            "co2": "210 t"
          },
          {
            "n": {
              "de": "Edelstahl-Schrott 1.4301 ← Lieferant",
              "en": "Stainless scrap 1.4301 ← supplier"
            },
            "meta": {
              "de": "Kaufen · extern (DE) · 84% Match",
              "en": "Buy · external (DE) · 84% match"
            },
            "w": 84,
            "v": "€95k",
            "co2": "120 t"
          },
          {
            "n": {
              "de": "Kühlschmierstoff → Aufbereiter",
              "en": "Cutting fluid → reprocessor"
            },
            "meta": {
              "de": "Verkaufen · extern (DE) · 71% Match",
              "en": "Sell · external (DE) · 71% match"
            },
            "w": 71,
            "v": "€48k",
            "co2": "60 t"
          }
        ]
      },
      "matching": {
        "title": {
          "de": "Aktive Matches im Marketplace",
          "en": "Active matches in the marketplace"
        },
        "context": {
          "de": "KI-Matching mit geprüften Käufern und Partnern — inkl. Distanz und Transportkosten.",
          "en": "AI matching with verified buyers and partners — incl. distance and transport cost."
        },
        "rows": [
          {
            "n": {
              "de": "Aluminium-Späne → Gießerei",
              "en": "Aluminium chips → foundry"
            },
            "chip": {
              "t": "waste",
              "l": {
                "de": "Nebenstrom",
                "en": "By-product"
              }
            },
            "meta": {
              "de": "geprüfter Käufer · 38 km · 96% Match",
              "en": "verified buyer · 38 km · 96% match"
            },
            "w": 96,
            "v": "€140k",
            "co2": "210 t"
          },
          {
            "n": {
              "de": "PP-Mahlgut → Compoundeur",
              "en": "PP regrind → compounder"
            },
            "chip": {
              "t": "waste",
              "l": {
                "de": "Nebenstrom",
                "en": "By-product"
              }
            },
            "meta": {
              "de": "sortenrein · 24 km · 91% Match",
              "en": "single-grade · 24 km · 91% match"
            },
            "w": 91,
            "v": "€85k",
            "co2": "150 t"
          },
          {
            "n": {
              "de": "Reststahl S235 → Stahlhandel",
              "en": "Surplus steel S235 → steel trader"
            },
            "chip": {
              "t": "raw",
              "l": {
                "de": "Material",
                "en": "Material"
              }
            },
            "meta": {
              "de": "Abnahmevertrag · 54 km · 88% Match",
              "en": "offtake contract · 54 km · 88% match"
            },
            "w": 88,
            "v": "€70k",
            "co2": "120 t"
          }
        ]
      },
      "effect": {
        "title": {
          "de": "Wirkung: saniertes Druckluft- & Wärmenetz",
          "en": "Impact: upgraded compressed-air & heat network"
        },
        "context": {
          "de": "Ziehen Sie den Regler — die Werte interpolieren von heute zur Projektion nach Umsetzung.",
          "en": "Drag the slider — values interpolate from today to the projection after implementation."
        },
        "metrics": [
          {
            "k": {
              "de": "Energiekosten",
              "en": "Energy cost"
            },
            "before": 1.24,
            "after": 0.94,
            "fmt": "M",
            "betterDown": true
          },
          {
            "k": {
              "de": "CO₂-Ausstoß",
              "en": "CO₂ emissions"
            },
            "before": 3200,
            "after": 2480,
            "fmt": "t",
            "betterDown": true
          },
          {
            "k": {
              "de": "Druckluft-Verlust",
              "en": "Compressed-air loss"
            },
            "before": 32,
            "after": 9,
            "fmt": "%",
            "betterDown": true
          }
        ],
        "summary": {
          "euro": {
            "de": "−€300k / Jahr",
            "en": "−€300k / year"
          },
          "co2": {
            "de": "−720 t CO₂",
            "en": "−720 t CO₂"
          }
        }
      }
    },
    "log": {
      "blueprint": {
        "title": {
          "de": "Drei umsetzungsreife Handlungspakete",
          "en": "Three ready-to-implement action packages"
        },
        "context": {
          "de": "Priorisiert nach Wirtschaftlichkeit — inkl. CAPEX, Payback und Verantwortlichen.",
          "en": "Prioritised by economics — incl. CAPEX, payback and owners."
        },
        "rows": [
          {
            "n": {
              "de": "Dachflächen-PV Eigenverbrauch",
              "en": "Rooftop PV for self-consumption"
            },
            "meta": {
              "de": "Payback 16 Mon. · CAPEX €640k",
              "en": "Payback 16 mo. · CAPEX €640k"
            },
            "w": 92,
            "v": "€260k",
            "co2": "420 t"
          },
          {
            "n": {
              "de": "Routen- & Leerfahrt-Optimierung",
              "en": "Route & empty-run optimisation"
            },
            "meta": {
              "de": "Payback 5 Mon. · CAPEX €90k",
              "en": "Payback 5 mo. · CAPEX €90k"
            },
            "w": 78,
            "v": "€210k",
            "co2": "380 t"
          },
          {
            "n": {
              "de": "LED + Lichtsteuerung Lager",
              "en": "LED + lighting control, warehouse"
            },
            "meta": {
              "de": "Payback 9 Mon. · CAPEX €120k",
              "en": "Payback 9 mo. · CAPEX €120k"
            },
            "w": 70,
            "v": "€180k",
            "co2": "160 t"
          }
        ]
      },
      "research": {
        "title": {
          "de": "Externe Treffer für Ihre Material-Anfrage",
          "en": "External hits for your material request"
        },
        "context": {
          "de": "Buy- oder Sell-Anfrage gestellt — der Research-Agent durchsucht externe Quellen nach passenden Handelspartnern und sortiert sie nach Match-Logik. Ohne Treffer bleibt die Anfrage aktiv, mit Verfügbarkeits-Alert.",
          "en": "Buy or sell request placed — the Research Agent scans external sources for matching trading partners and ranks them by match logic. With no hit, the request stays active, with an availability alert."
        },
        "rows": [
          {
            "n": {
              "de": "Europaletten (gebraucht) ← Pooling-Partner",
              "en": "Euro pallets (used) ← pooling partner"
            },
            "meta": {
              "de": "Kaufen · extern · 90% Match",
              "en": "Buy · external · 90% match"
            },
            "w": 90,
            "v": "€120k",
            "co2": "90 t"
          },
          {
            "n": {
              "de": "PE-Stretchfolie → Recycler",
              "en": "PE stretch film → recycler"
            },
            "meta": {
              "de": "Verkaufen · extern (DE) · 82% Match",
              "en": "Sell · external (DE) · 82% match"
            },
            "w": 82,
            "v": "€48k",
            "co2": "130 t"
          },
          {
            "n": {
              "de": "Holz-Verpackung → Aufarbeiter",
              "en": "Wood packaging → refurbisher"
            },
            "meta": {
              "de": "Verkaufen · extern · 68% Match",
              "en": "Sell · external · 68% match"
            },
            "w": 68,
            "v": "€36k",
            "co2": "70 t"
          }
        ]
      },
      "matching": {
        "title": {
          "de": "Aktive Matches im Marketplace",
          "en": "Active matches in the marketplace"
        },
        "context": {
          "de": "KI-Matching mit geprüften Käufern und Partnern — inkl. Distanz und Transportkosten.",
          "en": "AI matching with verified buyers and partners — incl. distance and transport cost."
        },
        "rows": [
          {
            "n": {
              "de": "Gebrauchte Europaletten → Pooling",
              "en": "Used euro pallets → pooling"
            },
            "chip": {
              "t": "raw",
              "l": {
                "de": "Material",
                "en": "Material"
              }
            },
            "meta": {
              "de": "Pooling-Partner · 22 km · 94% Match",
              "en": "pooling partner · 22 km · 94% match"
            },
            "w": 94,
            "v": "€120k",
            "co2": "90 t"
          },
          {
            "n": {
              "de": "PE-Verpackungsfolie → Recycler",
              "en": "PE packaging film → recycler"
            },
            "chip": {
              "t": "waste",
              "l": {
                "de": "Nebenstrom",
                "en": "By-product"
              }
            },
            "meta": {
              "de": "sortenrein · 61 km · 90% Match",
              "en": "single-grade · 61 km · 90% match"
            },
            "w": 90,
            "v": "€48k",
            "co2": "130 t"
          },
          {
            "n": {
              "de": "PV-Überschuss → Nachbarbetrieb",
              "en": "PV surplus → neighbouring site"
            },
            "chip": {
              "t": "waste",
              "l": {
                "de": "Energie",
                "en": "Energy"
              }
            },
            "meta": {
              "de": "Direktlieferung · 0,8 km · 87% Match",
              "en": "direct supply · 0.8 km · 87% match"
            },
            "w": 87,
            "v": "€40k",
            "co2": "95 t"
          }
        ]
      },
      "effect": {
        "title": {
          "de": "Wirkung: Flotten- & Routenprogramm",
          "en": "Impact: fleet & route programme"
        },
        "context": {
          "de": "Ziehen Sie den Regler — die Werte interpolieren von heute zur Projektion nach Umsetzung.",
          "en": "Drag the slider — values interpolate from today to the projection after implementation."
        },
        "metrics": [
          {
            "k": {
              "de": "Logistikkosten",
              "en": "Logistics cost"
            },
            "before": 4.8,
            "after": 4.3,
            "fmt": "M",
            "betterDown": true
          },
          {
            "k": {
              "de": "CO₂-Ausstoß",
              "en": "CO₂ emissions"
            },
            "before": 6100,
            "after": 5200,
            "fmt": "t",
            "betterDown": true
          },
          {
            "k": {
              "de": "Leerfahrten",
              "en": "Empty runs"
            },
            "before": 23,
            "after": 11,
            "fmt": "%",
            "betterDown": true
          }
        ],
        "summary": {
          "euro": {
            "de": "−€500k / Jahr",
            "en": "−€500k / year"
          },
          "co2": {
            "de": "−900 t CO₂",
            "en": "−900 t CO₂"
          }
        }
      }
    },
    "off": {
      "blueprint": {
        "title": {
          "de": "Drei umsetzungsreife Handlungspakete",
          "en": "Three ready-to-implement action packages"
        },
        "context": {
          "de": "Priorisiert nach Wirtschaftlichkeit — inkl. CAPEX, Payback und Verantwortlichen.",
          "en": "Prioritised by economics — incl. CAPEX, payback and owners."
        },
        "rows": [
          {
            "n": {
              "de": "Smart-HLK & Präsenzsteuerung",
              "en": "Smart HVAC & presence control"
            },
            "meta": {
              "de": "Payback 12 Mon. · CAPEX €86k",
              "en": "Payback 12 mo. · CAPEX €86k"
            },
            "w": 80,
            "v": "€72k",
            "co2": "70 t"
          },
          {
            "n": {
              "de": "Ökostrom + Lastmanagement",
              "en": "Green power + load management"
            },
            "meta": {
              "de": "Payback 6 Mon. · CAPEX €24k",
              "en": "Payback 6 mo. · CAPEX €24k"
            },
            "w": 66,
            "v": "€48k",
            "co2": "140 t"
          },
          {
            "n": {
              "de": "IT-Hardware Refurb-Kreislauf",
              "en": "IT-hardware refurb loop"
            },
            "meta": {
              "de": "Payback 8 Mon. · CAPEX €30k",
              "en": "Payback 8 mo. · CAPEX €30k"
            },
            "w": 52,
            "v": "€36k",
            "co2": "45 t"
          }
        ]
      },
      "research": {
        "title": {
          "de": "Externe Treffer für Ihre Material-Anfrage",
          "en": "External hits for your material request"
        },
        "context": {
          "de": "Buy- oder Sell-Anfrage gestellt — der Research-Agent durchsucht externe Quellen nach passenden Handelspartnern und sortiert sie nach Match-Logik. Ohne Treffer bleibt die Anfrage aktiv, mit Verfügbarkeits-Alert.",
          "en": "Buy or sell request placed — the Research Agent scans external sources for matching trading partners and ranks them by match logic. With no hit, the request stays active, with an availability alert."
        },
        "rows": [
          {
            "n": {
              "de": "Gebrauchtmobiliar ← Refurbisher",
              "en": "Used furniture ← refurbisher"
            },
            "meta": {
              "de": "Kaufen · extern · 86% Match",
              "en": "Buy · external · 86% match"
            },
            "w": 86,
            "v": "€40k",
            "co2": "42 t"
          },
          {
            "n": {
              "de": "Alt-IT → zertifizierter Aufkäufer",
              "en": "Old IT → certified buyer"
            },
            "meta": {
              "de": "Verkaufen · extern (DE) · 79% Match",
              "en": "Sell · external (DE) · 79% match"
            },
            "w": 79,
            "v": "€28k",
            "co2": "36 t"
          },
          {
            "n": {
              "de": "Tonerkartuschen → Rücknahme-Partner",
              "en": "Toner cartridges → take-back partner"
            },
            "meta": {
              "de": "Verkaufen · extern · 64% Match",
              "en": "Sell · external · 64% match"
            },
            "w": 64,
            "v": "€15k",
            "co2": "12 t"
          }
        ]
      },
      "matching": {
        "title": {
          "de": "Aktive Matches im Marketplace",
          "en": "Active matches in the marketplace"
        },
        "context": {
          "de": "KI-Matching mit geprüften Käufern und Partnern — inkl. Distanz und Transportkosten.",
          "en": "AI matching with verified buyers and partners — incl. distance and transport cost."
        },
        "rows": [
          {
            "n": {
              "de": "Alt-IT → zertifiziertes Refurbishment",
              "en": "Old IT → certified refurbishment"
            },
            "chip": {
              "t": "raw",
              "l": {
                "de": "Material",
                "en": "Material"
              }
            },
            "meta": {
              "de": "DSGVO-Löschung · 33 km · 95% Match",
              "en": "GDPR wipe · 33 km · 95% match"
            },
            "w": 95,
            "v": "€28k",
            "co2": "36 t"
          },
          {
            "n": {
              "de": "Gebrauchtmobiliar → Refurbisher",
              "en": "Used furniture → refurbisher"
            },
            "chip": {
              "t": "raw",
              "l": {
                "de": "Material",
                "en": "Material"
              }
            },
            "meta": {
              "de": "Abholung · 18 km · 92% Match",
              "en": "pickup · 18 km · 92% match"
            },
            "w": 92,
            "v": "€40k",
            "co2": "42 t"
          },
          {
            "n": {
              "de": "Kantinen-Bioabfall → Biogas",
              "en": "Canteen bio-waste → biogas"
            },
            "chip": {
              "t": "waste",
              "l": {
                "de": "Nebenstrom",
                "en": "By-product"
              }
            },
            "meta": {
              "de": "wöchentlich · 27 km · 86% Match",
              "en": "weekly · 27 km · 86% match"
            },
            "w": 86,
            "v": "€12k",
            "co2": "60 t"
          }
        ]
      },
      "effect": {
        "title": {
          "de": "Wirkung: Gebäude- & IT-Programm",
          "en": "Impact: building & IT programme"
        },
        "context": {
          "de": "Ziehen Sie den Regler — die Werte interpolieren von heute zur Projektion nach Umsetzung.",
          "en": "Drag the slider — values interpolate from today to the projection after implementation."
        },
        "metrics": [
          {
            "k": {
              "de": "Betriebskosten",
              "en": "Operating cost"
            },
            "before": 1.1,
            "after": 0.95,
            "fmt": "M",
            "betterDown": true
          },
          {
            "k": {
              "de": "CO₂-Ausstoß",
              "en": "CO₂ emissions"
            },
            "before": 540,
            "after": 410,
            "fmt": "t",
            "betterDown": true
          },
          {
            "k": {
              "de": "Energie / Arbeitsplatz",
              "en": "Energy / workstation"
            },
            "before": 100,
            "after": 76,
            "fmt": "idx",
            "betterDown": true
          }
        ],
        "summary": {
          "euro": {
            "de": "−€150k / Jahr",
            "en": "−€150k / year"
          },
          "co2": {
            "de": "−130 t CO₂",
            "en": "−130 t CO₂"
          }
        }
      }
    }
  }
}
