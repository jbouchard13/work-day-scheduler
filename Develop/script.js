// When the user loads the page:
// - They see a header displayed with the current date
// - Current date will be dynamically updated using moment.js
var currentTime = moment().format("dddd MMM Do YYYY");
$("#currentDay").text(currentTime);
// Current time in military time to be used to update the textboxes
var current24HrTime = moment().format("HH");
console.log(current24HrTime);

// - Create an array of hour objects to dynamically update the page with jquery
var hours = [
  { time: "9 AM", milTime: 09 },
  { time: "10 AM", milTime: 10 },
  { time: "11 AM", milTime: 11 },
  { time: "12 PM", milTime: 12 },
  { time: "1 PM", milTime: 13 },
  { time: "2 PM", milTime: 14 },
  { time: "3 PM", milTime: 15 },
  { time: "4 PM", milTime: 16 },
  { time: "5 PM", milTime: 17 },
];

// ******************* DISPLAYING BOXES ***************************

// - They see blocks with text areas for each hour of the work day
// - Use a forEach() to display the necessary page elements
hours.forEach(function (hour) {
  // Create a div for the bootstrap row
  var rowEl = $("<div>", {
    class: "row",
  });
  // Append the row to the container
  $(".container").append(rowEl);

  // Create a div for the timeblock that'll show the user the hour
  var timeBlockEl = $("<div>", {
    // Add a two classes, .time-block for styling, .col-1 for bootstrap positioning
    class: "time-block col-1",
  });
  // Append the timeblock element to the row element
  rowEl.append(timeBlockEl);

  // Create a div for the hour element
  var hourEl = $("<div>", {
    // Add the .hour class to the hour element
    class: "hour",
    // Set the text of the hour div to the time property of the hour
  }).text(hour.time);
  // Append the hour element to the timeblock element
  timeBlockEl.append(hourEl);

  // Create a textarea with the classes of .textarea and .col
  var textareaEl = $("<textarea>", {
    class: "textarea col",
  });
  textareaEl.attr("data-time", hour.milTime);
  // Create a button with a class of .saveBtn
  var saveBtnEl = $("<button>", {
    class: "saveBtn",
  }).text("Save");
  saveBtnEl.attr("data-time", hour.milTime);
  // Append the textarea and saveBtn to the row element
  rowEl.append(textareaEl, saveBtnEl);
});

// ********************* CLICK EVENT *******************************

// Add a click listener for the saveBtns
$(".saveBtn").on("click", function () {
  var militaryTime = $(this).attr("data-time");
  console.log(militaryTime);

  var todoInput = $(".textarea").val();
  console.log(todoInput);

  // Take the input data from the textarea element and save to local storage
  // Create a variable for the data called todoJSON
  // Save todoJSON to local storage
});

// - Generate a function to save all data to local storage
// - Apply this function to an event listener for all of the saveBtns
// - If the user reloads the page the data they input will persist

// *********************** COLOR CHANGING BOXES **************************

// Page will be dynamic depending on the time of day:
// - Text boxes will receive the .past css class if it is past that time
// - If past the time, use jquery .add() to add the .past class
// - Text boxes will receive the .present css class if it is the current hour
// If current time, use jquery .add()  to add the .present class
// - Text boxes will receive the .future css class if it is in the future
// - If in the future, use jquery .add() to add the .future class
