const inquirer=require('inquirer')



function managerQ(){
    inquirer.prompt([
        {   
            type:'confirm',
            name:'manager',
            message:'Are you the manager?'
        },
        {
            type:'input',
            name:'officeNum',
            message:'What is your office number?',
        },
        {
            type:'confirm',
            name:'addUser',
            message:'Would you like to add anyone?',
            
        },
       
    ])
    .then((answers)=>{
        if (answers.addUser===true){
        employeeQ()}
        
    })
}

function employeeQ(){
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
            message:'What is your position',
            type:'list',
            name:'position',
            choices:['Engineer', 'Intern']
        }
        
    ]).then((answers)=>{
        if(answers.position==='Engineer'){
            engineer()
        }else intern()})
}


function engineer(){
    inquirer.prompt([
        {
            type:'input',
            name:'github',
            message:'What is your github?'
        },
        {
            type:'confirm',
            name:'addAnother',
            message:'Would you like to add another employee?',
            
        }
    ]).then((answers)=>{
        if(answers.addAnother===true){employeeQ()}
    })
}

function intern(){
    inquirer.prompt([
        {
            type:'input',
            name:'school',
            message:'Where did you attend school?'
        },{
            type:'confirm',
            name:'addAnother',
            message:'Would you like to add another employee?',
            
        }
    ]).then((answers)=>{
        if(answers.addAnother===true){employeeQ()}
    })
}


managerQ()





// make classes


// ask questions


// make html

//profit


