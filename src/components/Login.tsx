import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginBackground from '../assets/loginBackground.jpg';
import logo from '../assets/lock.svg'; 
import { toast } from 'react-toastify';

const mockUsers = [
  { username: 'admin', password: 'admin123', role: 'Admin' },
  { username: 'user', password: 'user123', role: 'User' },
];

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = mockUsers.find((u) => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('role', user.role);
      onLogin();
      toast.success('Login successful!');
      navigate('/');
    } else {
      setError('Invalid username or password');
      toast.error('Invalid username or password!');

    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full flex overflow-hidden">
        {/* Left Section */}
        <div className="hidden md:flex flex-col w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 text-white items-center justify-center p-12">
          <h2 className="text-4xl font-bold mb-6">Welcome Back!</h2>
          <p className="text-lg mb-8">
            Manage your role-based security with ease. Secure login and dynamic controls await you.
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
            <h1 className="text-3xl font-bold text-gray-800">Login</h1>
            <p className="text-gray-500">Access your account</p>
          </div>
          {error && (
            <div className="bg-red-100 text-red-700 text-center py-2 mb-6 rounded-md">
              {error}
            </div>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
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
                placeholder="Enter your password"
                className="w-full mt-1 py-3 px-4 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition duration-300"
            >
              Log In
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-gray-500">
              Don’t have an account?{' '}
              <button
                onClick={() => navigate('/register')}
                className="text-blue-600 hover:underline"
              >
                Register
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
