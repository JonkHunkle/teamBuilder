const inquirer=require('inquirer')
const fs=require('fs')
const Intern=require('./lib/intern')
const Engineer=require('./lib/engineer')
var Manager=require('./lib/manager')
const fakeHTML = require('./HTMLcreate')
var team=[]


function init(){
    inquirer.prompt([
        {   
            type:'confirm',
            name:'role',
            message:'Are you the manager?',
            
        },
    ]).then((answers)=>{
        if (answers.role===false){
            console.log('go get the manager')
        }else managerQ()    
    })
}

function managerQ(){
    inquirer.prompt([
       
        {
            type:'input',
            name:'office',
            message:'What is your office number?',
        }       
    ])
    .then((answer)=>{
     employeeQ(answer)}
     
)}

function employeeQ(data, answer){
    inquirer.prompt([
        {
            type:'input',
            name:'username',
            message:'What is your name?'
        },
        {
            type:'input',
            name:'email',
            message:'What is your email?'
        },
        {
            type:'input',
            name:'idNum',
            message:'What is your ID?'
        }, 
        {
            message:'Is there anyone else on the team?',
            type:'confirm',
            name:'add',
            
        } 
        
    ]).then((answers)=>{
        //add code to push new employee to team array
       //console.log('this is data.role',data.role)
      
       
       if(data.office){
        const newManager= new Manager(answers.username, answers.idNum, answers.email, data.office)
        //console.log('in new manager class', newManager)
       team.push(newManager)
       }else
       if(data.role==='Engineer'){
        
        const newEngineer=new Engineer(answers.username, answers.idNum, answers.email, answer.github,data.role)
            //console.log('in new engineer class',newEngineer)   
        team.push(newEngineer)
       }else if(data.role==='Intern'){
          
        const newIntern= new Intern(answers.username, answers.idNum, answers.email, answer.school, data.role)
        //console.log('in new intern class',newIntern)
        team.push(newIntern)
        }
        if(answers.add){
            newEmployee()
    }else {writeHTML(team)}
//console.log('this is the team in index',team)
})
}

function newEmployee(){
    inquirer.prompt([
        {   
            message:'what is your role?',
            choices:['Engineer','Intern'],
            type:'list',
            name:'role'
        }
    ]).then((answer)=>{
        if (answer.role==='Engineer'){
            engineer(answer)
        }else {intern(answer)}
    })
}

function engineer(data){
    inquirer.prompt([
        {
            type:'input',
            name:'github',
            message:'What is your github?'
        } 
        
    ]).then((answer)=>{employeeQ(data, answer)})
}

function intern(data){
    inquirer.prompt([
        {
            type:'input',
            name:'school',
            message:'Where did you attend school?'
        }
    ]).then((answer)=>{employeeQ(data, answer)})
         
}



function writeHTML(){
    //console.log("write html", team)
fs.writeFile('./dist/indexfun.html', fakeHTML(team),
    (err) =>
      err ? console.error(err) : console.log("Success!")
  )}

// function init() {
//     inquirer.prompt(questionsManager) 
//     .then(function answers(answers) {
//         const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
//         employeesArray.push(newManager)
//         console.log(employeesArray)



// make classes


// ask questions


// make html

//profit


init()