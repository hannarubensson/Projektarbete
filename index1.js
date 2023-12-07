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
        b: "Tre"}, 
    correctanswer: ["b"],
},
{
    id: 6, 
    question: "Vilket djur är världens äldsta nu levande art?", // Flervalsfråga med checkboxes - flera rätta svar
    option: {
        a: "Svampdjur", 
        b: "Bläckfisk"}, 
    correctanswer: ["a"],
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
    question: "Vilket är det minsta djuret i havet?",
    option: {
        a: "Djurplankton",
        b: "Krill",
    },
    correctanswer: ["b"], 
},
{
    id: 9, 
    question: "Har bläckfiskar näbbar?", 
    option: {
        a: "Sant",
        b: "Falskt",
    },
    correctanswer: ["a"],
},
{
    id: 10, 
    question: "Vilket är havets vänligaste djur?", 
    option: {
        a: "Vithaj",
        b: "Delfin",
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

    // Fråga 3
    let fem = document.getElementById("fem"); 
    let tjugo = document.getElementById("tjugo");

    if (fem && fem.checked) selectedValues.push("fem");
    if (tjugo && tjugo.checked) selectedValues.push("tjugo");

    // Fråga 4
    let red = document.getElementById("red"); 
    let blue = document.getElementById("blue"); 

    if (red && red.checked) selectedValues.push("red");
    if (blue && blue.checked) selectedValues.push("blue"); 

    // Fråga 5
    let ett = document.getElementById("ett"); 
    let tre = document.getElementById("tre"); 

    if (ett && ett.checked) selectedValues.push("ett"); 
    if (tre && tre.checked) selectedValues.push("tre"); 

    // Fråga 6
    let svampdjur = document.getElementById("svampdjur"); 
    let octopus = document.getElementById("octopus"); 

    if (svampdjur && svampdjur.checked) selectedValues.push("svampdjur");
    if (octopus && octopus.checked) selectedValues.push("octopus"); 

    // Fråga 7
    let pufferFish = document.getElementById("pufferfish"); 
    let boxJellyFish = document.getElementById("boxJellyFish"); 

    if (pufferFish && pufferFish.checked) selectedValues.push("pufferfish"); 
    if (boxJellyFish && boxJellyFish.checked) selectedValues.push("boxjellyfish"); 

    // Fråga 8
    let djurPlankton = document.getElementById("djurPlankton"); 
    let krill = document.getElementById("krill"); 

    if (djurPlankton && djurPlankton.checked) selectedValues.push("djurplankton"); 
    if (krill && krill.checked) selectedValues.push("krill"); 

    // Fråga 9
    let sant = document.getElementById("sant"); 
    let falskt = document.getElementById("falskt"); 

    if (sant && sant.checked) selectedValues.push("sant");
    if (falskt && falskt.checked) selectedValues.push("falskt");

    // Fråga 10
    let vitHaj = document.getElementById("vitHaj"); 
    let delfin = document.getElementById("delfin"); 

    if (vitHaj && vitHaj.checked) selectedValues.push("vithaj"); 
    if (delfin && delfin.checked) selectedValues.push("delfin"); 


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


    // Fråga 1
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
    
    // Fråga 2
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

    // Fråga 3
    if (selectedValues.includes("fem")) {

        numFail++; 

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Fel svar på fråga tre!`; 
        ulList.appendChild(listElement); 

    } else if (selectedValues.includes("tjugo")) {

        numCorrect++; 

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Rätt svar på fråga tre!`; 
        ulList.appendChild(listElement); 

    }

    // Fråga 4
    if (selectedValues.includes("red")) {

        numFail++; 

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Fel svar på fråga fyra!`; 
        ulList.appendChild(listElement); 


    } else if (selectedValues.includes("blue")) {

        numCorrect++; 

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Rätt svar på fråga fyra!`; 
        ulList.appendChild(listElement); 

    }

    // Fråga 5
    if (selectedValues.includes("ett")) {

        numFail++; 

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Fel svar på fråga fem!`; 
        ulList.appendChild(listElement); 
    } else if (selectedValues.includes("tre")) {

        numCorrect++; 
        
        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Rätt svar på fråga fem!`; 
        ulList.appendChild(listElement); 

    }

    // Fråga 6

    if (selectedValues.includes("svampdjur")) {

        numCorrect++; 

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Rätt svar på fråga sex!`; 
        ulList.appendChild(listElement); 

    } else if (selectedValues.includes("octopus")) {

        numFail++; 

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Fel svar på fråga sex!`; 
        ulList.appendChild(listElement); 
    }

    // Fråga 7

    if (selectedValues.includes("pufferfish")) {

        numFail++; 

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Fel svar på fråga sju!`; 
        ulList.appendChild(listElement); 

    } else if (selectedValues.includes("boxjellyfish")) {

        numCorrect++; 

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Rätt svar på fråga sju!`; 
        ulList.appendChild(listElement); 

    }

    // Fråga 8

    if (selectedValues.includes("djurplankton")) {

        numCorrect++; 

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Rätt svar på fråga åtta!`; 
        ulList.appendChild(listElement); 

    } else if (selectedValues.includes("krill")) {

        numFail++; 

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Fel svar på fråga åtta!`; 
        ulList.appendChild(listElement);

    }

    // Fråga 9
    if (selectedValues.includes("sant")) {

        numCorrect++; 

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Rätt svar på fråga nio!`; 
        ulList.appendChild(listElement);

    } else if (selectedValues.includes("falskt")) {

        numFail++; 

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Fel svar på fråga nio!`; 
        ulList.appendChild(listElement);
    }

    // Fråga 10

    if (selectedValues.includes("vithaj")) {

        numFail++; 

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Fel svar på fråga tio!`; 
        ulList.appendChild(listElement);

    } else if (selectedValues.includes("delfin")) {

        numCorrect++; 

        const ulList = document.getElementById("ulList");
        let listElement = document.createElement("li");
        listElement.innerText = `Rätt svar på fråga tio!`; 
        ulList.appendChild(listElement);

    }

    
        //     < 50% - Underkänt (röd) 1-4 rätt 
        // 50%-75% - Bra (gul/orange) 5-7 rätt 
        // > 75% - Riktigt bra jobbat (grönt) 8-10 rätt

    if (numCorrect > 8) {

        let vg = document.getElementById("vg"); 
        vg.innerHTML="<p style='color: green'>Du är väl godkänd</p>";
        
    } else if (numCorrect > 4) {

        let g = document.getElementById("g");
        g.innerHTML="<p style='color: orange'>Du är godkänd</p>"

    } else if (numCorrect < 4) {
        
        let u = document.getElementById("u");
        u.innerHTML = "<p style='color: red'>Du är underkänd!</p>";


    }

    }); 