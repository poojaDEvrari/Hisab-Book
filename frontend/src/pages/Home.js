import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  
  const navigate = useNavigate();

  // Set logged-in user from localStorage
  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  }, []);



  // Logout functionality
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Logged out');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col flex items-center justify-center">
      {/* Header Section */}
    
        <h1 className="text-4xl md:text-6xl font-bold text-blue-500">HisabBook</h1>
        <p className="text-lg md:text-xl text-gray-300 mt-2">
          Welcome {loggedInUser || 'Guest'}! Simplify Your Business & Personal Accounting
        </p>
        <p className="text-sm md:text-base text-gray-400 mt-1 mb-9">
          Track expenses, generate receipts, and download PDFs with ease.
        </p>
   

      {/* Navigation Section */}
      <div className="flex justify-center gap-6 mb-11">
        <button
          onClick={() => navigate('/home/business')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
        >
          Business (व्यापार)
        </button>
        <button
          onClick={() => navigate('/home/personal')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
        >
          Personal (निजी)
        </button>
      </div>

      

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="fixed top-4 right-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
      >
        Logout
      </button>

      {/* Footer Section */}

        <div className="flex items-center justify-center gap-4 mb-4">
          <a
            href="https://www.instagram.com/pooja__devrari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://github.com/poojaDEvrari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/pooja-devrari-8a713928b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 mb-2">
        <p>Built with ❤️ by <span className="text-blue-400">Pooja Devrari </span></p></div>
        <div className="flex items-center justify-center gap-4 mb-2">
        <p>using React & TailwindCSS</p>
        </div>
         

      <ToastContainer />
    
    </div>
  );
};

export default Home;
