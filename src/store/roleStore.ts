import {create} from 'zustand';

interface Role {
  id: number;
  name: string;
  permissions: string[];
}

interface RoleStore {
  roles: Role[];
  addRole: (role: Role) => void;
  updateRole: (role: Role) => void;
  deleteRole: (id: number) => void;
}

export const useRoleStore = create<RoleStore>((set) => ({
  roles: [],
  addRole: (role) =>
    set((state) => ({ roles: [...state.roles, role] })),
  updateRole: (updatedRole) =>
    set((state) => ({
      roles: state.roles.map((role) =>
        role.id === updatedRole.id ? updatedRole : role
      ),
    })),
  deleteRole: (id) =>
    set((state) => ({ roles: state.roles.filter((role) => role.id !== id) })),
}));
