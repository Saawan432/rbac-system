import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

interface EditRoleModalProps {
  roleId: number;
  roleData: { name: string; permissions: string[] };
  closeModal: () => void;
  onEdit: (updatedRole: { id: number; name: string; permissions: string[] }) => void;
}

const EditRoleModal: React.FC<EditRoleModalProps> = ({ roleId, roleData, closeModal, onEdit }) => {
  const [name, setName] = useState(roleData.name);
  const [permissions, setPermissions] = useState(roleData.permissions.join(', '));

  useEffect(() => {
    setName(roleData.name);
    setPermissions(roleData.permissions.join(', '));
  }, [roleData]);

  const handleSaveChanges = () => {
    const updatedPermissions = permissions.split(',').map((perm) => perm.trim());
    onEdit({ id: roleId, name, permissions: updatedPermissions });
    toast.success("Role Updated Successfully")
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-96">
        <h3 className="text-xl font-semibold mb-4">Edit Role</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Role Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Permissions</label>
          <input
            type="text"
            value={permissions}
            onChange={(e) => setPermissions(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRoleModal;
