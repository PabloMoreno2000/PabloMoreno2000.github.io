var projectNames = ["", "", ""];

var fullProjects = 0;

var gerstappDescription = "Made by my own initiative, Gerstapp is a mobile app that allows students to add their own vocabulary and verbs in order to practice. It also helps to practice other elements of this language like possessive pronouns, defined artciles, undefined articles, etc; in all their variations (nominative, dative, genitive).";

var exergyDescription = "A metroidvania game made with Game maker with a very deep story and a funny playability. Everything, the scripts, sprites, music, game physics, etc. was made by our team.";

var perceptronDescription = "A type of neural network that generates a criterion through experience and error measurement.";

var descriptions = [gerstappDescription, exergyDescription, perceptronDescription];

var gerstappBullet0 = "You can choose between several options.";

var gerstappBullet1 = "Each option has some games to interact with.";

var gerstappBullet2 = "If you practice verbs, you can choose freely between them.";

var gerstappBullet3 = "You have a certain time(sekunden) to conjugate the verb in all its forms.";

var gerstappBullet4 = "You can also practice articles and possessive pronouns in their three forms.";

var gerstappBullet5 = "It is similar to the previous game, you also have a score(Ergebnis). Watch out, incorrect answers are counted!";

var gerstappBullet6 = "You can also practice vocabulary, with your own pictures!";

var gerstappBullet7 = "You must enter the name in plural and singular with the article. Like the other games, if time ends, it's game over.";

var gerstappBullet8 = "There is a menu to select what do you want to add.";

var gerstappBullet9 = "You won't need to practice verbs that haven't been seen in class.";

var gerstappBullet10 = "This is what you will see after selecting the picture of the vocabulary.";

var gerstappBullets = [gerstappBullet0, gerstappBullet1, gerstappBullet2, gerstappBullet3, gerstappBullet4, gerstappBullet5, gerstappBullet6, gerstappBullet7, gerstappBullet8, gerstappBullet9, gerstappBullet10];

var exergyBullet0 = "Everything, the scripts, sprites, music, game physics, etc. was made by our team.";

var exergyBullet1 = "There is a saving system and enemies that will follow/shoot you.";

var exergyBullet2 = "You will find traps around the whole map. Be careful.";

var exergyBullets = [exergyBullet0, exergyBullet1, exergyBullet2];

//Number of images of the Gerstapp project
var iGerstappImg = 11;

//Number of images of the Exergy project
var iExergyImg = 3;

//Number of images of the perceptron project
var iPerceptronImg;

//var to store the current dot of the carousel
var iCurrentDot = 0;

//Var to store the dots number of the selected project;
var iMaxDot;

//Variable to store the div projects when needed 
var divPreviews = "";

//Var to store the individual project data
var divProject = "";

var iNumber;

$(document).ready(function(){
    
//These two lines are also necessary to avoid a bug 
divProject = $("#project-area").detach();
$("#pre-project-area").append(divProject);
    
//Counting the projects that are finished
getProjectsFinished();
    
//Get the names of all the projects finished
getProjectNames();

//If the user presses a button to show the project              
$(".project-btn").click(function(){
    
 iNumber = parseInt($(this).attr('value'));
    
//detach the project's div
divPreviews = $(".projects-container").detach();
$("#pre-project-area").append(divProject);
//cleanProjects();
    
console.log(iNumber);
    
    //Change the title
    $(".project-title").html("" + projectNames[iNumber]);
    
    //Loading the project's description
    $("#project-description").html(descriptions[iNumber]);
    
//show the info of that option
switch(iNumber){
    //Gerstapp case
    case 0:
        
        iMaxDot = iGerstappImg;
        
        //console.log("title: " + projectNames[iNumber]);
        
        //load the Gerstapp info
        
        //Loading dots
        loadDots(iGerstappImg);
        
        changeDot(iCurrentDot);
        
        loadGerstappImg();
        
        $("#bullet-info").html(gerstappBullets[iCurrentDot]);
        
        break;
        
    //Exergy case
    case 1:
        
        iMaxDot = iExergyImg;
        
        //load the Exerygy info
        
                //Loading dots
        loadDots(iExergyImg);
        
        changeDot(iCurrentDot);
        
        loadExergyImg();
        
        $("#bullet-info").html(exergyBullets[iCurrentDot]);
        
        
        break;
        
    //Perceptron case
    case 2:
        
        iMaxDot = iPerceptronImg;
        
        //load the perceptron info
        
        break;
}
    
});  
    
    $(".btn-left").on('click', ".left-arrow-carousel", function () {
    
    var iPreviousDot = iCurrentDot;
        
    iCurrentDot--;
    
    //Subtract 1 since we will be working with index
    if(iCurrentDot < 0) {
        iCurrentDot = iMaxDot - 1; 
    }
    
    changeDot(iCurrentDot, iPreviousDot);
        
    switch(iNumber){
    //Gerstapp case
    case 0:
            
        loadGerstappImg();
            
        $("#bullet-info").html(gerstappBullets[iCurrentDot]);
        
        break;
        
    //Exergy case
    case 1:
            
            loadExergyImg();
            
            $("#bullet-info").html(exergyBullets[iCurrentDot]);

        break;
        
    //Perceptron case
    case 2:
        
        break;
    }
    
});
    
$(".btn-right").on('click', ".right-arrow-carousel", function () {
    
    var iPreviousDot = iCurrentDot;
    
    iCurrentDot++;
    
    if(iCurrentDot > iMaxDot - 1) {
        iCurrentDot = 0;
    }
    
    changeDot(iCurrentDot, iPreviousDot);
    
    switch(iNumber){
    //Gerstapp case
    case 0:
            
        loadGerstappImg();
            
        $("#bullet-info").html(gerstappBullets[iCurrentDot]);
        
        break;
        
    //Exergy case
    case 1:
            
            loadExergyImg();
            
            $("#bullet-info").html(exergyBullets[iCurrentDot]);

        break;
        
    //Perceptron case
    case 2:
        
        break;
    }
    
    
});
    
//Listener of the click event of the cross symbol   
$(".btn-cross").on('click', ".cross", function (){
    
    $(".pre-projects-container").append(divPreviews);
    
    divProject = $("#project-area").detach();
    
    $(".project-title").html("Important Projects");
    
     console.log("ALAER");
    
     //cleanPreview();
    
   
    
});
    //This is necessary for the page to work
    $('#cross').trigger('click');
    
    

    
});


//Function to get the project names
var getProjectNames = () => {
    
    //"i" is the position, obj is the actual DOM
    $(".card-title-word").each(function(i, obj) {
        
        //Just get the names of the ones that are finished
        if(i < fullProjects) {
            
        //"this" points to obj
        projectNames[i] = $(this).html();
        
        }
    });
}

//Function to get the number of projects finished
var getProjectsFinished = () => {
    
    $(".card-title").each(function(i, obj) {
        
        //If the title project states that it is finished
        if($(this).hasClass("project-ready")) {
            
            //Count them
            fullProjects++;   
        }
    });
    
    console.log("FullProjects: " + fullProjects);
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

var loadGerstappImg = () => {
    
    let src = "img/gerstapp/" + iCurrentDot + ".png";
    
    console.log(src);

    $("#project-img-carousel").attr("src", src);
    
}

var loadExergyImg = () => {
    
    let src = "img/exergy/" + iCurrentDot + ".jpg";
    
    $("#project-img-carousel").attr("src", src);
}

var loadPerceptronImg = () => {
    
    
}

var loadDots = (dots) => {
    
    //Empty the circles span
    $(".circles").html('');
    
    for(let i = 0; i < dots; i++) {
        $(".circles").append("<i class=\"far fa-circle\"></i>");
    }
    
}

//function to change the solid dot
var changeDot = (dotSelected, previous) => {
    
    console.log("Previous: " + previous);
    
    console.log("dotSelected: " + dotSelected);
    
    //looping through all the dots
    $(".fa-circle").each(function(i, obj) {
        
        //When you find the wanted dot
        if(i === dotSelected){
            //change the style
            $(this).css("font-weight", "900");
            }
        
        else if(i === previous) {
            
            $(this).css("font-weight", "");
        }
        
    });
}