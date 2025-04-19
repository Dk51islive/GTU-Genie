import React from 'react'

const features = [
  { title: 'Live GTU Results', desc: 'Get real-time result updates from GTU APIs.' },
  { title: 'Circular Alerts', desc: 'Stay updated with GTU circulars and notifications.' },
  { title: 'Study Materials', desc: 'Access notes, eBooks, and semester-wise resources.' },
  { title: 'Smart Bot Assistant', desc: 'Chatbot answers your GTU queries instantly.' },
  { title: 'Secure Access', desc: 'Device-limited login with screen protection.' },
  { title: 'Referral Rewards', desc: 'Invite friends & earn weekly commissions.' },
]

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, i) => (
          <div key={i} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-700">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
