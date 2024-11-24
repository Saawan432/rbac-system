import React, { useState } from 'react';
import { useRoleStore } from '../../store/roleStore';
import EditRoleModal from './EditRoleModal';
import AddRoleModal from './AddRoleModal';
import { deleteIcon, editicon } from '../../assets/icons';

const RoleList: React.FC = () => {
  const { roles, addRole, updateRole, deleteRole } = useRoleStore(state => ({
    roles: state.roles,
    addRole: state.addRole,
    updateRole: state.updateRole,
    deleteRole: state.deleteRole,
  }));

  const [editRoleId, setEditRoleId] = useState<number | null>(null);
  const [showAddRoleModal, setShowAddRoleModal] = useState(false);

  const roleToEdit = roles.find(role => role.id === editRoleId);

  const handleAddRole = (roleData: { name: string; permissions: string[] }) => {
    addRole({ ...roleData, id: Date.now() });
    setShowAddRoleModal(false);
  };

  const handleEditRole = (updatedRole: { id: number; name: string; permissions: string[] }) => {
    updateRole(updatedRole);
    setEditRoleId(null);
  };

  return (
    <div className="p-6 bg-gray-50 ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Role Management</h2>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={() => setShowAddRoleModal(true)}
        >
          Add Role
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-x-auto border border-gray-200">
        <table className="table-auto w-full text-left">
          <thead className="bg-gray-100 text-sm font-medium text-gray-600">
            <tr>
              <th className="px-4 py-3">Role Name</th>
              <th className="px-4 py-3">Permissions</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {roles.length > 0 ? (
              roles.map((role) => (
                <tr key={role.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{role.name}</td>
                  <td className="px-4 py-3">{role.permissions.join(', ')}</td>
                  <td className="px-4 py-3">
                    <button
                      className="px-3 py-1 text-white rounded-lg hover:bg-yellow-100 transition duration-200 mr-2"
                      onClick={() => setEditRoleId(role.id)}
                    >
                    {editicon}
                      
                    </button>
                    <button
                      className="px-3 py-1  text-white rounded-lg hover:bg-red-100 transition duration-200"
                      onClick={() => deleteRole(role.id)}
                    >
            {deleteIcon}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-3 text-gray-500">No roles found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Role Modal */}
      {showAddRoleModal && (
        <AddRoleModal
          closeModal={() => setShowAddRoleModal(false)}
          onAdd={handleAddRole}
        />
      )}

      {/* Edit Role Modal */}
      {roleToEdit && (
        <EditRoleModal
          roleId={roleToEdit.id}
          roleData={roleToEdit}
          closeModal={() => setEditRoleId(null)}
          onEdit={handleEditRole}
        />
      )}
    </div>
  );
};

export default RoleList;
