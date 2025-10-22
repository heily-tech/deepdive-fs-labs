interface IUser {
    name: string;
    age: number;
    address: string;
}

const user = {
    name: "John",
    age: 20,
    address: 'seoul'
}
type UserKeys = keyof typeof user


enum UserRole {
    admin,
    manager
}

type UserRoleKeys = keyof typeof UserRole