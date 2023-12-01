let myQuestions = [{

    id: 1,
    question: "Vilket organ saknar sjöstjärnan?", // Flervalsfråga med checkboxes - flera rätta svar
    option: {
        a: "hjärnan", 
        b: "tarmen", 
        c: "lungor", 
        d: "nervsystem"}, 
    correctanswer: ["a", "b", "c"],
},
{
    id: 2,
    question: "Var sitter sjöstjärnans ögon?", // True false-fråga
    option: {
        a: "På huvudet", 
        b: "På tentaklarna"},
    correctanswer: "b",
},
{
    id: 3, 
    question: "Hur många armar kan en sjöstjärna som mest ha?", // Multiple choice fråga med ett rätt svar
    option: {
        a: "Fem", 
        b: "Sju", 
        c: "Tjugo", 
        d: "Trettio"},  
    correctanswer: "c",
},
{
    id: 4, 
    question: "Vilken färg har bläckfiskars blod?", // True false-fråga
    option: {
        a: "Rött", 
        b: "Blått"},
    correctanswer: "b",
}, 
{
    id: 5, 
    question: "Hur många hjärtan har en bläckfisk?", // Multiple choice-fråga med ett rätt svar
    option: {
        a: "Ett", 
        b: "Två", 
        c: "Tre", 
        d: "Fyra"}, 
    correctanswer: "c",
},
{
    id: 6, 
    question: "Vilket djur är världens äldsta nu levande art?", // Flervalsfråga med checkboxes - flera rätta svar
    option: {
        a: "Svampdjur", 
        b: "Immortal Jellyfish", 
        c: "Bläckfisk", 
        d: "Sjöstjärna"}, 
    correctanswer: ["a", "b" ],
},
{
    id: 7, 
    question: "Vilket vattenlevande djur har det farligaste giftet?", // True false-fråga
    option: {
        a: "Pufferfish", 
        b: "Box Jellyfish"}, 
    correctanswer: "b",
},
{
    id: 8, 
    question: "lorem ipsum",
    option: {
        a: "Ett",
        b: "Två",
    },
    correctanswer: "b", 
},
{
    id: 9, 
    question: "lorem ipsum", 
    option: {
        a: "hanna",
        b: "rubensson",
    },
    correctanswer: "a",
},
{
    id: 10, 
    question: "lorem ipsum", 
    option: {
        a: "lorem",
        b: "ipsum",
    }, 
    correctanswer: "b",
}

];

// En variabel som kan ticka upp när man går till nästa fråga.
// Nästa funktion som sätter in frågan och svaret
// For-loop - rätt plats i arrayen
// Arrayens namn[0], 
// On change - när någon ändrar checkboxen eller så använder man get documentbyId
// En funktion som du anropar som hämtar vämtar värdet från checkbox med id:et (html-elementet)




// Funktion för att kolla om checkboxes är ifyllda
let checkBoxFunction = (checked) => {
    // Fråga 1
    let hjarnan = document.querySelector("[value='a']:checked");
    let tarmen = document.querySelector("[value='b']:checked");
    let lungorna = document.querySelector("[value='c']:checked"); 
    let nervsystemet = document.querySelector("[value='d']:checked"); 

    if (hjarnan || tarmen || lungorna || nervsystemet) {
        // Återvänd värdet om någon checkbox är markerad
        return true;
    } else {
        // Ingen checkbox är markerad
        return false;
    }
    
}


// Funktion för att lägga till listelement vid rättning
let answerFunction = (correctanswer) => {

    // Loopar igenom myQuestions med rätt svar per fråga
    for (x=0; x<myQuestions.length; x++) {
    let listElement = document.createElement("li"); 
    listElement.innerText = `Rätt svar på fråga var: ${correctanswer}`; 
    ulList.appendChild(listElement); 
    }
    
}

const ulList = document.getElementById("ulList"); // Hämtar ul-listan


const gradeTest = document.getElementById("gradeTest"); // Hämtar knappen gradeTest (rättning)

var numCorrect = 0;

gradeTest.addEventListener("click", () => {

    for(let x=0; x < myQuestions.length; x++) {

            if (checkBoxFunction(myQuestions[x].correctanswer)) {

                // Anropar answerfunction om checkbox är ifylld
                answerFunction(myQuestions[x].correctanswer);
                numCorrect++; 
                
        }
    }

});
