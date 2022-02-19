import { User } from "./interfaces";

export const getUserById = (id: number): Promise<User> =>
  new Promise((resolve) => {
    const users = [
      {
        id: 1,
        firstname: "Giorgi",
        lastname: "Bazerashvili",
        age: 26,
        isActive: true,
      },
      {
        id: 2,
        firstname: "NAME__2",
        lastname: "surname2",
        age: 27,
        isActive: false,
      },
      {
        id: 3,
        firstname: "NAME__3",
        lastname: "surname3",
        age: 28,
        isActive: true,
      },
    ];
    setTimeout(() => {
      resolve(users.find((u) => u.id == id));
    }, 3000);
  });
