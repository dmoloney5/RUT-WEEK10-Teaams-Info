// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

    //using Employee
    super(name, id, email);

    //adding officeNumber
    this.officeNumber = officeNumber;
}

getOfficeNumber() {
    return this.officeNumber;
}

//getting Role
getRole() {
    return 'Manager';
}
};

//export Engineer
module.exports = Manager;