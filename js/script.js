//Var to get and store the projects' names written in the HTML
var projectNames = ["", "", ""];

//Counter of the finished projects
var fullProjects = 0;

var gerstappDescription = "Made by own initiative, Gerstapp is a mobile app that allows students to add their own vocabulary and verbs in order to practice. It also helps to practice other elements of this language like possessive pronouns, defined artciles, undefined articles, etc; in all their variations (nominative, dative, genitive).";

var exergyDescription = "A metroidvania game made with Game maker with a very deep story and a funny playability. Everything, the scripts, sprites, music, game physics, etc. was made by our team.";

var perceptronDescription = "Made by own initiative, it is a type of neural network that generates a criterion through experience and error measurement.";

var descriptions = [gerstappDescription, exergyDescription, perceptronDescription];

//Gerstapp Bullets
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

//Exergy Bullets
var exergyBullet0 = "Everything, the scripts, sprites, music, game physics, etc. was made by our team.";

var exergyBullet1 = "There is a saving system and enemies that will follow/shoot you.";

var exergyBullet2 = "You will find traps around the whole map. Be careful.";

var exergyBullets = [exergyBullet0, exergyBullet1, exergyBullet2];

//Perceptron Bullets
var perceptronBullet0 = "The project is available on github.";

var perceptronBullet1 = "All the code written in C++";

var perceptronBullets = [perceptronBullet0, perceptronBullet1];

//Number of images of the Gerstapp project
var iGerstappImg = 11;

//Number of images of the Exergy project
var iExergyImg = 3;

//Number of images of the perceptron project
var iPerceptronImg = 2;

//var to store the current dot of the carousel
var iCurrentDot = 0;

//Var to store the dots number of the selected project;
var iMaxDot;

//Variable to store the div projects when needed 
var divPreviews = "";

//Var to store the individual project data
var divProject = "";

//Var to store the value the value of the pressed button
var iNumber;

$(document).ready(function(){
    
//These two code lines are also necessary to avoid a bug 
divProject = $("#project-area").detach();
    
$("#pre-project-area").append(divProject);
    
//Counting the projects that are finished
getProjectsFinished();
    
//Get the names of all the projects finished
getProjectNames();

//If the user presses a button to show the project              
$(".project-btn").click(function() {
    
    iNumber = parseInt($(this).attr('value'));

    //detach the project's div and putting the big "preview"
    cleanProjects();

    //Change the title
    $(".project-title").html("" + projectNames[iNumber]);

    //Loading the project's description
    $("#project-description").html(descriptions[iNumber]);

    //show the info of that option
    switch(iNumber) {
            
        //Gerstapp case
        case 0:

            iMaxDot = iGerstappImg;

            //Loading dots
            loadDots(iGerstappImg);

            changeDot(iCurrentDot);

            //load the Gerstapp info
            loadGerstappImg();

            $("#bullet-info").html(gerstappBullets[iCurrentDot]);

            break;

        //Exergy case
        case 1:

            iMaxDot = iExergyImg;

            //Loading dots
            loadDots(iExergyImg);

            changeDot(iCurrentDot);

            //load the Exerygy info
            loadExergyImg();

            $("#bullet-info").html(exergyBullets[iCurrentDot]);

            break;

        //Perceptron case
        case 2:

            iMaxDot = iPerceptronImg;

            //Loading dots
            loadDots(iPerceptronImg);

            changeDot(iCurrentDot);

            //load the perceptron info
            loadPerceptronImg();

            $("#bullet-info").html(perceptronBullets[iCurrentDot]);

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
                loadPerceptronImg();
                
                $("#bullet-info").html(perceptronBullets[iCurrentDot]);

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
            
            loadPerceptronImg();
            
            $("#bullet-info").html(perceptronBullets[iCurrentDot]);
        
        break;
    }
    
});
    
//Listener of the click event of the cross symbol   
$(".btn-cross").on('click', ".cross", function (){
    
    //Reseting the dot counter
    iCurrentDot = 0;
    
     cleanPreview();
    
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
    
}

//Function to clean the projects div and show just one
var cleanProjects = () => {
    
    divPreviews = $(".projects-container").detach();

    $("#pre-project-area").append(divProject);
    
}

//Function the change the page's view
var cleanPreview =  () => {
    
    //Showing the previews
    $(".pre-projects-container").append(divPreviews);
    
    //Hiding the big project
    divProject = $("#project-area").detach();
    
    //Changing the title
    $(".project-title").html("Important Projects");
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
    
    let src = "img/perceptron/" + iCurrentDot + ".jpg";
    
    $("#project-img-carousel").attr("src", src);
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