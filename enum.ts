
enum Role{
    user ="user",
    admin ="admin"  
}

type LoginDetails ={
    name: string;
    email :string;
    password:string;
    role:Role;
};

const user1:LoginDetails ={
    name: "sameer",
    email: "sameer@gmail.com",
    password: "sam123",
    role:Role.user
}


const user2:LoginDetails ={
    name: "sameer",
    email: "sameer@gmail.com",
    password: "sam123",
    role:Role.admin
}


const isAdmin =(user2:LoginDetails) =>{
    const{name,role} =user2;

   return role==="admin"?`${name} is valid to edit website`:'not vallid to edit';

}

console.log(isAdmin(user2));