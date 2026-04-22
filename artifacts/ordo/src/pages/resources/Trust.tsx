import { LegalLayout } from "@/pages/legal/LegalLayout";

export default function Trust() {
  return (
    <LegalLayout title="Trust" updated="April 22, 2026">
      <p>
        Trust is the foundation of how Ordo is built. Our customers run
        revenue-critical workflows on Ordo, and we treat the integrity,
        confidentiality and availability of those workflows as a first-class
        product requirement, not an afterthought.
      </p>

      <h2>Our trust principles</h2>
      <ul>
        <li>
          <strong>Verifiable execution</strong> — every step Ordo takes is
          logged, replayable and attributable. You should never have to take
          our word for what an agent did.
        </li>
        <li>
          <strong>Least privilege by default</strong> — Ordo only requests the
          scopes it needs to complete a workflow, and your admins can revoke
          them at any time.
        </li>
        <li>
          <strong>Customer data isolation</strong> — workspace data is logically
          isolated and encrypted in transit and at rest.
        </li>
        <li>
          <strong>Human-in-the-loop where it matters</strong> — sensitive steps
          can require explicit approval before Ordo executes them.
        </li>
      </ul>

      <h2>Compliance roadmap</h2>
      <p>
        We are working towards SOC 2 Type II and ISO/IEC 27001 attestations.
        Customers under NDA can request our latest security questionnaire,
        sub-processor list and architecture overview by emailing{" "}
        <a href="mailto:trust@ordo.com">trust@ordo.com</a>.
      </p>

      <h2>Reporting a vulnerability</h2>
      <p>
        If you believe you've found a security issue, please contact{" "}
        <a href="mailto:security@ordo.com">security@ordo.com</a>. We respond to
        every report and will keep you updated as we triage and remediate.
      </p>
    </LegalLayout>
  );
}
