import  { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const AddUserModal = ({
  closeModal,
  addUser,
  updateUser,
  editingUser,
}: {
  closeModal: () => void;
  addUser: (newUser: { id: number; name: string; role: string; status: string }) => void;
  updateUser: (updatedUser: { id: number; name: string; role: string; status: string }) => void;
  editingUser: { id: number; name: string; role: string; status: string } | null;
}) => {
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userStatus, setUserStatus] = useState('Active');


  useEffect(() => {
    if (editingUser) {
      setUserName(editingUser.name);
      setUserRole(editingUser.role);
      setUserStatus(editingUser.status);
    }
  }, [editingUser]);

  const handleSubmit = () => {
    if (editingUser) {

      updateUser({
        id: editingUser.id,
        name: userName,
        role: userRole,
        status: userStatus,
      });
      toast.success("Updated Successfully")
    } else {

      const newUser = {
        id: Math.floor(Math.random() * 10000), 
        name: userName,
        role: userRole,
        status: userStatus,
      };
      addUser(newUser);
      toast.success("User Added Successfully")

    }
    closeModal();  
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">{editingUser ? 'Edit User' : 'Add New User'}</h2>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter user name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Role</label>
          <input
            type="text"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter user role"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Status</label>
          <select
            value={userStatus}
            onChange={(e) => setUserStatus(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {editingUser ? 'Update' : 'Add'} User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
