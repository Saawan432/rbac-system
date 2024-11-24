
const mockUsers = [
  { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
  { id: 2, username: 'user1', password: 'user123', role: 'user' },
];

export const mockAuthService = {
  login: (username: string, password: string) => {
    const user = mockUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      return { success: true, user };
    }
    return { success: false, message: 'Invalid credentials' };
  },

  register: (username: string, password: string, role: string) => {
    if (mockUsers.some((u) => u.username === username)) {
      return { success: false, message: 'Username already exists' };
    }

    const newUser = {
      id: mockUsers.length + 1,
      username,
      password,
      role,
    };
    mockUsers.push(newUser);
    return { success: true, user: newUser };
  },
};
