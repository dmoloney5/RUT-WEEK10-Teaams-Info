// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {

    //using Employee
    super(name, id, email);

    //adding officeNumber
    this.officeNumber = officeNumber;
}

getOfficeNumber() {
    return officeNumber;
}

//getting Role
getRole(){
    return 'Manager';
}
};

//export Engineer
module.export = Manager