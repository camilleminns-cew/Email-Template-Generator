import React, { useMemo, useState } from "react";
import {
  outreachTypes, audiences, vsdpStages, topics,
} from "./data/content.js";
import { assembleEmail } from "./assemble.js";
import { brand } from "./data/brand.js";
import Logo from "./Logo.jsx";

const C = brand.color;
const FONT = brand.font;

function Field({ label, help, children }) {
  return (
    <label style={{ display: "block", marginBottom: 18 }}>
      <div style={{ fontWeight: 700, color: C.newNavy, fontSize: 14, marginBottom: 4 }}>
        {label}
      </div>
      {help && <div style={{ fontSize: 12.5, color: C.sub, marginBottom: 6 }}>{help}</div>}
      {children}
    </label>
  );
}

const selStyle = {
  width: "100%", padding: "9px 11px", fontSize: 14, borderRadius: 8,
  border: `1px solid ${C.line}`, background: C.white, color: C.newNavy,
  fontFamily: FONT,
};

const sectionLabel = {
  fontSize: 12, fontWeight: 700, color: C.throwbackBlue,
  textTransform: "uppercase", letterSpacing: 1, marginBottom: 16,
};

export default function App() {
  const [outreachId, setOutreachId] = useState(outreachTypes[0].id);
  const [audienceId, setAudienceId] = useState(audiences[0].id);
  const [vsdpId, setVsdpId] = useState(vsdpStages[0].id);
  const [topicId, setTopicId] = useState(topics[0].id);
  const [copied, setCopied] = useState(false);

  const outreachHelp = outreachTypes.find((o) => o.id === outreachId)?.help;

  const result = useMemo(
    () => assembleEmail({ outreachId, audienceId, vsdpId, topicId }),
    [outreachId, audienceId, vsdpId, topicId]
  );

  const fullText = result.ready
    ? `Subject: ${result.subject}\n\n${result.body}${
        result.resources.length
          ? "\n\n" + result.resources.map(([t, u]) => `\u2022 ${t} \u2014 ${u}`).join("\n")
          : ""
      }`
    : "";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* clipboard blocked in some sandboxes */ }
  };

  return (
    <div style={{ minHeight: "100vh", background: C.beigeLight, color: C.newNavy, fontFamily: FONT }}>
      <header style={{ background: C.newNavy, color: "#fff" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "18px 24px" }}>
          <Logo onDark />
          <div style={{ fontSize: 13, opacity: 0.85, marginTop: 8, fontStyle: "italic" }}>
            Accelerating inclusive investments for equitable solutions
          </div>
        </div>
        <div style={{ height: 4, background: C.electricYellow }} />
      </header>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "20px 24px 0" }}>
        <div style={{ fontSize: 22, fontWeight: 700 }}>Stakeholder Email Generator</div>
        <div style={{ fontSize: 14, color: C.sub, marginTop: 2 }}>
          Pick a stakeholder profile. Get a mechanism-first draft in CEW's voice.
        </div>
      </div>

      <main style={{ maxWidth: 1080, margin: "0 auto", padding: 24,
        display: "grid", gridTemplateColumns: "minmax(300px, 380px) 1fr", gap: 24,
        alignItems: "start" }}>

        <section style={{ background: C.white, border: `1px solid ${C.line}`,
          borderRadius: 12, padding: 20 }}>
          <div style={sectionLabel}>Respondent profile</div>

          <Field label="Outreach type" help={outreachHelp}>
            <select style={selStyle} value={outreachId}
              onChange={(e) => setOutreachId(e.target.value)}>
              {outreachTypes.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
          </Field>

          <Field label="Stakeholder type" help="Sets the register \u2014 how technical, which framing.">
            <select style={selStyle} value={audienceId}
              onChange={(e) => setAudienceId(e.target.value)}>
              {audiences.map((a) => <option key={a.id} value={a.id}>{a.label}</option>)}
            </select>
          </Field>

          <Field label="VSDP stage" help={vsdpStages.find((v) => v.id === vsdpId)?.definition}>
            <select style={selStyle} value={vsdpId}
              onChange={(e) => setVsdpId(e.target.value)}>
              {vsdpStages.map((v) => <option key={v.id} value={v.id}>{v.label}</option>)}
            </select>
          </Field>

          <Field label="Topic / area of inquiry" help="The specific thing they're asking about.">
            <select style={selStyle} value={topicId}
              onChange={(e) => setTopicId(e.target.value)}>
              {topics.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
            </select>
          </Field>

          <div style={{ marginTop: 8, fontSize: 12, color: C.sub, lineHeight: 1.5 }}>
            Register:{" "}
            <strong style={{ color: result.register === "plain" ? C.throwbackBlue : C.newNavy }}>
              {result.register === "plain" ? "Plain (community/public)" : "Technical (utility/reg)"}
            </strong>
            {result.register === "plain" && " \u2014 the word \u201ctariff\u201d is avoided."}
          </div>
        </section>

        <section style={{ background: C.white, border: `1px solid ${C.line}`,
          borderRadius: 12, padding: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between",
            alignItems: "center", marginBottom: 14 }}>
            <div style={sectionLabel}>Generated draft</div>
            <button onClick={copy} style={{ background: C.electricYellow, color: C.newNavy,
              border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 13,
              fontWeight: 700, cursor: "pointer", fontFamily: FONT }}>
              {copied ? "Copied \u2713" : "Copy email"}
            </button>
          </div>

          {result.warnings?.length > 0 && (
            <div style={{ background: C.amberBg, border: `1px solid ${C.amber}33`,
              borderRadius: 8, padding: "10px 12px", marginBottom: 14,
              fontSize: 12.5, color: C.amber }}>
              <strong>Voice check:</strong>
              <ul style={{ margin: "6px 0 0", paddingLeft: 18 }}>
                {result.warnings.map((w, i) => <li key={i} style={{ marginBottom: 3 }}>{w}</li>)}
              </ul>
            </div>
          )}

          <div style={{ fontSize: 12.5, color: C.sub, marginBottom: 10 }}>
            {result.meta &&
              `${result.meta.outreach} \u00b7 ${result.meta.audience} \u00b7 ${result.meta.stage} \u00b7 ${result.meta.topic}`}
          </div>

          <div style={{ background: C.beigeLight, border: `1px solid ${C.line}`, borderRadius: 8,
            padding: 16, fontSize: 14, lineHeight: 1.55, whiteSpace: "pre-wrap" }}>
            <div style={{ fontWeight: 700, marginBottom: 10, paddingBottom: 10,
              borderBottom: `1px solid ${C.line}` }}>
              Subject: {result.subject}
            </div>
            {result.body}
            {result.resources?.length > 0 && (
              <ul style={{ marginTop: 10, paddingLeft: 18 }}>
                {result.resources.map(([t, u], i) => (
                  <li key={i} style={{ marginBottom: 4 }}>
                    <strong>{t}</strong> &mdash; <span style={{ color: C.sub }}>{u}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div style={{ marginTop: 12, fontSize: 12, color: C.sub, lineHeight: 1.5 }}>
            Fill in <code>[bracketed]</code> placeholders before sending. This is a starting
            draft, not verbatim copy \u2014 tailor to the person.
          </div>
        </section>
      </main>
    </div>
  );
}
