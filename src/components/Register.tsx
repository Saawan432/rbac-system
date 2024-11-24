import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registerBackground from '../assets/loginBackground.jpg'; // Replace with your background path
import logo from '../assets/lock.svg'; // Replace with your logo path

const mockUsers = [
  { username: 'admin', password: 'admin123', role: 'Admin' },
  { username: 'user', password: 'user123', role: 'User' },
];

interface RegisterPageProps {
  onRegister: () => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User'); // Default role
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {

    const user = mockUsers.find((u) => u.username === username);
    if (user) {
      setError('Username already exists');
    } else {

      mockUsers.push({ username, password, role });
      onRegister();
      navigate('/login'); 
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${registerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full flex overflow-hidden">
        {/* Left Section */}
        <div className="hidden md:flex flex-col w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 text-white items-center justify-center p-12">
          <h2 className="text-4xl font-bold mb-6">Join Us Today!</h2>
          <p className="text-lg mb-8">
            Create your account and get access to dynamic controls and secure login.
          </p>
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Register</h1>
            <p className="text-gray-500">Create a new account</p>
          </div>
          {error && (
            <div className="bg-red-100 text-red-700 text-center py-2 mb-6 rounded-md">
              {error}
            </div>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
            }}
            className="space-y-6"
          >
            <div className="relative">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full mt-1 py-3 px-4 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                className="w-full mt-1 py-3 px-4 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="relative">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                id="role"
                className="w-full mt-1 py-3 px-4 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-gray-500">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-blue-600 hover:underline"
              >
                Log In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
