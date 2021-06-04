//1st show home page with a greeting background and popup.
//2nd once user enters name change background text and instruct user to input a number to count.
// As a user I am able to input a number and see the result from 0-mynumber 
// I can also input another number and have the computer show me in counts of 2 or 3, etc...

//set timeout function would only run once
//set interval function acts like timeout function only difference is it runs infinite times. 
// var waitFunc = () => {
//  return new Promise((res, rej) => {
//      setTimeout(() => res(), 500);
//  })
// }

setTimeout(async function() {
    var person = prompt("Hello, What is your name?"); // just targets the input

    var inputCheckReg = /[0-9-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/; //used regex (regular expression is a sequence of characters that specifies a search pattern)

    var isInvalid = inputCheckReg.test(person); //test method return true or false. in this case its checking to see if the user inputs a number or any other special char. 

    while (!person || isInvalid) { //!person means if user did not input anything in the field. or if user input a speacial char in the field, do this.
        if (isInvalid) {
            person = prompt("Please enter a valid name. Do not use any non-alphabetical characters!");
        } else {
            person = prompt("Please enter your name:");
        }
        isInvalid = inputCheckReg.test(person);
        // await waitFunc();// await only used in promises
    }

    document.getElementById("demo").innerHTML = "Hello " + person.slice(0, 25) + ". I am so Excited to count with you!"; //used slice to limit max character a user can input
}, 100);