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

let rememberMyAnswer = (isCorrect) => {
    
    const question = getCurrentQuestion(); // Vilken fråga man är på

    yourAnswers.push({
        
        id: question.id,
        question: question.question,
        selectedanswer: fetchSelectedValues(), // Funkar - bör lägga in en sträng 
        correctanswer: question.correctanswer, // Funkar - bör lägga in en sträng
        //Korrekt svar - ska innehålla en sträng som ska skrivas ut i html-elementet
    });

}

// Funktion för att kolla om checkboxes är ifyllda
let fetchSelectedValues = (checked) => { // Fel parameter?
    const selectedValue = []; 

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
    let huvudet = document.getElementById("huvudet").value; // Behöver undvika värde av null
    let armarna = document.getElementById("armarna").value; 

    if (huvudet) selectedValue.push("huvudet"); 
    if (armarna) selectedValue.push("armarna"); 
    
    return selectedValue;
}
//Rättningsfunktion - selectedValues och correctanswer måste vara sorterade a-z
let isAllCorrectSelected = (selectedValues, correctanswer) => {

    if (selectedValues.length != correctanswer.length){ // Vet omedelbart att det är fel om man klickat i en checkbox för mycket
    return false; 
    }

    for (let k=0; k < selectedValues.length; k++){ 

        if (selectedValues[k] != correctanswer[k]) { // hitta något som inte stämmer - arrayerna har samma längd 
            return false; 
        }
    }    
    
    numCorrect++; // La in numcorrect för att räkna svar
    return true; // Vid rätt svar

} 

let getCurrentQuestion = () => {

    for (const item of myQuestions){
        
        if (item.id === myQuestions.id) { // La till denna boolean - vet ej om den funkar
            return item;
        } 
    }
    return undefined; 
}

// Funktion för att lägga till listelement vid rättning
let answerFunction = (obj) => { // Ändrade från array till object

const ulList = document.getElementById("ulList"); // Hämtar ul-listan
rememberMyAnswer(); // La till denna för att föra in vilket svar man gett????zz

    ulList.innerHTML=""; 

    // Loopar igenom myQuestions med rätt svar per fråga
    yourAnswers.forEach(option => { //La in yourAnswer
    let listElement = document.createElement("li");
    listElement.innerText = `Rätt svar på fråga ${option.id} var: ${option.correctanswer}, du svarade ${option.selectedanswer}`; // option.correctanswer funkar inte
    ulList.appendChild(listElement);
    
    });
    

}


const gradeTest = document.getElementById("gradeTest"); // Hämtar knappen gradeTest (rättning)

gradeTest.addEventListener("click", () => {

    const selectedValues = fetchSelectedValues(); 
    const currentQuestion = getCurrentQuestion(); 
    const isCorrect = isAllCorrectSelected(selectedValues, currentQuestion.correctanswer); // Får ut arrayen med correct answer
    
    answerFunction(isCorrect);

    // let filteredValue = myQuestions.filter((option) => {
    //   return selectedValue.includes(option.option) && selectedValue.includes(option.option);
    // });
    // answerFunction(filteredValue);

    console.log("Frågor:", myQuestions);
    console.log("selected value:", selectedValues); 
    console.log("filtrerat value:", isCorrect);  // Boolean
    console.log(getCurrentQuestion());
});