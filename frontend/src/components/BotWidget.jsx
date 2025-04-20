import React, { useState } from 'react';

const BotWidget = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const fetchGTUData = async () => {
    const res = await fetch(`https://api.pinkdropstudios.in/gtu-insta/?query=${query}`);
    const data = await res.json();
    setResponse(data.result || "No response found.");
  };

  return (
    <div className="fixed bottom-6 right-6 p-4 bg-white shadow-xl rounded-2xl w-80 z-50">
      <h3 className="font-bold text-lg">GTU Genie Chatbot</h3>
      <input
        className="border p-2 rounded w-full mt-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask about results, circulars..."
      />
      <button onClick={fetchGTUData} className="mt-2 bg-indigo-500 text-white px-4 py-2 rounded">
        Ask
      </button>
      {response && (
        <div className="mt-2 text-sm bg-gray-100 p-2 rounded">
          {response}
        </div>
      )}
    </div>
  );
};

export default BotWidget;
