import PaymentSection from '../components/PaymentSection'

// Inside your Home component return
<PaymentSection />

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome to GTU Genie</h2>
        <p>Your academic genie for all things GTU!</p>
      </main>
      <Footer />
    </>
  );
}

export default Home;

