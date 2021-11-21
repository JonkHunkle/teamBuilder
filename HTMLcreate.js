const fs=require('fs')
const Manager=require('./lib/manager')
const Engineer=require('./lib/engineer')
const Intern=require('./lib/intern')






function fakeHTML(team) {
    console.log('fake html function',team)

    let managerCard=`
<div id='manager' class='row'>
  <h3>Say hello to the manager!</h3>
  <ul>
  <li>${team[0].name}</li>
  <li>${team[0].id}</li>
  <li>${team[0].email}</li>
  <li>${team[0].office}</li>
  </ul>
</div>
`
 function employeeCard(team){
  for (let i = 1; i < team.length; i++) {
    if (team.role==='Engineer'){
      let employeeCard=`
      <div id='engineer' class='column'>
        <h3>Say hello to the engineer!</h3>
        <ul>
        <li>${team[i].name}</li>
        <li>${team[i].id}</li>
        <li>${team[i].email}</li>
        <li>${team[i].github}</li>
        </ul>
      </div>
      `
      return employeeCard
  }}
    
    {let employeeCard=`
    <div id='intern' class='column'>
      <h3>Say hello to the intern!</h3>
      <ul>
      <li>${team[i].name}</li>
      <li>${team[i].id}</li>
      <li>${team[i].email}</li>
      <li>${team[i].school}</li>
      </ul>
    </div>
    `
    return employeeCard
    }
    }
}
    var html=`
    <!doctype html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      
    </head>
    <body>
      <header > Welcome to the team!</header>
      <span class="container">
        ${managerCard}
        ${employeeCard}
        
        
      </span>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
`
return html
}


module.exports=fakeHTML