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

// En variabel som räknar antal rätt
let numCorrect = 0;
let selectedValue = []; 

// Funktion för att kolla om checkboxes är ifyllda
let checkBoxFunction = (checked) => { // Fel parameter?

    // Fråga 1
    let hjarnan = document.querySelector("[value='a']:checked");
    let tarmen = document.querySelector("[value='b']:checked");
    let lungorna = document.querySelector("[value='c']:checked"); 
    let nervsystemet = document.querySelector("[value='d']:checked"); 

    // checked.forEach((box) => { // Lägger in checked i selectedValue - men funkar inte.
    //     selectedValue.push(box.value);
    // })

    if (hjarnan) selectedValue.push("a");
    if (tarmen) selectedValue.push("b");
    if (lungorna) selectedValue.push("c");
    if (nervsystemet) selectedValue.push("d");

    // if (box) selectedValue.push(box.value); // Kan man förenkla?

    if (hjarnan || tarmen || lungorna || nervsystemet) {
        
        return selectedValue.length === 3; // Vet inte vilka villkor jag ska sätta?
    }
    
}

// Funktion för att lägga till listelement vid rättning
let answerFunction = (array) => {

const ulList = document.getElementById("ulList"); // Hämtar ul-listan

    // Loopar igenom myQuestions med rätt svar per fråga
    array.forEach(option => {
    let listElement = document.createElement("li");
    listElement.innerText = `Rätt svar på fråga var: ${option.correctanswer}`;
    ulList.appendChild(listElement);
    });
    

}

const gradeTest = document.getElementById("gradeTest"); // Hämtar knappen gradeTest (rättning)

gradeTest.addEventListener("click", () => {

    checkBoxFunction(); 

    //Filtrerar myQuestions - men ska jag jämföra den med selectedValue? 
    let filteredValue = myQuestions.filter((option) => {
        return selectedValue.includes(option.correctanswer);
    });
    
    answerFunction(filteredValue);

    // let filteredValue = myQuestions.filter((option) => {
    //   return selectedValue.includes(option.option) && selectedValue.includes(option.option);
    // });
    // answerFunction(filteredValue);

    console.log("Frågor:", myQuestions);
    console.log("selected value:", selectedValue); // Funkar - men loopar igenom alla svar
    console.log("filtrerat value:", filteredValue);  // Funkar - men loopar igenom alla svar
});