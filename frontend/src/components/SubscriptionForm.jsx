import React, { useState } from 'react'

const SubscriptionForm = () => {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    // TODO: Send email to backend for subscription (POST request)
    alert(`Subscribed: ${email}`)
    setSubmitting(false)
  }

  return (
    <section id="subscribe" className="py-16 bg-blue-50 text-center px-4">
      <h2 className="text-2xl font-bold mb-4">Subscribe for Updates</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          {submitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </section>
  )
}

export default SubscriptionForm
