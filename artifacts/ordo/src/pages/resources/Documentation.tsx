import { LegalLayout } from "@/pages/legal/LegalLayout";

export default function Documentation() {
  return (
    <LegalLayout title="Documentation" updated="April 22, 2026">
      <p>
        The Ordo documentation is your guide to building, deploying and
        governing AI-powered workflows. It is organised around the four phases
        of every Ordo execution: <em>Interpret, Execute, Verify, Audit</em>.
      </p>

      <h2>Getting started</h2>
      <ul>
        <li>Create your first workspace and invite teammates.</li>
        <li>Connect a tool — start with email, calendar or your CRM.</li>
        <li>Describe a workflow in plain English and watch Ordo plan it.</li>
        <li>Promote the workflow from sandbox to production.</li>
      </ul>

      <h2>Core concepts</h2>
      <ul>
        <li>
          <strong>Plans</strong> — the structured execution graph Ordo derives
          from your instructions.
        </li>
        <li>
          <strong>Tools</strong> — the integrations Ordo can call, with scoped
          permissions per workflow.
        </li>
        <li>
          <strong>Verifiers</strong> — checks that confirm a step succeeded
          before the workflow advances.
        </li>
        <li>
          <strong>Audit trail</strong> — the immutable record of every step,
          input, output and approval.
        </li>
      </ul>

      <h2>API & SDKs</h2>
      <p>
        Ordo exposes a REST API and SDKs for TypeScript and Python. You can
        trigger workflows, fetch run results and stream execution events into
        your own systems. Detailed reference docs are available inside your
        workspace under <em>Settings → Developers</em>.
      </p>

      <h2>Need more?</h2>
      <p>
        Full documentation, tutorials and changelog are coming to{" "}
        <a href="https://docs.ordo.ai" target="_blank" rel="noopener noreferrer">
          docs.ordo.ai
        </a>
        . In the meantime, email{" "}
        <a href="mailto:hello@ordo.com">hello@ordo.com</a> and we'll point you
        at the right resource.
      </p>
    </LegalLayout>
  );
}
