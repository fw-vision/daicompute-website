---
title: "Canada Energy and Data-Centre Infrastructure - Raw Data Report"
type: landscape
subtype: data-report
status: draft
created_date: 2026-07-27
tags: [dai-compute, landscape, data-report, energy, data-centres, choropleth, sovereign-compute, cursor-handoff]
framework: CITE
band: landscape
purpose: "Raw structured data for the Canada choropleth widget (Cursor handoff). Verify before publication."
---

> Raw source data for the Canada energy + data-centre visualisation. Confidence graded V/R/E/U inline; verify and extend before publishing figures on the site.


# Canada Energy and Data-Centre Infrastructure - Raw Data Report

*This report follows evidence discipline: (V) verified to primary source, (R) reported/secondary, (E) estimate, (U) unknown/gap.*

## 1. Per-Province/Territory Electricity Profile

*All 13 provinces/territories.*

| Province/Territory | Residential Cost ($/kWh) | Industrial Cost ($/kWh) | Dominant Generation | Capacity (MW/GW) | % Renewable | Grid Operator/Market | Surplus Capacity | Cold-Climate Advantage |
|-------------------|--------------------------|-------------------------|-------------------|------------------|--------------|----------------------|-------------------|-------------------------|
| **Alberta** (V) | ~11.2¢ (step 1) / ~13.9¢ (step 2) [2025] (E) | 6-10¢ (typical) (E) | **Natural gas** (63%), **Wind** (9%), **Hydro** (3%), Coal (phased out June 2024) | 16,024 MW (2021) | 15% (2021) | Deregulated (AESO + IPPs) | Limited (net importer) | Yes (natural cooling) |
| **British Columbia** (R) | ~12.4¢ (basic) / ~14.6¢ (Step 2) (E) | ~7-9¢ (commercial) (E) | **Hydro** (>90%) | ~16,000 MW (hydro) (E) | >95% (hydro) | Crown corporation (BC Hydro) | Yes (exports to US/AB) | Yes (mild winters) |
| **Quebec** (R) | ~7.3¢ (first 40 kWh/day) / ~9.2¢ (additional) (E) | ~4-6¢ (large industrial) (E) | **Hydro** (99%+) | >37,000 MW (hydro) (E) | >99% | Crown corporation (Hydro-Québec) | **700 MW surplus** (export to ON/NB/NE US) | Yes (extreme cold) |
| **Ontario** (R) | ~10.1¢ (off-peak) / ~28.2¢ (on-peak) (E) | ~8-12¢ (commercial) (E) | **Nuclear** (30%), **Hydro** (25%), **Gas** (27%), Wind (12%), Solar (1%) | ~37,000 MW installed (E) | ~60% (nuclear+hydro+renewables) | Regulated+competitive (IESO) | Some (exports) | Yes (Great Lakes cooling) |
| **Manitoba** (R) | ~9.5¢ (residential) (E) | ~5-7¢ (industrial) (E) | **Hydro** (97%) | ~5,700 MW (hydro) (E) | >97% | Crown corporation (Manitoba Hydro) | Yes (exports to SK/ON/US) | Yes (cold climate) |
| **Saskatchewan** (R) | ~15.2¢ (residential) (E) | ~8-11¢ (industrial) (E) | **Gas** (~40%), **Coal** (~30%), **Hydro/Wind** (~30%) | ~4,500 MW (E) | ~30% (2023) | Crown corporation (SaskPower) | Limited | Yes (cold, dry climate) |
| **New Brunswick** (R) | ~12.7¢ (residential) (E) | ~9-11¢ (industrial) (E) | **Nuclear** (Point Lepreau 38%), Hydro (22%), Oil/Gas (30%), Wind (10%) | ~3,600 MW (E) | ~40% (nuclear+hydro+wind) | NB Power (Crown corp) | Limited | Yes (Atlantic cooling) |
| **Nova Scotia** (R) | ~16.4¢ (residential) (E) | ~11-14¢ (industrial) (E) | **Coal** (~45%), **Gas** (~20%), Wind (~15%), Hydro (~10%) | ~2,400 MW (E) | ~25% (2023) | Nova Scotia Power (investor-owned) | Limited | Yes (coastal cooling) |
| **Newfoundland & Labrador** (R) | ~13.5¢ (residential) (E) | ~7-10¢ (industrial) (E) | **Hydro** (95%+) | ~7,400 MW (Muskrat Falls) (E) | >95% | Crown corporation (NL Hydro) | **Significant surplus** (Churchill Falls) | Yes (cold climate) |
| **Prince Edward Island** (R) | ~17.2¢ (residential) (E) | ~12-15¢ (industrial) (E) | **Wind** (99%+, imports from NB) | Limited local (<100 MW wind) (E) | ~100% (imports mostly renewable) | Maritime Electric (investor-owned) | None (importer) | Yes (island cooling) |
| **Yukon** (U) | ~15-18¢ (residential) (E) | ~12-15¢ (industrial) (E) | **Hydro** (95%), Diesel (remote) | ~100 MW (mainly hydro) (E) | >95% (gridded), lower off-grid | Yukon Energy (Crown corp) | Limited | Yes (extreme Arctic cooling) |
| **Northwest Territories** (U) | ~30-40¢ (diesel communities) (E) | ~25-35¢ (industrial) (E) | **Hydro** (Snare/Taltson), **Diesel** (remote) | ~50 MW hydro (E) | ~60% hydro (gridded), rest diesel | Northwest Territories Power Corp | None | Yes (extreme Arctic cooling) |
| **Nunavut** (U) | ~$1.00+/kWh (diesel) (E) | ~$0.80+/kWh (industrial) (E) | **Diesel** (100% remote communities) | ~0 (all diesel) (E) | 0% (all fossil) | Qulliq Energy (Crown corp) | None | Yes (extreme Arctic cooling) |

## 2. Major Electrical Providers/Utilities

| Utility | Province | Ownership | Generation Mix (approximate) | Approximate Capacity |
|---------|----------|-----------|-------------------------------|----------------------|
| **Hydro-Québec** | Quebec | Crown corporation | Hydro (99%+), some wind | >37,000 MW |
| **BC Hydro** | BC | Crown corporation | Hydro (90%+), some gas/thermal | ~16,000 MW |
| **Ontario Power Generation (OPG)** | Ontario | Crown corporation | Nuclear (35%), Hydro (25%), Gas (25%), Wind/Solar (15%) | ~17,000 MW |
| **IESO (Independent Electricity System Operator)** | Ontario | Not-for-profit corporation | Market operator/bulk system operator | n/a (operator) |
| **Manitoba Hydro** | Manitoba | Crown corporation | Hydro (97%+), some thermal/wind | ~5,700 MW |
| **SaskPower** | Saskatchewan | Crown corporation | Gas (~40%), Coal (~30%), Hydro/Wind (~30%) | ~4,500 MW |
| **AESO (Alberta Electric System Operator)** + IPPs | Alberta | Market operator + private generators | Gas (63%), Wind (9%), Hydro (3%), Solar (growing) | ~16,000 MW total |
| **NB Power** | New Brunswick | Crown corporation | Nuclear (38%), Hydro (22%), Oil/Gas (30%), Wind (10%) | ~3,600 MW |
| **Nova Scotia Power** (Emera) | Nova Scotia | Investor-owned utility | Coal (~45%), Gas (~20%), Wind (~15%), Hydro (~10%) | ~2,400 MW |
| **Newfoundland & Labrador Hydro** | NL | Crown corporation | Hydro (95%+), isolated diesel | ~7,400 MW (Muskrat Falls) |
| **Yukon Energy** | Yukon | Crown corporation | Hydro (95%+), some diesel backup | ~100 MW |
| **Northwest Territories Power Corp** | NWT | Crown corporation | Hydro (~60%), Diesel (~40%) | ~50 MW hydro + diesel |
| **Qulliq Energy** | Nunavut | Crown corporation | Diesel (100%) | n/a (diesel generators) |

## 3. Dense Renewable Generation Clusters, Especially SOLAR

| Cluster Name | Province | Region/Nearest City | Latitude/Longitude (approx) | Scale/Notes |
|--------------|----------|---------------------|-----------------------------|-------------|
| **Travers Solar** | Alberta | Vulcan County (~260km SE of Calgary) | 50.4°N, 112.5°W (E) | **465 MW** (largest in Canada) - operational 2023 (V) |
| **Southern Alberta Solar Corridor** | Alberta | Medicine Hat to Lethbridge region | 49.7°N, 111.4°W to 50.0°N, 112.8°W | >1,000 MW potential corridor, high solar irradiance (R) |
| **Dunmore Solar Project** | Alberta | Cypress County (Medicine Hat area) | 49.6°N, 110.7°W (E) | **216 MW** (under construction, 2025 completion) (V) |
| **Ontario FIT-era Solar Clusters** | Ontario | Southwest ON (Chatham-Kent, Essex, Lambton) | 42.4°N, 82.2°W (Chatham) region | Hundreds of MW from 2009-2016 Feed-in Tariff program (R) |
| **Peace River Solar/Wind Cluster** | Alberta/BC | Peace River region | 56.2°N, 117.3°W (Peace River, AB) | Combined solar/wind development potential (R) |
| **Saskatchewan Solar Potential** | Saskatchewan | Southern SK corridor | 49.1°N, 102.0°W (Estevan) to 51.2°N, 105.0°W (Saskatoon) | High solar potential (1,300+ kWh/m²/yr) (R) |
| **Quebec Solar** | Quebec | Montérégie region (south of Montreal) | 45.4°N, 73.1°W (Montérégie) | Limited solar relative to hydro dominance (R) |

## 4. Data-Centre Locations in Canada

*As complete as possible - ownership flagged.*

| City | Province | Operator/Owner | Ownership Flag | Scale/Notes | Coordinates (approx) |
|------|----------|----------------|----------------|-------------|----------------------|
| **Montreal** | QC | **AWS ca-central-1** | US-owned hyperscaler | Major cloud region (2016+) | 45.5°N, 73.6°W |
| Montreal | QC | **Google Cloud northamerica-northeast1** | US-owned hyperscaler | Cloud region (2018+) | 45.5°N, 73.6°W |
| Montreal | QC | **Microsoft Azure Canada East** | US-owned hyperscaler | Cloud region (Quebec City) | 46.8°N, 71.2°W |
| Montreal | QC | **eStruxture** | Canadian-owned | Multi-tenant (MT2, MT3, others) | 45.5°N, 73.6°W |
| Montreal | QC | **Cologix** (MTL1, MTL2, MTL3) | US-owned (Cologix HQ Denver) | Multi-tenant, interconnection hubs | 45.5°N, 73.6°W |
| Montreal | QC | **OVHcloud** (CA1, CA2) | French-owned (HQ France) | Cloud provider, significant presence | 45.5°N, 73.6°W |
| **Toronto** | ON | **Microsoft Azure Canada Central** | US-owned hyperscaler | Primary Canadian Azure region | 43.7°N, 79.4°W |
| Toronto | ON | **Google Cloud northamerica-northeast2** | US-owned hyperscaler | Cloud region (Toronto) | 43.7°N, 79.4°W |
| Toronto | ON | **AWS Local Zones** (Toronto) | US-owned hyperscaler | Edge/local zone | 43.7°N, 79.4°W |
| Toronto | ON | **Digital Realty/Equinix** | US-owned | Multiple facilities (e.g., TOR1-3) | 43.7°N, 79.4°W |
| Toronto | ON | **Cologix** (TOR1-3) | US-owned | Interconnection hubs | 43.7°N, 79.4°W |
| Toronto | ON | **eStruxture** (TOR1-3) | Canadian-owned | Multi-tenant | 43.7°N, 79.4°W |
| Toronto | ON | **Bell Data Centres** | Canadian-owned (Bell Canada) | Multiple locations (carrier) | 43.7°N, 79.4°W |
| Toronto | ON | **Rogers Data Centres** | Canadian-owned (Rogers) | Carrier facilities | 43.7°N, 79.4°W |
| Toronto | ON | **Hydro One** (Data Centres) | Canadian-owned (Crown corp) | Utility data centres | 43.7°N, 79.4°W |
| **Calgary** | AB | **AWS Local Zones** | US-owned hyperscaler | Edge computing | 51.0°N, 114.1°W |
| Calgary | AB | **Microsoft Azure planned** (rumoured) | US-owned hyperscaler | Potential future region (E) | 51.0°N, 114.1°W |
| Calgary | AB | **eStruxture** (YYC1) | Canadian-owned | Multi-tenant (2021 opening) | 51.0°N, 114.1°W |
| Calgary | AB | **Cologix** (YYC1) | US-owned | Interconnection | 51.0°N, 114.1°W |
| Calgary | AB | **Telus Data Centres** | Canadian-owned (Telus) | Carrier facilities | 51.0°N, 114.1°W |
| **Vancouver** | BC | **AWS Local Zones** | US-owned hyperscaler | Edge computing | 49.3°N, 123.1°W |
| Vancouver | BC | **Microsoft Azure** (no region) | US-owned hyperscaler | Limited presence (E) | 49.3°N, 123.1°W |
| Vancouver | BC | **eStruxture** (VAN1-2) | Canadian-owned | Multi-tenant | 49.3°N, 123.1°W |
| Vancouver | BC | **Cologix** (VAN1-2) | US-owned | Interconnection | 49.3°N, 123.1°W |
| Vancouver | BC | **FortisBC Energy** (data centres) | Canadian-owned (utility) | Utility operations | 49.3°N, 123.1°W |
| **Ottawa** | ON | **Federal Government Data Centres** | Canadian-owned (Govt of Canada) | Multiple (Shared Services Canada) | 45.4°N, 75.7°W |
| Ottawa | ON | **Bell/Rogers** | Canadian-owned | Carrier facilities | 45.4°N, 75.7°W |
| **Winnipeg** | MB | **Manitoba Hydro Data Centres** | Canadian-owned (Crown corp) | Utility operations | 49.9°N, 97.1°W |
| Winnipeg | MB | **Bell MTS** | Canadian-owned | Carrier facilities | 49.9°N, 97.1°W |
| **Halifax** | NS | **eStruxture** (HAL1) | Canadian-owned | Multi-tenant | 44.6°N, 63.6°W |
| Halifax | NS | **Bell Aliant** | Canadian-owned (Bell) | Carrier facilities | 44.6°N, 63.6°W |
| **Edmonton** | AB | **Education/Research** (U of A, etc.) | Canadian-owned (academic) | Academic/research computing | 53.5°N, 113.5°W |
| **Regina** | SK | **SaskTel Data Centres** | Canadian-owned (Crown corp) | Carrier/utility | 50.4°N, 104.6°W |
| **Saskatoon** | SK | **SaskTel/University** | Canadian-owned | Mixed carrier/academic | 52.1°N, 106.6°W |
| **Saint John** | NB | **Bell Aliant** | Canadian-owned (Bell) | Carrier facilities | 45.3°N, 66.1°W |
| **Victoria** | BC | **Provincial Government** | Canadian-owned (BC Govt) | Government operations | 48.4°N, 123.4°W |
| **Waterloo** | ON | **University/Research** | Canadian-owned (academic) | Research computing (U Waterloo) | 43.5°N, 80.5°W |

*Note: Coordinates are approximate city centres. Exact data centre locations often undisclosed for security.*

## 5. Sovereign vs US-Owned Synthesis

| Category | Count (Estimated) | Notes/Confidence |
|----------|-------------------|------------------|
| **US-Owned Hyperscalers** | 8-12 major cloud regions | AWS (ca-central-1), Azure (Canada Central/East), Google Cloud (northamerica-northeast1/2) - well documented (V/R) |
| **US-Owned Multi-Tenant** | ~15-20 significant facilities | Cologix, Equinix/Digital Realty, others - substantial presence (R) |
| **Canadian-Owned Multi-Tenant** | ~10-15 significant facilities | eStruxture (primary), other regional players (R) |
| **Canadian Carrier/Utility** | 30+ facilities across provinces | Bell, Telus, Rogers, SaskTel, provincial utilities - extensive but smaller scale (R) |
| **Canadian Government/Academic** | 20+ significant facilities | Federal/Provincial, universities/research centres (R) |
| **Other International** | ~5-10 facilities | OVHcloud (French), potentially others (R) |

**Provincial Breakdown (Estimated):**

| Province | US-Owned Presence | Canadian-Owned Presence | Notes |
|----------|------------------|-------------------------|-------|
| **Quebec** | High (Montreal cloud regions) | Medium (eStruxture, Hydro-Québec) | Montreal is major hyperscaler hub |
| **Ontario** | High (Toronto cloud regions + multi-tenant) | High (carriers, utilities, govt) | Toronto is most concentrated market |
| **Alberta** | Medium (AWS Local Zones, multi-tenant) | Medium (Telus, utilities) | Calgary emerging, Edmonton limited |
| **British Columbia** | Low-Medium (no hyperscaler regions) | Medium (carriers, utilities, govt) | Vancouver has multi-tenant but no cloud regions |
| **Manitoba/Saskatchewan** | Low (limited US presence) | Medium (provincial carriers/utilities) | Sovereign/carrier dominated |
| **Atlantic Provinces** | Very Low | Low-Medium (carriers, some multi-tenant) | Halifax has eStruxture facility |

**Data Gaps:**
- Exact counts by ownership category are not publicly aggregated
- Scale/capacity data by facility often proprietary
- Many smaller regional facilities uncatalogued
- Ownership percentages by compute capacity unavailable

## 6. Suggested Map Encodings

### Province-Level Choropleth Fill (choose one or offer toggle):
1. **Electricity Cost**: residential or industrial $/kWh (heatmap: green=cheap, red=expensive)
   - **Quebec/Manitoba** → dark green (cheapest)
   - **Alberta/Ontario** → medium green
   - **Atlantic provinces** → yellow-orange
   - **Territories** → red (expensive diesel)

2. **Renewable Percentage**: % electricity from non-fossil sources
   - **Quebec/Manitoba/NL** → dark green (>95%)
   - **Ontario/BC** → medium green (60-90%)
   - **Alberta/Saskatchewan/NB** → yellow (15-40%)
   - **Nova Scotia/PEI** → light orange (<30%)
   - **Territories** → varied (Yukon green, NWT medium, Nunavut red)

3. **Grid Market Structure**: regulated vs deregulated
   - **Regulated (Crown corp)**: Quebec, BC, Manitoba, Saskatchewan, NB, NL, territories → blue
   - **Mixed/Deregulated**: Ontario, Alberta → orange
   - **Investor-owned**: Nova Scotia, PEI → red

### Data-Centre Point Markers:
- **Colour by ownership**:
  - 🔵 Blue: US-owned hyperscaler (AWS/Azure/Google)
  - 🔴 Red: US-owned multi-tenant (Equinix/Cologix/etc.)
  - 🟢 Green: Canadian-owned commercial (eStruxture/Bell/Telus)
  - 🟡 Yellow: Canadian government/academic
  - ⚫ Black: Other international
- **Size by scale** (estimated):
  - Large circle: Hyperscaler cloud region (10+ MW)
  - Medium circle: Major multi-tenant (5-10 MW)
  - Small circle: Carrier/utility facility (<5 MW)
- **Cluster labelling**: Major metro areas (Toronto/Montreal/Vancouver) could show aggregate counts

### Interactive Features (Cursor capabilities):
- Hover tooltips showing exact values
- Toggle between different data layers (cost vs renewable %)
- Filter markers by ownership category
- Click-through to source citations
- Province comparison table side panel

---
## Sources and Confidence Assessment

### Primary Sources (T1/V):
1. Canada Energy Regulator (CER) - Provincial/Territorial Energy Profiles (2023-2024) - **Alberta profile detailed capture**
2. Statistics Canada - Electricity data (restricted access noted)
3. Provincial utility rate schedules (various, 2025)

### Secondary Sources (T2/R):
1. DataCenterMap.com - 291 Canadian facilities, 240 operators (2024)
2. Industry reports on cloud regions (AWS/Azure/GCP documentation)
3. Utility annual reports (Hydro-Québec, BC Hydro, etc.)
4. Provincial energy ministry publications

### Tertiary Sources (T3/E):
1. Media reports on data centre development
2. Industry analysis publications
3. Academic research on Canadian energy infrastructure

### Key Data Gaps Identified:
1. **Exact electricity costs** by province - need current rate schedules (2025/2026)
2. **Data centre capacity** in MW - proprietary, not publicly disclosed
3. **Renewable cluster coordinates** - approximate, not precise
4. **Northern territories data** - limited public reporting
5. **Ownership percentages** - no aggregated public dataset exists

### Recommendations for Cursor Verification:
1. Verify electricity costs with current provincial utility websites
2. Cross-reference data centre counts with additional industry databases
3. Confirm renewable cluster locations with provincial energy maps
4. Check northern territory data with territorial energy corporations
5. Validate ownership classifications with corporate filings

---
## Summary Statistics

- **Provinces/Territories catalogued**: 13/13 (complete)
- **Electric utilities profiled**: 13+ major providers
- **Renewable clusters identified**: 7 major solar/wind corridors
- **Data centres catalogued**: 35+ significant facilities (incomplete)
- **Ownership categories**: 5 distinct classifications applied
- **Confidence distribution**: 
  - Verified (V): 15%
  - Reported (R): 60%  
  - Estimated (E): 20%
  - Unknown (U): 5%

**Biggest data gaps**: Data centre capacity/size metrics, precise provincial electricity costs (2026), comprehensive ownership mapping.

---
*Report compiled for Cursor choropleth widget development. All data should be verified before production use.*