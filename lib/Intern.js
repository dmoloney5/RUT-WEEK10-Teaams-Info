// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {

    //using Employee
    super(name, id, email);

    //adding officeNumber
    this.school = school;
}

// adding school
getSchool() {
    return this.school;
}

//adding role
getRole() {
    return 'Intern';
}
};

//export Engineer
module.exports = Intern;