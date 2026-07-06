// =============================================================================
// TEMPLATE ASSEMBLY
// Pure function: takes the four selections + the content library, returns the
// assembled subject line, body, resource list, and any voice-rule warnings.
// No UI concerns live here — this file is safe to unit-test on its own.
// =============================================================================
import {
  outreachTypes, audiences, vsdpStages, topics, settings,
} from "./data/content.js";

const byId = (arr, id) => arr.find((x) => x.id === id);

export function assembleEmail({ outreachId, audienceId, vsdpId, topicId }) {
  const outreach = byId(outreachTypes, outreachId);
  const audience = byId(audiences, audienceId);
  const stage = byId(vsdpStages, vsdpId);
  const topic = byId(topics, topicId);

  if (!outreach || !audience || !stage || !topic) {
    return { ready: false };
  }

  const reg = audience.register; // "plain" | "technical"

  // ---- Subject -------------------------------------------------------------
  const subject = outreach.subject;

  // ---- Body paragraphs in assembly order -----------------------------------
  const paras = [];
  paras.push("Hi [Name],");
  paras.push(outreach.opener);
  paras.push(`${audience.framing} ${audience.mechanism}`);
  paras.push(topic.block[reg] || topic.block.technical);
  paras.push(stage.move);

  // ---- Resources -----------------------------------------------------------
  const resources = topic.resources || [];
  if (resources.length) {
    paras.push("A few resources that may be useful:");
  }

  // ---- Sign-off ------------------------------------------------------------
  paras.push(outreach.signoff);
  paras.push("Best,\n[Name]");

  const body = paras.join("\n\n");

  // ---- Voice-rule checks ---------------------------------------------------
  const warnings = [];
  const bodyLower = body.toLowerCase();

  if (reg === "plain") {
    settings.plainRegisterFlags.forEach((w) => {
      if (bodyLower.includes(w.toLowerCase())) {
        warnings.push(
          `"${w}" appears in a plain-register (community/public) email. CEW's rule: avoid this word publicly — use "a small charge on the utility bill."`
        );
      }
    });
  }
  settings.antiAiFlags.forEach((w) => {
    if (bodyLower.includes(w.toLowerCase())) {
      warnings.push(`Anti-AI style flag: "${w}" appears in the draft. Consider rewording.`);
    }
  });

  return {
    ready: true,
    subject,
    body,
    resources,
    warnings,
    register: reg,
    meta: {
      outreach: outreach.label,
      audience: audience.label,
      stage: stage.label,
      topic: topic.label,
    },
  };
}
