// TODO: Write code to define and export the Employee class
class Employee  {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

//get name

getName() {
    return this.name;
}

//get id
getId() {
    return this.id;
}

//get email
getEmail(){
    return this.email;
}

//get role
getRole() {
    return 'Employee';
}
};

//to be export to use for manager, engineer and intern
module.exports = Employee