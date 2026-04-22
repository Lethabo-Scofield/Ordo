import { LegalLayout } from "@/pages/legal/LegalLayout";

export default function HelpCenter() {
  return (
    <LegalLayout title="Help Center" updated="April 22, 2026">
      <p>
        Whether you're setting up your first workflow or rolling Ordo out
        across the company, our team is here to help.
      </p>

      <h2>Common questions</h2>
      <h3>How do I connect a new tool?</h3>
      <p>
        Open <em>Settings → Tools</em> in your workspace, choose the tool you
        want to connect, and complete the OAuth flow. Ordo will only request
        the scopes needed for your active workflows.
      </p>

      <h3>Can I undo an execution?</h3>
      <p>
        Every workflow can declare reversible and irreversible steps. Reversible
        steps can be rolled back from the run detail view. Irreversible steps
        require explicit human approval before they run.
      </p>

      <h3>How does pricing work?</h3>
      <p>
        Pricing is based on the number of workflow executions and the tools
        connected to your workspace. Email{" "}
        <a href="mailto:sales@ordo.com">sales@ordo.com</a> for a quote tailored
        to your team.
      </p>

      <h3>Is there a free trial?</h3>
      <p>
        Yes. New workspaces include a 14-day trial with full access to
        execution, verification and audit features. No credit card required.
      </p>

      <h2>Talk to us</h2>
      <ul>
        <li>
          <strong>General questions</strong> —{" "}
          <a href="mailto:hello@ordo.com">hello@ordo.com</a>
        </li>
        <li>
          <strong>Sales</strong> —{" "}
          <a href="mailto:sales@ordo.com">sales@ordo.com</a>
        </li>
        <li>
          <strong>Support (existing customers)</strong> —{" "}
          <a href="mailto:support@ordo.com">support@ordo.com</a>
        </li>
        <li>
          <strong>Security</strong> —{" "}
          <a href="mailto:security@ordo.com">security@ordo.com</a>
        </li>
      </ul>

      <p>
        We aim to reply within one business day. Customers on Business and
        Enterprise plans have access to a dedicated support channel with
        guaranteed response times.
      </p>
    </LegalLayout>
  );
}
