// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {

    //using Employee
    super(name, id, email);

    //adding github
    this.github = github;
}

// adding github
getGitHub() {
    return this.github;
}

//adding role
getRole() {
    return 'Engineer';
}
};

//export Engineer
module.export = Engineer;