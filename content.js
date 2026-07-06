// =============================================================================
// CEW EMAIL TEMPLATE GENERATOR — CONTENT LIBRARY
// =============================================================================
// This is the file you'll edit most often. Everything the generator says lives
// here. The UI (App.jsx) reads from this file and never hard-codes copy.
//
// HOW THE TEMPLATE IS ASSEMBLED
// A generated email is stitched together from building blocks in this order:
//   1. Subject line        (chosen by outreach type)
//   2. Opener              (chosen by outreach type — how you say hello)
//   3. Framing sentence    (chosen by audience — who CEW is, in their register)
//   4. Mechanism paragraph (chosen by audience — how IUI works, in their register)
//   5. Topic block         (chosen by topic — the specific thing they asked about)
//   6. VSDP move           (chosen by VSDP stage — the ask that moves them forward)
//   7. Resources           (chosen by topic — links to share)
//   8. Sign-off            (chosen by outreach type)
//
// VOICE RULES BAKED IN (from CEW's Strategic Comms Plan + anti-AI style guide):
//   - Lead with how IUI works, not mission/puffery.
//   - CBO/public register: NEVER the word "tariff." Use "a small charge on the
//     utility bill." Lead with cost + fairness.
//   - Utility/regulator register: precise mechanics, cost recovery, statute cites.
//   - No "delve," "landscape," "pivotal," "crucial," "fostering," etc.
//   - One clear ask per message.
//
// EDITING TIPS
//   - [SQUARE BRACKETS] are fill-in placeholders the sender completes.
//   - Keep IDs (the short keys like "warm_intro") stable — the app references them.
//   - To add a new audience/topic/etc., copy an existing block and change the id.
// =============================================================================

// -----------------------------------------------------------------------------
// OUTREACH TYPES — how warm the relationship is / why you're writing
// -----------------------------------------------------------------------------
export const outreachTypes = [
  {
    id: "warm_intro",
    label: "Warm introduction",
    help: "You share a mutual contact, met at an event, or they engaged with our work.",
    subject: "Following up from [event/mutual contact] — inclusive utility investment",
    opener:
      "It was good to [connect at EVENT / hear from MUTUAL CONTACT] about [SHARED INTEREST]. I wanted to follow up and share a bit more about what we do at Clean Energy Works.",
    signoff:
      "I'd welcome the chance to talk more. I'm available [insert 2–3 time slots or scheduling link] if any of those work.",
  },
  {
    id: "cold_intro",
    label: "Cold introduction",
    help: "No prior relationship. You're reaching out based on their role or work.",
    subject: "[Their org] + inclusive utility investment",
    opener:
      "My name is [Name], and I'm reaching out from Clean Energy Works. Given your [work/area of focus] at [Org], I thought there might be a useful connection to explore.",
    signoff:
      "If this is relevant to your work, I'd welcome a short conversation. I'm available [insert 2–3 time slots or scheduling link].",
  },
  {
    id: "referral",
    label: "Referral introduction",
    help: "A mutual contact asked you to reach out or suggested you connect.",
    subject: "[Mutual contact] suggested we connect — inclusive utility investment",
    opener:
      "[Mutual contact] suggested I reach out. They mentioned your work on [area of focus] at [Org], and thought there might be alignment with what we do at Clean Energy Works.",
    signoff:
      "I'd welcome the chance to connect. I'm available [insert 2–3 time slots or scheduling link] if any of those work for you.",
  },
  {
    id: "follow_up",
    label: "Follow-up",
    help: "You've already been in touch. This continues an existing thread.",
    subject: "Following up — [topic from last conversation]",
    opener:
      "Following up on our conversation about [topic]. I wanted to [recap / answer the question you raised / share the resource I mentioned].",
    signoff:
      "Happy to keep the conversation going. Let me know a time that works, or grab a slot here: [scheduling link].",
  },
  {
    id: "asset_share",
    label: "Resource share",
    help: "You're forwarding a one-pager, video, or report with brief context.",
    subject: "Resource you might find useful — [topic]",
    opener:
      "I came across [or: pulled together] something that connects to [their work / our last conversation] and thought it was worth passing along.",
    signoff:
      "Happy to talk through any of it. Let me know if it's useful, or if you'd like the version tailored to [their context].",
  },
];

// -----------------------------------------------------------------------------
// AUDIENCE SEGMENTS — sets the REGISTER (how technical, which framing)
// framing  = one sentence on who CEW is, pitched to this audience
// mechanism = how IUI works, in this audience's language
// register  = "technical" (utility/reg) or "plain" (public/community)
//             The app uses this to flag the no-"tariff" rule for plain register.
// -----------------------------------------------------------------------------
export const audiences = [
  {
    id: "cbo",
    label: "Community org / CBO",
    register: "plain",
    framing:
      "Clean Energy Works is a nonprofit that helps communities access clean energy upgrades without taking on debt or passing a credit check.",
    mechanism:
      "We focus on inclusive utility investment. It lets a utility cover the upfront cost of upgrades like efficiency, heat pumps, or solar, and recover that cost through a small charge on the utility bill that's set lower than the savings. There's no upfront cost, no loan, and no credit check, and it works for renters as well as homeowners. Households come out ahead from the first month.",
  },
  {
    id: "utility",
    label: "Utility (IOU / co-op)",
    register: "technical",
    framing:
      "Clean Energy Works provides pro-bono technical advisory services to utilities, regulators, and community partners advancing inclusive utility investment.",
    mechanism:
      "Inclusive utility investment lets a utility deploy its low-cost capital for behind-the-meter upgrades and recover the cost through an on-bill tariff tied to the meter rather than a loan tied to the customer. Cost recovery is structured so the charge stays below estimated savings, the obligation transfers with the meter on change of occupancy, and there's no credit check or debt on the customer's report. It reaches renters and credit-constrained households that rebate and loan programs structurally miss, and it reduces the arrears those programs later have to absorb.",
  },
  {
    id: "regulator",
    label: "Regulator / policymaker",
    register: "technical",
    framing:
      "Clean Energy Works provides pro-bono technical and policy analysis on inclusive utility investment to state consumer advocates, commissions, and legislative offices.",
    mechanism:
      "Inclusive utility investment is a tariffed on-bill mechanism: the utility funds behind-the-meter upgrades and recovers the cost through a charge tied to the meter, capped below estimated savings, with no credit screen and no personal debt. Because recovery is on-bill and transfers with occupancy, it reaches renters and LMI households that incentive programs reach at roughly a third the rate of moderate-income households, and it lowers the bills that assistance programs like PIPP and AMP are left to subsidize.",
  },
  {
    id: "funder",
    label: "Funder / philanthropy",
    register: "technical",
    framing:
      "Clean Energy Works works with funders to seed inclusive utility investment programs that become self-sustaining once operational.",
    mechanism:
      "Inclusive utility investment uses a utility's own low-cost capital to fund home upgrades, recovered through an on-bill charge set below the savings. Philanthropic dollars are catalytic here, not recurring subsidy: they fund program design and regulatory engagement, and once a program is live the tariff structure recycles capital back to the utility for continuous reinvestment. It's a one-time seed that unlocks a self-sustaining mechanism, and the design replicates across jurisdictions.",
  },
  {
    id: "peer",
    label: "Coalition / peer advocate",
    register: "technical",
    framing:
      "Clean Energy Works partners with advocates and coalitions to embed inclusive utility investment into state policy and data center accountability fights.",
    mechanism:
      "Inclusive utility investment fills the structural gap most ratepayer tools leave open: it changes the underlying cost of the home rather than managing the bill after it lands. The utility funds upgrades and recovers through an on-bill charge below the savings, with no credit check and no customer debt, reaching renters and LMI households that rebate channels hit an uptake ceiling on. It's complementary to AMPs, PIPPs, and VPP enrollment, not competitive with them.",
  },
];

// -----------------------------------------------------------------------------
// VSDP STAGES — sets the ASK. Definitions & "move" language derived from the
// Strategic Comms Plan's four-part framework (barrier breaker → ask → benefit
// → reinforce), condensed into one forward-moving paragraph per stage.
// -----------------------------------------------------------------------------
export const vsdpStages = [
  {
    id: "aware",
    label: "Aware",
    definition: "They've just heard about inclusive utility investment.",
    move:
      "I'd love to share a short overview and hear what you're working on, to see where there might be alignment. No commitment — just a first conversation.",
  },
  {
    id: "intrigued",
    label: "Intrigued",
    definition: "The value proposition resonates; they want to learn more.",
    move:
      "Since this seems to connect with your work, I'd be glad to send a few tailored resources and set up a short call to talk through how it maps to your specific context.",
  },
  {
    id: "inquisitive",
    label: "Inquisitive",
    definition: "They're actively asking questions about how it works.",
    move:
      "Happy to dig into the specifics. I can walk through [their question], connect you with someone who's implemented it, and help with any preliminary analysis that would be useful.",
  },
  {
    id: "resolved",
    label: "Resolved",
    definition: "They believe it's the right solution and are weighing action.",
    move:
      "It sounds like the case is clear on your end. I'd suggest we map the concrete next step — [pilot design / policy pathway / program scoping] — and I can bring the resources and connections to support it.",
  },
  {
    id: "invested",
    label: "Invested",
    definition: "They're committing resources (money, policy, program design).",
    move:
      "As you move into implementation, I want to make sure you have what you need. Tell me where the friction is — program design, community outcomes, regulatory steps — and I'll line up targeted support and peer connections.",
  },
  {
    id: "satisfied",
    label: "Satisfied",
    definition: "They've tested it and received the value promised.",
    move:
      "Your experience is exactly what others in this space need to see. Would you be open to sharing it as a case study, or joining a knowledge-sharing conversation with peers who are earlier on this path?",
  },
  {
    id: "champion",
    label: "Champion",
    definition: "They're ready to mobilize others and scale.",
    move:
      "You're in a position to move this beyond your own program now. I'd love to connect you with [coalition / task force / peer network] where your leadership can help others get started and push toward scale.",
  },
];

// -----------------------------------------------------------------------------
// TOPICS — the specific subject they're inquiring about.
// block     = a short paragraph tailored per register (plain vs technical).
// resources = links to offer. Keep these current; they render as a bullet list.
// Set resources to [] for none.
// -----------------------------------------------------------------------------
export const topics = [
  {
    id: "intro_iui",
    label: "Intro to inclusive utility investment",
    block: {
      plain:
        "At its simplest: the utility pays for the upgrade, and the household pays it back through a small charge on their bill that's always smaller than what they save. No debt, no credit check, and it stays with the home if they move.",
      technical:
        "The core structure is meter-tied cost recovery capped below estimated savings, with no credit screen, no personal debt, and transferability on change of occupancy. That combination is what lets it reach households other financing models can't.",
    },
    resources: [
      ["What are inclusive utility investments?", "https://www.energystar.gov/ (one-pager)"],
      ["ENERGY STAR IUI Resource Library", "https://www.energystar.gov/ (case studies + tools)"],
      ["Appalachian Voices — 2-minute overview video", "[link]"],
      ["Consumer Protections & IUI (one-pager)", "[link]"],
    ],
  },
  {
    id: "illinois",
    label: "Illinois (EEUP / CRGA / POWER Act)",
    block: {
      plain:
        "Illinois has an opening right now. A state program (EEUP) can bring this model to residents, including renters, with no upfront cost and immediate savings. We're helping make sure the pieces connect so real households benefit.",
      technical:
        "Three Illinois vehicles are converging in 2026: EEUP (CEJA, PA 102-0662, §16-111.10) mandates an IUI/PAYS-modeled residential tariff; CRGA (SB 25, effective June 2026) builds the VPP framework that could compensate EEUP-created assets; and the POWER Act (SB4016/HB5513) opens a data-center-funded stream that could flow through EEUP's IUI mechanism rather than uptake-capped rebate channels. The window to ensure interoperability before each is designed in a silo is narrow.",
    },
    resources: [
      ["EEUP statute — CEJA §16-111.10", "[link]"],
      ["CRGA (SB 25) summary", "[link]"],
      ["POWER Act tracker", "[link]"],
    ],
  },
  {
    id: "vpp",
    label: "VPPs / grid services",
    block: {
      plain:
        "When homes get solar and batteries through this model, they can also help the grid at busy times — and get paid for it. It turns an upgrade into an ongoing benefit for the household and the whole system.",
      technical:
        "IUI creates the behind-the-meter assets (solar + storage) that VPP tariffs compensate for grid services. The gap in most VPP designs is enrollment: they depend on customers already owning DERs, and rebates to get them there hit an uptake ceiling. IUI is the deployment mechanism that populates the VPP with LMI and renter households those channels miss.",
    },
    resources: [["CRGA VPP tariff requirements (§16-107.9)", "[link]"]],
  },
  {
    id: "data_centers",
    label: "Data centers / ratepayer protection",
    block: {
      plain:
        "As big data centers move in, everyday customers can get stuck with higher bills. One fair fix: make those facilities fund home upgrades that lower costs for the community — deployed so the money actually reaches renters and lower-income households.",
      technical:
        "Data center accountability frameworks (e.g., the POWER Act's BYONCCE standard) let facilities meet demand-side obligations by paying into utility EE and storage programs. Today those dollars route through rebate/incentive budgets with known uptake ceilings. Directing them through an IUI deployment mechanism reaches households those programs structurally can't, and pairs capacity offset with real affordability outcomes.",
    },
    resources: [["Data Center Accountability messaging guide", "[link]"]],
  },
  {
    id: "renters_equity",
    label: "Renters / equity access",
    block: {
      plain:
        "About a third of U.S. households rent, and most clean energy programs leave them out. Because the charge stays with the home and not the person, this model works for renters — no ownership required.",
      technical:
        "Roughly 36% of U.S. households rent, and loan/rebate models structurally exclude them via the split-incentive and credit barriers. Meter-tied recovery with transferability resolves the split incentive permanently: the obligation and the benefit both stay with the property, so renters participate without owner debt exposure and with owner permission only.",
    },
    resources: [],
  },
  {
    id: "kansas",
    label: "Kansas (OBF / Evergy)",
    block: {
      plain:
        "Kansas recently launched an income-based on-bill program. It keeps some of the good features but narrows who and what it covers, so we're watching closely to see how it plays out for households.",
      technical:
        "Kansas's Income-Based OBF tariff (effective April 2026, replacing the never-launched EvergyPAYS under KEEIA docket 22-EKME-254-TAR) preserves core IUI features — meter-tied recovery, transferability, no credit check, 0% interest, up to 15-year term — but narrows scope to HVAC-only and targets 201–300% FPL. The 95/5 net-savings rule doesn't resolve co-pay concerns and may worsen them. Worth treating as a fidelity case study alongside Illinois design work.",
    },
    resources: [["KEEIA docket 22-EKME-254-TAR", "[link]"]],
  },
];

// -----------------------------------------------------------------------------
// GLOBAL SETTINGS
// -----------------------------------------------------------------------------
export const settings = {
  // Words the generator will flag if they appear in the plain-register output.
  // Enforces the "no tariff in public materials" rule and anti-AI vocabulary.
  plainRegisterFlags: ["tariff"],
  antiAiFlags: [
    "delve", "tapestry", "pivotal", "crucial", "vibrant", "nestled",
    "groundbreaking", "renowned", "showcasing", "underscores", "fostering",
    "garner", "interplay", "intricate", "valuable insights", "landscape",
  ],
};
