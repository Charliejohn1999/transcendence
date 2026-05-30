function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 flex-1">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: May 2026</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p>
          By creating an account and using Transcendence, you agree to be bound
          by these Terms of Service. If you do not agree with any part of these
          terms, you must not use the platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Account Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your
          account. You must notify us immediately of any unauthorized use of
          your account.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Acceptable Use</h2>
        <p className="mb-3">When using Transcendence, you agree NOT to:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Use cheats, bots, or any unfair gameplay automation</li>
          <li>Harass, threaten, or insult other players in chat</li>
          <li>Attempt to disrupt the service or exploit security flaws</li>
          <li>Create multiple accounts to manipulate rankings</li>
          <li>Share inappropriate, illegal, or offensive content</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Content Moderation</h2>
        <p>
          We reserve the right to moderate, suspend, or terminate any account
          that violates these terms. Repeated violations may result in a
          permanent ban from the platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Service Availability</h2>
        <p>
          Transcendence is provided "as is" and we make no guarantees regarding
          uninterrupted availability. The service may be temporarily unavailable
          due to maintenance, updates, or unforeseen technical issues.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">6. Intellectual Property</h2>
        <p>
          All visual assets, source code, and game mechanics on this platform
          are the property of the Transcendence team. You may not reproduce,
          modify, or redistribute any part of the platform without prior
          written consent.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">7. Modifications</h2>
        <p>
          We may update these Terms of Service at any time. Continued use of
          the platform after changes are published constitutes acceptance of
          the revised terms.
        </p>
      </section>
    </div>
  )
}

export default Terms