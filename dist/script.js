//Initialize variables
let textBox = document.getElementById('textBox');

const addBtn = document.getElementById('addBtn');

//Adds tasks to a list and registers an event handler for closing the tasks
function addTask(task) {
    //Store a new task onto a variable, change its HTML, and append it to the list
    let newTask = document.createElement('li');
    newTask.innerHTML = '<span class="task-text">' + task + '</span><button class="done-btn">&#10006;</button>';
    document.querySelector('ol').appendChild(newTask);
    //Create a list of all done buttons
    let doneBtnList = document.querySelectorAll('.done-btn');
    //Find the last done button in the list and add an event listener to it
    doneBtnList[doneBtnList.length - 1].addEventListener("click", removeTask);
    console.log("ran function 'addTask'");
}

//Code executed upon clicking the "Add" button or releasing the "Enter" key
function addBtnClick(event) {
    let text = textBox.value;
    //Do not add the task if the input is empty
    if (text != "") {
        addTask(textBox.value);
        textBox.value = "";
        textBox.focus();
        console.log("ran function 'addBtnClick'");
    } else {
        console.log("cannot create task: text box input is empty");
    }
}

//Called to remove a task when the 'x' is clicked
function removeTask(event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    console.log("ran function 'removeTask'");
}

//Calls addBtnClick() when the 'Enter' key is released
function textBoxEnter(event) {
    if (event.key == "Enter") {
        addBtnClick();
    }
    console.log("ran function 'textBoxEnter'");
}

//Enables the event handlers after the DOM is loaded
function domLoaded() {
    addBtn.addEventListener("click", addBtnClick);
    textBox.addEventListener("keyup", textBoxEnter);
    console.log("ran function 'domLoaded'");
}

//Check if the DOM is fully loaded before running any functions
document.addEventListener("DOMContentLoaded", domLoaded);


/* Starter code js */
// // This is a simple JavaScript file that adds interactivity to the HTML page
// // It defines a function to show an alert when a link is clicked
// function sayHello() {
//     alert("Hello, world from javascript!");
// }
// // This function will be called when the link is clicked
// // It shows an alert with a message
// // Ensure the DOM is fully loaded before attaching the event listener
// document.addEventListener("DOMContentLoaded", function() {
//     const link = document.getElementById("hello-link");
//     if (!link) {
//         console.error("Link with ID 'hello-link' not found.");
//         return;
//     }
//     link.addEventListener("click", function(event) {
//         event.preventDefault(); // Prevent the default link behavior
//         sayHello();
//     });
// });

// async function getRandomJoke() {
//     return fetch('https://icanhazdadjoke.com/', {
//         headers: {
//             'Accept': 'text/plain'
//         }
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.text();
//     })
//     .catch(error => {
//         console.error('There was a problem fetching the joke:', error);
//         return "Failed to fetch a joke. Please try again later.";
//     });
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const jokeButton = document.getElementById("joke-button");
//     if (!jokeButton) {
//         console.error("Button with ID 'joke-button' not found.");
//         return;
//     }
//     jokeButton.addEventListener("click", async function() {

//             const jokeDisplay = document.getElementById("joke-display");
//             if (!jokeDisplay) {
//                 console.error("Element with ID 'joke-display' not found.");
//                 return;
//             }
//             jokeDisplay.textContent = "Loading joke...";
//             const joke = await getRandomJoke();
//             jokeDisplay.textContent = joke;
//     });
// });
