# GTU Genie

GTU Genie is a student-centric educational web platform designed to provide Gujarat Technological University (GTU) students with real-time academic resources, including e-notes, study materials, updates, and result alerts.

## Key Features

- **AI Chatbot**: Instant updates from GTU official APIs (results, circulars, etc.)
- **Digital Products**: Purchase e-notes, eBooks, and other academic resources
- **Subscription System**: Paid content access with login limits (max 2 devices)
- **Content Protection**: Disable screenshots, screen recordings, and sharing
- **Referral System**: Earn 5% commission per sale using unique referral codes
- **WhatsApp Support**: Integrated chat support for quick help
- **Admin Dashboard**: Analytics, subscription management, and referral tracking

## Tech Stack

- **Frontend**: React.js + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Payment Gateway**: GPay (Google Pay)
- **Deployment**: Replit Testnet / GitHub / Google Drive ZIP

## Folder Structure

```
GTU-Genie/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── server.js
├── .env.example
├── README.md
├── package.json
```

## Installation

1. Clone the repo:  
```bash
git clone https://github.com/Dk51islive/GTU-Genie.git
```

2. Install dependencies:
```bash
cd frontend && npm install
cd ../backend && npm install
```

3. Start development servers:
```bash
npm run dev    # For frontend (Vite)
npm start      # For backend
```

4. Configure `.env` with appropriate values for backend (e.g., MongoDB URI, API keys).

## Terms & Conditions (Referral)
- You’ll earn 5% commission of each product MRP you refer
- Commissions are paid out weekly on Sundays to your bank account

---
**Made by GTUinsta Team | Founded by HHM**

