var numWords = {
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
function generateList() {
    var userInput = document.getElementById("user-input").value;
    var scrollbar = document.getElementById("scrollbar");
    scrollbar.value = userInput;

    if (userInput > 10 || userInput === "0") {
        alert("Nah a uh!! Please insert a number between 1-10.")
        //return exits out the function
        return;
    }
    // 1. Iterate through the number
    // 2. On each iteration build an html string.
    // 3. Set the html to the html string.
    //&nbsp to add a space horizontally

    var result = ""; //A mutable variable can constantly change. 
    var cookies = "";

    for (var c = 1; c <= userInput; c++) {
        // todo
        cookies += "🍪";
        result += `<h2>&nbsp&nbsp&nbsp${c}&nbsp &nbsp &nbsp ${numWords[c]} &nbsp &nbsp &nbsp &nbsp${cookies}</h2>`;
    }
    scrollbar.innerHTML = result;
}
