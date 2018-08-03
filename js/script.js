var projectNames = "";

var fullProjects = 0;

//Number of images of the Gerstapp project
var iGerstappImg = 11;

//Number of images of the Exergy project
var iExergyImg;

//Number of images of the perceptron project
var iPerceptronImg;

//Variable to store the div projects when needed 
var divProject = "";

$(document).ready(function(){
    
//Counting the projects that are finished
getProjectsFinished();
    
//Get the names of all the projects finished
getProjectNames();
    
//Count the number of projects that are ready

//If the user presses a buton  to show the project              
$(".btn").click(function(){
    
let iNumber = this.value();
    
//Clean the project's div
cleanProjects();
    
//show the info of that option
switch(iNumber){
    //Gerstapp case
    case 0:
        
        //load the Gerstapp info
        
        break;
        
    //Exergy case
    case 1:
        
        //load the Exerygy info
        
        break;
        
    //Perceptron case
    case 2:
        
        //load the perceptron info
        
        break;
}
    
});            
    

                
});

//Function to get the project names
var getProjectNames = () => {
    
    //"i" is the position, obj is the actual DOM
    $('.card-title').each(i, obj) {
        
        //Just get the names of the ones that are finished
        if(i != fullProjects - 1) {
            
        //"this" points to obj
        projectNames[i] = this.html();
        }
    }
}

//Function to get the number of projects finished
var getProjectsFinished = () => {
    
    $('card-title').each(i, obj) {
        
        //If the title project states that it is finished
        if(obj.hasClass("project-ready")) {
            
            //Count them
            fullProjects++;   
        }
    }
}

//Function to clean the projects div
var cleanProjects = () => {
    
    
}