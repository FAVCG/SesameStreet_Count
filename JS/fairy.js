var numSecondWords = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten"
}

//you have to create the variable inside the function because you want it to execute once user hits button.
//The value attribute is how you get the actual value of the html element.
function generateSecondList() {
    var userSecondInput = document.getElementById("user-input2").value;
    var secondScrollbar = document.getElementById("scrollbar2");
    secondScrollbar.value = userSecondInput;

    console.log('userSecondInput: ', userSecondInput === '2');

    if (userSecondInput > 10 || userSecondInput % 2 !== 0 || userSecondInput === "0") {
        alert("Nah a uh!! Please insert an even number between 1-10.")
        //return exits out the function
        return;
    }
    // 1. Iterate through the number
    // 2. On each iteration build an html string.
    // 3. Set the html to the html string.
    //&nbsp to add a space horizontally

    var answer = ""; //A mutable variable can constantly change. 
    var fairies = "";

    for (var f = 2; f <= userSecondInput; f += 2) {
        fairies += "🧚🏼‍♀️🧚🏽‍♂️"; //adds 2 fairies every loop
        answer += `<h2>&nbsp&nbsp&nbsp${f}&nbsp &nbsp &nbsp ${numSecondWords[f]} &nbsp &nbsp &nbsp &nbsp${fairies}</h2>`; //
    }

    secondScrollbar.innerHTML = answer;
}