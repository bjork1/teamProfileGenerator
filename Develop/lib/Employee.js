// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email) {
    this.id = id;
    this.name = name;
    this.title = "Employee";
    this.email = email;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.title;
  }

  getEmail() {
    return this.email;
  }
}

module.exports = Employee;
