import { LegalLayout } from "./LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="April 22, 2026">
      <p>
        This Privacy Policy explains how Olyxee (Pty) Ltd ("Olyxee", "we", "us")
        collects, uses, and shares information when you visit the Ordo website
        or use the Ordo product (collectively, the "Services").
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Account & contact information</strong> you give us when you
          request a demo, sign up, or contact us — such as your name, work
          email, company, team size, and message.
        </li>
        <li>
          <strong>Usage data</strong> generated automatically when you use the
          Services, including device, browser, IP address, pages viewed, and
          referring URLs.
        </li>
        <li>
          <strong>Customer content</strong> processed by Ordo on your behalf
          when you connect tools, run workflows, or upload documents. We treat
          this content as confidential.
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To provide, secure, and improve the Services.</li>
        <li>To respond to demo requests and customer support inquiries.</li>
        <li>To send service-related communications and, with your consent, marketing.</li>
        <li>To meet legal, accounting, and compliance obligations.</li>
      </ul>

      <h2>How we share information</h2>
      <p>
        We do not sell personal information. We share it only with vetted
        sub-processors that help us operate the Services (e.g. hosting, email
        delivery, analytics) under contractual confidentiality and security
        obligations, and where required by law.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain personal information for as long as needed to provide the
        Services, comply with our legal obligations, resolve disputes, and
        enforce agreements. You can request deletion at any time.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct,
        export, restrict, or delete your personal information, and to object to
        certain processing. To exercise these rights, email{" "}
        <a href="mailto:privacy@ordo.com">privacy@ordo.com</a>.
      </p>

      <h2>International transfers</h2>
      <p>
        Olyxee is established in South Africa and may process personal
        information in jurisdictions outside your own. Where required, we use
        appropriate safeguards such as Standard Contractual Clauses.
      </p>

      <h2>Security</h2>
      <p>
        We use administrative, technical, and physical safeguards designed to
        protect personal information. No system is perfectly secure; if you
        believe an account has been compromised, contact us immediately.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes
        will be communicated through the Services or by email.
      </p>
    </LegalLayout>
  );
}
