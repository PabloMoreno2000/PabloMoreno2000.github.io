var projectNames = "";

var fullProjects = 0;

//Number of images of the Gerstapp project
var iGerstappImg = 11;

//Number of images of the Exergy project
var iExergyImg;

//Number of images of the perceptron project
var iPerceptronImg;

//Variable to store the div projects when needed 
var divPreviews = "";

//Var to store the individual project data
var divProject = "";

var iNumber;

$(document).ready(function(){
    
//Detach the project container
divProject = $("#project-area").detach();
       
//Counting the projects that are finished
getProjectsFinished();
    
//Get the names of all the projects finished
getProjectNames();

//If the user presses a button to show the project              
$(".project-btn").click(function(){
    
 iNumber = parseInt($(this).attr('value'));
    
//detach the project's div
cleanProjects();

    
console.log(iNumber);
    
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
    
 //Listener of the click event of the cross symbol   
$(".cross").click(function(){
     console.log("ALAER");
     cleanPreview();
    
   
    
});
    
});

//Function to get the project names
var getProjectNames = () => {
    
    //"i" is the position, obj is the actual DOM
    $("card-title").each(function(i, obj) {
        
        //Just get the names of the ones that are finished
        if(i != fullProjects - 1) {
            
        //"this" points to obj
        projectNames[i] = this.html();
        }
    });
}

//Function to get the number of projects finished
var getProjectsFinished = () => {
    
    $("card-title").each(function(i, obj) {
        
        //If the title project states that it is finished
        if(obj.hasClass("project-ready")) {
            
            //Count them
            fullProjects++;   
        }
    });
}

//Function to clean the projects div and show just one
var cleanProjects = () => {
    
    divPreviews = $(".projects-container").detach();
    
    $("#pre-project-area").append(divProject);
    
}

var cleanPreview =  () => {
    
    //Detach the info of the single project
    divProject = $("#project-area").detach();
    
    //attach all the projects preview
    $(".pre-projects-container").append(divPreviews);
}