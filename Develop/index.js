const fs = require("fs");
const http = require("http");
var read = fs.readFileSync("public/team.html", "utf8");
console.log(read);

var inquirer = require("inquirer");
const Employee = require("./lib/Employee");

//createServer(teamRoster) {
//var teamRoster = "Hello";

//}

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the employee name?",
      name: "name"
    },

    {
      type: "input",
      message: "What is the employee email?",
      name: "email"
    },
    {
      type: "list",
      name: "position",
      message: "What is the position you are adding?",
      choices: ["manager", "engineer", "intern"]
    }
  ])

  .then(function(response) {
    var name = response.name;
    var email = response.email;
    var teamRoster =
      `This is my team: ` +
      response.name +
      `The email is: ` +
      response.email +
      `The position is: ` +
      response.position;
    fs.writeFile("./public/team.html", teamRoster, function(err) {
      if (err) throw err;
      console.log("Saved!");
    });

    http
      .createServer(function(req, res) {
        fs.readFile("./public/team.html", function(err, data) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        });
      })
      .listen(8080);

    if (response.position === "manager") {
      console.log(response.name);
      console.log(response.email);
      console.log("You are the boss");

      inquirer

        .prompt([
          {
            type: "input",
            message: "What is the office number?",
            name: "office"
          }
        ])

        .then(function(response) {
          console.log(response.office);
        });
    }

    if (response.position === "engineer") {
      //console.log(response.name);
      //console.log(response.email);
      //console.log("You are smart");

      inquirer

        .prompt([
          {
            type: "input",
            message: "What is the github username?",
            name: "engineer"
          }
        ])

        .then(function(response) {
          console.log(name);
          console.log(email);
          console.log(response.engineer);
        });
    }

    if (response.position === "intern") {
      console.log(response.name);
      console.log(response.email);
      console.log("You are still learning");

      inquirer

        .prompt([
          {
            type: "input",
            message: "What is the university",
            name: "university"
          }
        ])

        .then(function(response) {
          console.log(response.university);
        });
    }
  });
