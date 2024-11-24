import {create} from 'zustand';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

interface UserStore {
  users: User[];
  addUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: (id: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  addUser: (user) =>
    set((state) => ({ users: [...state.users, user] })),
  updateUser: (updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ),
    })),
  deleteUser: (id) =>
    set((state) => ({ users: state.users.filter((user) => user.id !== id) })),
}));
