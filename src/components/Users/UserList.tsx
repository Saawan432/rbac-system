import { useState } from 'react';
import AddUserModal from './AddUserModal';
import { deleteIcon, editicon } from '../../assets/icons';

const UserList = () => {

  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'Editor', status: 'Inactive' },
  ]);


  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<{ id: number; name: string; role: string; status: string } | null>(null);


  const addUser = (newUser: { id: number; name: string; role: string; status: string }) => {
    setUsers([...users, newUser]);
  };

  const updateUser = (updatedUser: { id: number; name: string; role: string; status: string }) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const startEditUser = (user: { id: number; name: string; role: string; status: string }) => {
    setEditingUser(user);
    setIsAddUserModalOpen(true);
  };

  const toggleAddUserModal = () => {
    setIsAddUserModalOpen(!isAddUserModalOpen);
    setEditingUser(null);  
  };

  return (
    <div className="p-8 bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">User Management</h2>
        <button
          onClick={() => setIsAddUserModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          + Add User
        </button>
      </div>

      {/* User Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-4 lg:px-6 text-left">Name</th>
              <th className="py-3 px-4 lg:px-6 text-left">Role</th>
              <th className="py-3 px-4 lg:px-6 text-center">Status</th>
              <th className="py-3 px-4 lg:px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition-all duration-200"
              >
                <td className="py-3 px-4 lg:px-6 text-left whitespace-nowrap font-medium">
                  {user.name}
                </td>
                <td className="py-3 px-4 lg:px-6 text-left">{user.role}</td>
                <td className="py-3 px-4 lg:px-6 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-4 lg:px-6 text-center">
                  <button
                    onClick={() => startEditUser(user)}
                    className="text-white px-3 py-1 rounded-lg mr-2 hover:bg-yellow-100"
                  >
                    {editicon}
                  </button>
                  <button
                    onClick={() => setUsers(users.filter((u) => u.id !== user.id))}
                    className="text-white px-3 py-1 rounded-lg hover:bg-red-100"
                  >
                    {deleteIcon}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit User Modal */}
      {isAddUserModalOpen && (
        <AddUserModal
          closeModal={toggleAddUserModal}
          addUser={addUser}
          updateUser={updateUser}
          editingUser={editingUser}
        />
      )}
    </div>
  );
};

export default UserList;
