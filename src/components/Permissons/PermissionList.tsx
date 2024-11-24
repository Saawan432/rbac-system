import React from 'react';
import { usePermissionStore } from '../../store/permissionstore'; 

const PermissionList: React.FC = () => {
  const { roles, permissions, assignPermissionToRole, removePermissionFromRole } = usePermissionStore((state) => ({
    roles: state.roles,
    permissions: state.permissions,
    assignPermissionToRole: state.assignPermissionToRole,
    removePermissionFromRole: state.removePermissionFromRole,
  }));

  return (
    <div className="p-6 bg-gray-100 ">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Role-Based Access Control (RBAC)</h2>

      {/* Permissions Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-x-auto mb-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 pl-4 pt-4">Permissions</h3>
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gray-200 text-gray-600 uppercase text-xs sm:text-sm leading-normal">
            <tr>
              <th className="py-3 px-4 lg:px-6 text-left">Permission Name</th>
              <th className="py-3 px-4 lg:px-6 text-left">Description</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {permissions.map((permission) => (
              <tr key={permission.id} className="border-b hover:bg-gray-50 transition-all duration-200">
                <td className="py-3 px-4 lg:px-6 text-left">{permission.name}</td>
                <td className="py-3 px-4 lg:px-6 text-left">{permission.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Roles and Assigned Permissions */}
      <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 pl-4 pt-4">Roles and Permissions</h3>
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gray-200 text-gray-600 uppercase text-xs sm:text-sm leading-normal">
            <tr>
              <th className="py-3 px-4 lg:px-6 text-left">Role</th>
              <th className="py-3 px-4 lg:px-6 text-left">Assigned Permissions</th>
              <th className="py-3 px-4 lg:px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {roles.map((role) => (
              <tr key={role.id} className="border-b hover:bg-gray-50 transition-all duration-200">
                <td className="py-3 px-4 lg:px-6 text-left">{role.name}</td>
                <td className="py-3 px-4 lg:px-6 text-left">{role.permissions.join(', ')}</td>
                <td className="py-3 px-4 lg:px-6 text-center space-x-2">
                  <button
                    className="px-3 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-all duration-300 w-full sm:w-auto"
                    onClick={() => assignPermissionToRole(role.id, 'create_user')} // Example of assigning a permission
                  >
                    Assign create_user
                  </button>
                  <button
                    className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300 w-full sm:w-auto"
                    onClick={() => removePermissionFromRole(role.id, 'delete_user')} // Example of removing a permission
                  >
                    Remove delete_user
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PermissionList;
