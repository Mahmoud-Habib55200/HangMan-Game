 // letters
const Letters = "abcdefghijklmnopqrstuvwxyz";
 

// get array from letters
let lettersArray = Array.from(Letters);
// console.log(lettersArray)

// select letter Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach(letter =>{

    // create Span
    let span = document.createElement("span");

    // create letter textNode
    let theLetter = document.createTextNode(letter);

    // append the Letter to Span
    span.appendChild(theLetter);

    // add classs to span
    span.className = "letter-box";

    // append span to the letters Container
    lettersContainer.appendChild(span)
});




// Object Of Words + Catagories

const Words = {
    programming : ["php","javascri","go","scale","fortran","r","mysql","paython"],
    Movies : ["prestige", "Inception" , "Parasite" , "Intersteller", "Whiplash" , "Memento" , "Coco" , "up"],
    people : ["Alberts", "Dsvdedommel" , "Dsvdedommel" , "Alexander" , "Mahmoud" , "Habib" ],
    countries:["Egypt" , "Syria" , "Yemen" , "Bahrien" , "Qatar" , "Ksa"],
    sports: ["salah" , "messi" , "benzema" , "ryiad" , "ronaldo"]
}

// Get Random Prparity
let allKeys = Object.keys(Words);
// console.log(allKeys);

// Get Random Proparity 

// 1 => Random Numbers  Depend On Kyes Lrngth
let randNumPro = Math.floor(Math.random() * allKeys.length)
// console.log(randNumPro)

// 2 => Catagory
let ranPropName = allKeys[randNumPro];
// console.log(ranPropName)

// 3 =>  Catagory Words
let ranPropValues = Words[ranPropName];
// console.log(ranPropValues);

// 4 =>  Random Numbers Depend On Word 
let ranValueName = Math.floor(Math.random() *ranPropValues.length)
// console.log(ranValueName)

// 5 => chosen Words
let randValueValue = ranPropValues[randNumPro];
 console.log(randValueValue);


// set catagory info
document.querySelector(".game-info .catagorey span") .innerHTML = ranPropName ;   //catagory

// select letters guess Element
let letterGuess = document.querySelector(".leteer-gues");

//convert Chosen Word 
let letterAndSpacing = Array.from(randValueValue);
// console.log(letterAndSpacing)

//create spans Depend On Word
letterAndSpacing.forEach(letter =>{
    //create span
    let span = document.createElement("span");

    //if letter is empty
    if(letter === ' '){
    span.className = "with_span"
    }
    //append span to letterGues
    letterGuess.appendChild(span);



});


    //Select Guess Span 
    let guessSpans = document.querySelectorAll(".leteer-gues span");

//Set Wwrong AAttemps
let wrongAttemps = 0;

//Slect The Draw Element
let TheDraw = document.querySelector(".hangman-drow");

//handle clicking On Letters 

document.addEventListener("click" , (e) =>{

        //Set THE Chose Statues
        let theStatues = false;

    if(e.target.className === "letter-box"){

        e.target.classList.add("clicked")
    }

    //gET cLICKED lEETER
    let TheClickLetter = e.target.innerHTML.toLowerCase();
    // console.log(TheClickLetter)

    //the Chosen word
    let theChosenWord = Array.from(randValueValue.toLowerCase());
    //Get The Chosen Word 
    theChosenWord.forEach((wordLetter , WordIndex) => {

        //if the clicked letter === to one of the chosen word
        if(TheClickLetter == wordLetter){
            // console.log(`found index number ${index}`)

            //set staues To Correct
            theStatues = true;

            //Loop ON gUESS spans
            guessSpans.forEach((span , spanIndex) => {
           if(WordIndex === spanIndex) {
            span.innerHTML = TheClickLetter;
           }
            })
        }
    })
    //Out Side Loop

    // console.log(theStatues);

    // iF Letter Is wrong
    if(theStatues !== true){
        //increase  The WRONG Attempts
        wrongAttemps++;

        //Add Class Wrong On THe Draw Element
        TheDraw.classList.add(`Wrong-${wrongAttemps}`);

        //play fail sounf
        document.getElementById("fail").play();
   if(wrongAttemps === 8){

    endGame();

    lettersContainer.classList.add("finished")

    

   }

   
     
    }else{
       
           //play sucses sounf
           document.getElementById("sucses").play();
           
    }
 


});



//End Function Game
function endGame(){

    //Create Div
    let div = document.createElement("div");

    //create text
    let text = document.createTextNode(`Game Over , The Word Is ${randValueValue}`);

    //append The Text To Div
    div.appendChild(text) ;

    //add Class On Div
    div.className = "Poupp";

    //append to the body
    document.body.appendChild(div)
}






//    function winGame() {
//         //Create Div
//         let divs = document.createElement("div");

//         //create text
//         let texts = document.createTextNode(`You Are Win IN This Game`);
    
//         //append The Text To Div
//         divs.appendChild(texts) ;
    
//         //add Class On Div
//         divs.className = "Winnwer";
    
//         //append to the body
//         document.body.appendChild(divs)
//    }