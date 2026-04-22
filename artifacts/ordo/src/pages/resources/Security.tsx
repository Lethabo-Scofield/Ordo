import { LegalLayout } from "@/pages/legal/LegalLayout";

export default function Security() {
  return (
    <LegalLayout title="Security" updated="April 22, 2026">
      <p>
        Ordo is engineered so that a workflow you launch in plain English is
        executed safely, predictably and with a complete audit trail. This page
        summarises the controls we have in place across data, identity,
        infrastructure and operations.
      </p>

      <h2>Data protection</h2>
      <ul>
        <li>TLS 1.2+ for all data in transit.</li>
        <li>AES-256 encryption for data at rest, including backups.</li>
        <li>Per-workspace logical isolation; no cross-tenant data access.</li>
        <li>
          Customer-managed retention windows for execution logs and uploaded
          documents.
        </li>
      </ul>

      <h2>Identity & access</h2>
      <ul>
        <li>SSO via SAML 2.0 and OIDC for Business and Enterprise plans.</li>
        <li>SCIM provisioning for automated user lifecycle management.</li>
        <li>Role-based access control with workspace, project and tool scopes.</li>
        <li>Short-lived OAuth tokens for connected tools, refreshed automatically.</li>
      </ul>

      <h2>Infrastructure</h2>
      <ul>
        <li>
          Hosted on hardened cloud infrastructure with defence-in-depth network
          segmentation.
        </li>
        <li>Regional data residency available on Enterprise plans.</li>
        <li>Continuous vulnerability scanning and dependency monitoring.</li>
        <li>Disaster-recovery exercises with documented RTO/RPO targets.</li>
      </ul>

      <h2>Operational security</h2>
      <ul>
        <li>Mandatory MFA for all employees with access to production systems.</li>
        <li>Background checks and security training for all staff.</li>
        <li>Production access is brokered through audited just-in-time sessions.</li>
        <li>Incident response runbooks with on-call rotations.</li>
      </ul>

      <h2>AI safety</h2>
      <p>
        Customer data is never used to train foundation models. Ordo uses
        provider APIs in zero-retention mode where available, and evaluations
        run in isolated environments without persistent customer state.
      </p>

      <p>
        Have a question we haven't answered? Email{" "}
        <a href="mailto:security@ordo.com">security@ordo.com</a>.
      </p>
    </LegalLayout>
  );
}
