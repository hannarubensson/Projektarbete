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
        a: "huvudet", 
        b: "armarna"},
    correctanswer: ["b"],
},
{
    id: 3, 
    question: "Hur många armar kan en sjöstjärna som mest ha?", // Multiple choice fråga med ett rätt svar
    option: {
        a: "Fem", 
        b: "Sju", 
        c: "Tjugo", 
        d: "Trettio"},  
    correctanswer: ["c"],
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


// Här kommer funktionerna för vad som händer i quizet


// En variabel som räknar antal rätt
let numCorrect = 0;

// Vad yourAnswers kommer att innehålla för data
// {
    //id: "",
    //question: "",
    //selectedanswer: "",
    //correctanswer: "",
//}
let yourAnswers = [];

let rememberMyAnswer = () => {
    
    const question = getCurrentQuestion(); // Vilken fråga man är på

    yourAnswers.push({
        id: question.id,
        selectedanswer: fetchSelectedValues(),
        correctanswer: question.correctanswer, 
    });

}

// Funktion för att kolla om checkboxes är ifyllda - ska inte pusha in allt i samma array
let fetchSelectedValues = () => { 
    const selectedValue = []; 
    const selectedValueTwo =[]; 

    // Fråga 1
    let a = document.querySelector("[value='a']:checked");
    let b = document.querySelector("[value='b']:checked");
    let c = document.querySelector("[value='c']:checked"); 
    let d = document.querySelector("[value='d']:checked"); 

    if (a) selectedValue.push("a");
    if (b) selectedValue.push("b");
    if (c) selectedValue.push("c");
    if (d) selectedValue.push("d");

    //Fråga 2
    let huvudet = document.getElementById("huvudet");
    let armarna = document.getElementById("armarna"); 

    if (huvudet.checked) selectedValueTwo.push("På huvudet"); 
    if (armarna.checked) selectedValueTwo.push("På armarna"); 
    
    return selectedValue;  // Returnera en array med den specifika frågan - parameter med den spec. frågan
}


//Rättningsfunktion - selectedValues och correctanswer måste vara sorterade a-z
let isAllCorrectSelected = (selectedValues, correctanswer) => {

        if (selectedValues.length !== correctanswer.length) {
            return false;
        }
    
        for (let x = 0; x < selectedValues.length; x++) {
            if (selectedValues[x] !== correctanswer[x]) {
                
                return false;
            }
        }
    
        return true;
    }

let currentQuestionIndex = 0; // La in en ränare för att ta reda på vilken fråga man är på

// Räknar vilken fråga man är på
let getCurrentQuestion = () => {

        for (let x=0; x<myQuestions.length; x++) {
        const question = myQuestions[currentQuestionIndex];
        return question;
    }

}

// Funktion för att lägga till listelement vid rättning
let answerFunction = (obj) => {

    // const currentQuestion = getCurrentQuestion(); 
    rememberMyAnswer(); 

    const ulList = document.getElementById("ulList"); // Hämtar ul-listan
    ulList.innerHTML=""; 
    
    // console.log("CurrentQuestion:", currentQuestion);

        // Loopar igenom myQuestions med rätt svar per fråga
        yourAnswers.forEach(option => {
            console.log("option", option);
            let listElement = document.createElement("li");
            listElement.innerText = `Rätt svar på fråga ${option.id} var: ${option.correctanswer}, du svarade ${option.selectedanswer}`;
            ulList.appendChild(listElement);
        
        });
        
    
    }

const gradeTest = document.getElementById("gradeTest"); // Hämtar knappen gradeTest (rättning)

gradeTest.addEventListener("click", () => {
    console.log("Klickat på knappen!");

    const currentQuestion = getCurrentQuestion(); 

    for (let x=0; x < myQuestions.length; x++) { // Kan återanvända indexet till nästa fråga
        console.log("Forloop körs");
        
        currentQuestionIndex++;

        const selectedValues = fetchSelectedValues(); 
        const isCorrect = isAllCorrectSelected(selectedValues, currentQuestion.correctanswer);

        console.log("yourAnswers:", yourAnswers); 

    if (currentQuestionIndex === 1) {
        numCorrect++;   
        console.log("Rätt svar på fråga 1!");
        answerFunction(isCorrect);
    }

    else if (currentQuestionIndex === 2) {
            numCorrect++; 
            console.log("Rätt svar på fråga 2!");
            answerFunction(isCorrect);
        }
    }

    }); 
