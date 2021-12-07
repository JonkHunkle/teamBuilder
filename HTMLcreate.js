const fs = require('fs')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Employee = require('./lib/employee')








function fakeHTML(team) {



  let internCard = []
  let engineerCard = []
  for (let i = 0; i < team.length; i++) {

    if (team[i].role == 'Engineer') {

      engineerCard += `
          <div id='engineer' class='m-4 border-2 border-black text-center'>
            <ul>
            <li>${team[i].name}</li>
            <li>${team[i].id}</li>
            <li>${team[i].email}</li>
            <li>${team[i].github}</li>
            </ul>
          </div>
          `;
    } else if (team[i].role == 'Intern') {

      internCard += `
    <div id='intern' class='m-4 border-2 border-black text-center'>
      <ul>
      <li>${team[i].name}</li>
      <li>${team[i].id}</li>
      <li>${team[i].email}</li>
      <li>${team[i].school}</li>
      </ul>
    </div>
    `;

    }

  }



  let managerCard = `
  <div id='manager' class=' m-4 border-2 bg-gray-200 border-black text-center'>
  <h2>Say hello to the manager!</h2>
  <ul>
  <li>${team[0].name}</li>
  <li>${team[0].id}</li>
  <li>${team[0].email}</li>
  <li>${team[0].office}</li>
  </ul>
</div>
`


  var html = `
    <!doctype html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="../tailwind.css" rel="stylesheet">
    </head>
    <body class='bg-blue-800  flex flex-col'>
      <header class='m-3 border-2 border-black bg-white-300'> 
      <h1  class ='text-center text-xl'>Welcome to the team!</h1>
      </header >
        ${managerCard}
        <div class='flex flex-row justify-around'>
          <div class='text-center border-black bg-blue-300 text-l flex flex-wrap flex-col'><p>Engineers</p>
        <div class='flex flex-row flex-wrap'>
          ${engineerCard}
      </div>
          </div>
          <div class='text-center text-l flex flex-wrap bg-blue-300 border-2 border-black flex-col'><p>Interns</p>
          <div class='flex flex-row flex-wrap'>
          ${internCard}
          </div>
          </div>
        </div>
      </div>
    </body>
    </html>
`
  return html
}


module.exports = fakeHTML