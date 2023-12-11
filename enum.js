"use strict";
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
})(Role || (Role = {}));
const user1 = {
    name: "sameer",
    email: "sameer@gmail.com",
    password: "sam123",
    role: Role.user
};
const user2 = {
    name: "sameer",
    email: "sameer@gmail.com",
    password: "sam123",
    role: Role.admin
};
const isAdmin = (user2) => {
    const { name, role } = user2;
    return role === "admin" ? `${name} is valid to edit website` : 'not vallid to edit';
};
console.log(isAdmin(user2));
