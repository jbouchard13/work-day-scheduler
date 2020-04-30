// When the user loads the page:
// - They see a header displayed with the current date
// - Current date will be dynamically updated using moment.js
var currentTime = moment().format("dddd MMM Do YYYY");
$("#currentDay").text(currentTime);

    // - They see blocks with text areas for each hour of the work day
        // - Each block will be have their own ids depending on their hour
    // - The user can then input text into the displayed box
        // - Display a save button for the user with a class of .saveBtn
            // - When the save button is clicked the data is stored to local storage
            // - Generate a function to save all data to local storage
            // - Apply this function to an event listener for all of the saveBtns
        // - If the user reloads the page the data they input will persist


// Page will be dynamic depending on the time of day:
    // - Text boxes will receive the .past css class if it is past that time
        // - If past the time, use jquery .add() to add the .past class
    // - Text boxes will receive the .present css class if it is the current hour
        // If current time, use jquery .add()  to add the .present class
    // - Text boxes will receive the .future css class if it is in the future
        // - If in the future, use jquery .add() to add the .future class
