function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 flex-1">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: May 2026</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
        <p>
          This Privacy Policy describes how Transcendence ("we", "us", or "our")
          collects, uses, and protects your personal data when you use our
          gaming platform. By using our service, you agree to the practices
          described below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Data We Collect</h2>
        <p className="mb-3">When you use Transcendence, we collect:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Your email address (used for authentication)</li>
          <li>Your chosen username and avatar</li>
          <li>Game statistics (matches played, wins, losses, scores)</li>
          <li>Chat messages exchanged with other players</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Data</h2>
        <p>
          Your data is used solely to provide and improve the gaming
          experience: authenticating your account, displaying leaderboards,
          enabling chat features, and matching you with opponents. We do not
          sell or share your personal data with third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Your Rights</h2>
        <p>
          Under the GDPR, you have the right to access, correct, or delete your
          personal data at any time. You may also request a copy of all data we
          hold about you. To exercise these rights, contact us through the
          support page.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Data Retention</h2>
        <p>
          We retain your data for as long as your account is active. If you
          delete your account, all personal data will be permanently removed
          within 30 days, except for anonymized game statistics that may be
          kept for platform analytics.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">6. Contact</h2>
        <p>
          For any question regarding this Privacy Policy, please reach out via
          our support channels. This policy may be updated periodically; the
          date at the top reflects the latest revision.
        </p>
      </section>
    </div>
  )
}

export default Privacy