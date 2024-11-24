
import {create} from 'zustand';

type Permission = {
  id: number;
  name: string;
  description: string;
};

type Role = {
  id: number;
  name: string;
  permissions: string[]; 
};

type PermissionStore = {
  roles: Role[];
  permissions: Permission[];
  assignPermissionToRole: (roleId: number, permissionName: string) => void;
  removePermissionFromRole: (roleId: number, permissionName: string) => void;
};

// Create a store using Zustand
export const usePermissionStore = create<PermissionStore>((set) => ({
  roles: [
    { id: 1, name: 'Admin', permissions: ['create_user', 'edit_user', 'delete_user'] },
    { id: 2, name: 'User', permissions: ['view_user'] },
  ],
  permissions: [
    { id: 1, name: 'create_user', description: 'Allows creating a new user' },
    { id: 2, name: 'edit_user', description: 'Allows editing user details' },
    { id: 3, name: 'delete_user', description: 'Allows deleting a user' },
    { id: 4, name: 'view_user', description: 'Allows viewing user details' },
  ],

  assignPermissionToRole: (roleId, permissionName) => set((state) => {
    const updatedRoles = state.roles.map((role) =>
      role.id === roleId
        ? { ...role, permissions: [...role.permissions, permissionName] }
        : role
    );
    return { roles: updatedRoles };
  }),



  removePermissionFromRole: (roleId, permissionName) => set((state) => {

    const updatedRoles = state.roles.map((role) => {
      if (role.id === roleId) {

        if (role.permissions.includes(permissionName)) {
          return {
            ...role,
            permissions: role.permissions.filter(p => p !== permissionName), 
          };
        }
      }
      return role; 
    });
  
    return { roles: updatedRoles };
  })
  
}));
