let myQuestions = [{

    id: 1,
    question: "Vilket organ saknar sjöstjärnan?", // Flervalsfråga med checkboxes - flera rätta svar
    option: {
        a: "hjärnan", 
        b: "nervsystem"}, 
    correctanswer: ["b"],
},
{
    id: 2,
    question: "Var sitter sjöstjärnans ögon?", // True false-fråga
    option: {
        a: "huvudet", 
        b: "armarna"},
    correctanswer: ["b"],
},
{
    id: 3, 
    question: "Hur många armar kan en sjöstjärna som mest ha?", // Multiple choice fråga med ett rätt svar
    option: {
        a: "Fem", 
        b: "Tjugo"},  
    correctanswer: ["b"],
},
{
    id: 4, 
    question: "Vilken färg har bläckfiskars blod?", // True false-fråga
    option: {
        a: "Rött", 
        b: "Blått"},
    correctanswer: ["b"],
}, 
{
    id: 5, 
    question: "Hur många hjärtan har en bläckfisk?", // Multiple choice-fråga med ett rätt svar
    option: {
        a: "Ett", 
        b: "Två", 
        c: "Tre", 
        d: "Fyra"}, 
    correctanswer: ["c"],
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
    correctanswer: ["b"],
},
{
    id: 8, 
    question: "lorem ipsum",
    option: {
        a: "Ett",
        b: "Två",
    },
    correctanswer: ["b"], 
},
{
    id: 9, 
    question: "lorem ipsum", 
    option: {
        a: "hanna",
        b: "rubensson",
    },
    correctanswer: ["a"],
},
{
    id: 10, 
    question: "lorem ipsum", 
    option: {
        a: "lorem",
        b: "ipsum",
    }, 
    correctanswer: ["b"],
}

];

// Darkmode och lightmode
const darkMode = document.getElementById("darkMode") // Hämtar knappen darkMode
const styleElements = document.querySelectorAll("h1, h2, fieldset"); // Elementen jag vill styla
const lightMode = document.getElementById("lightMode"); // Hämtar knappen lightMode

// Uppdaterar vad som händer vid knapptryck
darkMode.addEventListener("click", () => {
    document.body.style.backgroundColor = "rgb(96, 25, 25)";
    document.body.style.color = "white";

    styleElements.forEach(element => {
        element.style.color = "#fff";
    });

}); 

// Uppdaterar vad som händer vid knapptryck
lightMode.addEventListener("click", () => {
    document.body.style.backgroundColor = "antiquewhite";

    styleElements.forEach(element => {
        element.style.color = "chocolate";
    })
})


// Här kommer funktionerna för vad som händer i quizet -------------------------------------------------

// Funktion för att hämta checkboxar

let currentQuestionIndex = 0; 

// Vilken fråga man är på 
let getCurrentQuestion = () => {

    for (let x=0; x<myQuestions.length; x++) {
    const question = myQuestions[currentQuestionIndex];
    return question;
}

}

let fetchSelectedValues = (question, value) => {

    const selectedValues = []; 
    
    // Fråga 1
    let hjärnan = document.getElementById("hjarna");
    let nervsystemet = document.getElementById("nervsystemet"); 
    
    if (hjärnan && hjärnan.checked) selectedValues.push("hjärnan");
    if (nervsystemet && nervsystemet.checked) selectedValues.push("nervsystemet");

    // Fråga 2
    let huvudet = document.getElementById("huvudet");
    let armarna = document.getElementById("armarna"); 

    if (huvudet && huvudet.checked) selectedValues.push("huvudet");
    if (armarna && armarna.checked) selectedValues.push("armarna");

    return selectedValues; 
    
}

// Tom array med youranswers
let yourAnswers = [];

// Lägger in svaren på frågorna i ett objekt
let rememberMyAnswer = () => {
    
    const question = getCurrentQuestion(); // Vilken fråga man är på

    yourAnswers.push({
        id: question.id,
        selectedanswer: fetchSelectedValues(),
        correctanswer: question.correctanswer, 
    });

}

const gradeTest = document.getElementById("gradeTest"); // Hämtar knappen gradeTest (rättning)

gradeTest.addEventListener("click", () => {

    console.log("Klickat på knappen!");
    
    const currentQuestion = getCurrentQuestion(); 
    let numCorrect = 0; 
    let numFail = 0; 

    const selectedValues = fetchSelectedValues(currentQuestion, currentQuestion.option); 


    // Fråga ett
    if (selectedValues.includes("hjärnan")) {
        console.log("Selected values:", selectedValues)
        numCorrect++;   
        
        console.log("Rätt svar på fråga 1!");

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Rätt svar på fråga ett!`; 
        ulList.appendChild(listElement);

    } else if (selectedValues.includes("nervsystemet")) {

        numFail++; 
        
        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Fel svar på fråga ett!`; 
        ulList.appendChild(listElement); 

    } 
    
    // Fråga två
    if (selectedValues.includes("huvudet")) {

        numFail++;

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Fel svar på fråga två!`; 
        ulList.appendChild(listElement); 

    } else if (selectedValues.includes("armarna")) {

        numCorrect++;

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Rätt svar på fråga två!`; 
        ulList.appendChild(listElement); 

    }

    // Fråga tre

    


    }); 

    // }); 
