import type { ForesightScopeData } from "@fw-vision/widgets";

/**
 * DAI Compute sovereignty trajectory, rendered through the FW.VISION
 * ForesightScope. This is the visual for the pitch's "Pathway to Economic
 * Sovereignty" (Slide 7): a preferred trajectory that reaches economic
 * sovereignty in ~50 years, with a medium-term milestone of supply-chain
 * independence, beginning with regulatory approval and the first 50 nodes.
 *
 * The off-ramp trajectory captures the pitfall scenarios: when a binding
 * constraint (regulatory clarity, financing, enterprise SLA) is left
 * unaddressed, the storyline falls out of the preferred cone.
 *
 * Self-contained. History converges at the present (2026); the future cone
 * expands right. Scenarios sit on horizon rings by likelihood band.
 * Horizons of Concern: H1 (3-10yr), H2 (10-30yr), H3 (30-50yr).
 *
 * The `trajectories` field is a widgets 0.2.0 addition (named preferred /
 * off-ramp polylines). Typed as a superset so the module compiles whether or
 * not the installed .d.ts already declares the field.
 */

type ForesightTrajectory = {
  id: string;
  label: string;
  scenarioSequence: string[];
  kind: "preferred" | "offramp";
};

type ForesightScopeDataWithTrajectories = ForesightScopeData & {
  trajectories?: ForesightTrajectory[];
};

const BAND_LABELS = ["Probable", "Plausible", "Possible", "Preposterous"];

export const sovereigntyForesightData: ForesightScopeDataWithTrajectories = {
  title: "Pathway to Canadian economic sovereignty",
  description:
    "A 50-year trajectory from the first pilot nodes to vertically integrated sovereign compute. The medium-term milestone is supply-chain independence; the long-term aim is economic sovereignty.",
  presentDate: "2026-07-01",
  timeRange: { start: "2016-01-01", end: "2076-12-31" },
  coneLabels: {
    growth: "Preferred trajectory",
    crisis: "Off-ramp / pitfall",
  },
  mainThread: [
    { id: "mt-strategy-2017", date: "2017-01-01", label: "First national AI strategy (talent, not compute)", type: "decision" },
    { id: "mt-budget-2024", date: "2024-04-01", label: "Budget 2024 acknowledges the compute gap", type: "inflection" },
    { id: "mt-scip-2026", date: "2026-04-01", label: "$705M SCIP call for proposals", type: "milestone" },
    { id: "mt-now", date: "2026-07-01", label: "Present", type: "milestone" },
  ],
  presentCrossSection: {
    drivers: [
      { id: "pd-energy", label: "Cheapest clean energy in the G7", category: "economic", position: "top" },
      { id: "pd-climate", label: "Northward climate-niche migration", category: "social", position: "right" },
      { id: "pd-sovereignty", label: "CLOUD Act exposure and sovereignty", category: "political", position: "left" },
      { id: "pd-compute", label: "Zero systems in the global top 50", category: "technological", position: "bottom" },
    ],
  },
  horizons: [
    { id: "H1", date: "2033-01-01", label: "H1 (3-10yr)", bands: 4, bandLabels: BAND_LABELS },
    { id: "H2", date: "2046-01-01", label: "H2 (10-30yr)", bands: 4, bandLabels: BAND_LABELS },
    { id: "H3", date: "2062-01-01", label: "H3 (30-50yr)", bands: 4, bandLabels: BAND_LABELS },
  ],
  scenarios: [
    // --- H1: Foundation (0-10yr) ---
    {
      id: "sc-approval",
      label: "Regulatory approval + first 50 nodes",
      description:
        "CSA regulatory clarity is achieved and the first 50 financed node operators come online. Unit economics are proven at pilot scale.",
      horizonId: "H1",
      bandIndex: 0,
      angle: -18,
    },
    {
      id: "sc-stall",
      label: "Regulatory stall",
      description:
        "Securities classification is left unresolved. No financing partner will lend against uncertain collateral; the network never reaches minimum viable size.",
      horizonId: "H1",
      bandIndex: 2,
      angle: 30,
    },
    // --- H2: Network effect + supply-chain independence (10-30yr) ---
    {
      id: "sc-supply-independence",
      label: "Supply-chain independence",
      description:
        "Thousands of nodes create aggregate demand large enough to justify domestic procurement and chip packaging. Canada begins to supply its own equipment.",
      horizonId: "H2",
      bandIndex: 0,
      angle: -12,
    },
    {
      id: "sc-foreign-capture",
      label: "Foreign capture of the energy advantage",
      description:
        "Distributed participation fails to scale; Canadian clean energy continues to power foreign-owned data centres and revenue exits the country.",
      horizonId: "H2",
      bandIndex: 2,
      angle: 34,
    },
    // --- H3: Vertical integration (30-50yr) ---
    {
      id: "sc-economic-sovereignty",
      label: "Economic sovereignty",
      description:
        "Full vertical integration from generation through silicon. Sovereign compute standard exported to allied nations. Canada is prepared for climate-driven population growth.",
      horizonId: "H3",
      bandIndex: 1,
      angle: -8,
    },
    {
      id: "sc-permanent-colony",
      label: "Permanent digital colony",
      description:
        "Talent trained in Canada is commercialised elsewhere; infrastructure is rented from abroad indefinitely. The 100:1 investment gap compounds.",
      horizonId: "H3",
      bandIndex: 3,
      angle: 40,
    },
  ],
  trajectories: [
    {
      id: "preferred",
      label: "Preferred trajectory",
      scenarioSequence: ["sc-approval", "sc-supply-independence", "sc-economic-sovereignty"],
      kind: "preferred",
    },
    {
      id: "offramp",
      label: "Off-ramp / pitfall",
      scenarioSequence: ["sc-stall", "sc-foreign-capture", "sc-permanent-colony"],
      kind: "offramp",
    },
  ],
};
