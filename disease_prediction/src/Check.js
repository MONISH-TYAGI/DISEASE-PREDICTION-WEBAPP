import React, { useState } from 'react';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = () => {
    // Implement your email sending logic here
    console.log('Sending email to:', email);
    closeModal();
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative ">
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 absolute inset-0 blur-3"></div>
        </div>
      )}

      <button
        onClick={openModal}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Open Email Dialog
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center  ">
          <div className="bg-white rounded-lg shadow-lg w-80 p-6 relative w-1/2 h-1/6 ">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="10"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-4xl font-semibold mb-4">Enter Patient Email</h2>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email"
              className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500 h-1/3"
            />
            <button
              onClick={sendEmail}
              className="bg-[#1AACAC] text-white p-2 rounded w-full hover:bg-blue-600 h-fit text-3xl font-semibold"
            >
              Send Email
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
