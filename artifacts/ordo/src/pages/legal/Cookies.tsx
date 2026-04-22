import { LegalLayout } from "./LegalLayout";

export default function Cookies() {
  return (
    <LegalLayout title="Cookie Policy" updated="April 22, 2026">
      <p>
        This Cookie Policy explains how Olyxee (Pty) Ltd ("Olyxee") uses
        cookies and similar technologies on the Ordo website. It should be
        read alongside our <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They help the site work properly, remember your preferences,
        and give us insight into how the site is used.
      </p>

      <h2>Categories we use</h2>
      <ul>
        <li>
          <strong>Strictly necessary</strong> — required for the site to
          function (e.g. session, security, load balancing).
        </li>
        <li>
          <strong>Preferences</strong> — remember choices you make such as
          language or region.
        </li>
        <li>
          <strong>Analytics</strong> — help us understand how visitors interact
          with the site so we can improve it. These are only set with your
          consent where required.
        </li>
      </ul>

      <h2>Managing cookies</h2>
      <p>
        Most browsers let you refuse or delete cookies through their settings.
        Doing so may affect parts of the site that rely on cookies to work.
      </p>

      <h2>Third-party cookies</h2>
      <p>
        We may use third-party services (such as analytics or email delivery)
        that set their own cookies. Their use is governed by their own privacy
        policies.
      </p>

      <h2>Updates</h2>
      <p>
        We may update this policy from time to time. The "Last updated" date
        at the top of this page reflects the most recent revision.
      </p>
    </LegalLayout>
  );
}
