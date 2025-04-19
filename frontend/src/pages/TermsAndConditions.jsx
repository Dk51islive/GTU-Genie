import React from 'react'

const TermsAndConditions = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Referral Program</h2>
        <p>
          You will receive 5% of the MRP for every successful referral through your unique code.
          Payouts are processed every Sunday to your linked bank account.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Device Login Policy</h2>
        <p>
          A user can only be logged into two devices at once. To access from a third device, log out from an active one.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Content Protection</h2>
        <p>
          All content is protected against screenshots, screen recordings, and unauthorized sharing. Downloading or redistribution is strictly prohibited.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Usage Terms</h2>
        <p>
          This platform is intended only for GTU students. Misuse of the system or violations of terms may lead to account suspension.
        </p>
      </section>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        Made by GTUinsta Team | Founded by HMM
      </footer>
    </div>
  )
}

export default TermsAndConditions
