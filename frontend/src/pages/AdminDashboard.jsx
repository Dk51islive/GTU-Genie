import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AdminDashboard = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get('/api/admin/dashboard')
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-500">Total Subscriptions</p>
          <h2 className="text-xl font-bold">{data.totalSubscriptions}</h2>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-500">Total Earnings (INR)</p>
          <h2 className="text-xl font-bold">{data.totalEarnings}</h2>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-500">Active Referrals</p>
          <h2 className="text-xl font-bold">{data.activeReferrals}</h2>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-500">Weekly Payouts Scheduled</p>
          <h2 className="text-xl font-bold">{data.weeklyPayouts}</h2>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
