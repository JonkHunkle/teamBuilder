const fs=require('fs')
const Manager=require('./lib/manager')
const Engineer=require('./lib/engineer')
const Intern=require('./lib/intern')






function fakeHTML(team) {
    console.log('fake html function',team)

    let managerCard=`
<div id='manager' class=''>
  <h3>Say hello to the manager!</h3>
  <ul>
  <li>${team[0].name}</li>
  <li>${team[0].id}</li>
  <li>${team[0].email}</li>
  <li>${team[0].office}</li>
  </ul>
</div>
`
 

    var html=`
    <!doctype html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="../tailwind.css" rel="stylesheet">
    </head>
    <body>
      <header> 
      <h2  class ='text-center'>Welcome to the team!
      </h2>
      </header>
      <div>
        ${managerCard}
        
        
        
      </div>
    </body>
    </html>
`
return html
}


module.exports=fakeHTML