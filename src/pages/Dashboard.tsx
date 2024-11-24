
import { FaUser, FaUsers, FaChartLine, FaTasks } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 ">
      
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h2>
      <p className="text-gray-600 mb-8">Welcome to the VRV Security Admin Dashboard. Manage users, roles, and permissions efficiently.</p>
      
      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaUsers className="text-blue-500 text-4xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
            <p className="text-2xl     // In a real app, send this data to the backendfont-bold text-gray-800">1,245</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaUser className="text-green-500 text-4xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Active Admins</h3>
            <p className="text-2xl font-bold text-gray-800">32</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaChartLine className="text-purple-500 text-4xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Monthly Signups</h3>
            <p className="text-2xl font-bold text-gray-800">489</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <FaTasks className="text-red-500 text-4xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Pending Tasks</h3>
            <p className="text-2xl font-bold text-gray-800">18</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
        <ul className="divide-y divide-gray-200">
          <li className="py-3">
            <p className="text-gray-800">
              <span className="font-bold">John Doe</span> added a new user role.
            </p>
            <p className="text-gray-500 text-sm">2 hours ago</p>
          </li>
          <li className="py-3">
            <p className="text-gray-800">
              <span className="font-bold">Jane Smith</span> updated permissions for Admins.
            </p>
            <p className="text-gray-500 text-sm">5 hours ago</p>
          </li>
          <li className="py-3">
            <p className="text-gray-800">
              <span className="font-bold">Mike Johnson</span> deactivated a user account.
            </p>
            <p className="text-gray-500 text-sm">1 day ago</p>
          </li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-bold mb-2">Manage Users</h4>
          <p className="text-sm">Add, edit, or remove user accounts.</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-bold mb-2">View Reports</h4>
          <p className="text-sm">Access detailed analytics and reports.</p>
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-bold mb-2">Settings</h4>
          <p className="text-sm">Configure application preferences and roles.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
