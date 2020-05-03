// When the user loads the page:
// - They see a header displayed with the current date
// - Current date will be dynamically updated using moment.js
var currentTime = moment().format("dddd MMM Do YYYY");
$("#currentDay").text(currentTime);
// Current time in military time to be used to update the textboxes
var moment24HrTime = moment().format("HH");
// Parse the string time from momemt to an integer
var current24HrTime = parseInt(moment24HrTime);
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
// Use a forEach() to display the necessary page elements
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
    id: hour.milTime,
  });
  textareaEl.attr("data-time", hour.milTime);

  // Create a button with a class of .saveBtn
  var saveBtnEl = $("<button>", {
    class: "saveBtn",
  }).text("Save");
  saveBtnEl.attr("data-time", hour.milTime);
  // Append the textarea and saveBtn to the row element
  rowEl.append(textareaEl, saveBtnEl);
  // Call the color change function to update the textarea's css
  colorChange(textareaEl);
});

// ********************* CLICK EVENT *******************************

// Add a click listener for the saveBtns
$(".saveBtn").on("click", function (e) {
  // Prevent the page from refreshing on click
  e.preventDefault();

  // Take the input data from the selected textarea element and save to local storage
  // Create variables for each textarea by id
  var nineAmText = $("#9").val();
  var tenAmText = $("#10").val();
  var elevenAmText = $("#11").val();
  var twelvePmText = $("#12").val();
  var onePmText = $("#13").val();
  var twoPmText = $("#14").val();
  var threePmText = $("#15").val();
  var fourPmText = $("#16").val();
  var fivePmText = $("#17").val();
  // Create a variable for each hour value and changing it to JSON
  var nineAmJSON = JSON.stringify(nineAmText);
  var tenAmJSON = JSON.stringify(tenAmText);
  var elevenAmJSON = JSON.stringify(elevenAmText);
  var twelvePmJSON = JSON.stringify(twelvePmText);
  var onePmJSON = JSON.stringify(onePmText);
  var twoPmJSON = JSON.stringify(twoPmText);
  var threePmJSON = JSON.stringify(threePmText);
  var fourPmJSON = JSON.stringify(fourPmText);
  var fivePmJSON = JSON.stringify(fivePmText);
  // Save the JSON values to local storage
  localStorage.setItem("9 AM", nineAmJSON);
  localStorage.setItem("10 AM", tenAmJSON);
  localStorage.setItem("11 AM", elevenAmJSON);
  localStorage.setItem("12 PM", twelvePmJSON);
  localStorage.setItem("1 PM", onePmJSON);
  localStorage.setItem("2 PM", twoPmJSON);
  localStorage.setItem("3 PM", threePmJSON);
  localStorage.setItem("4 PM", fourPmJSON);
  localStorage.setItem("5 PM", fivePmJSON);
});

// When the user refreshes the page:
// Call back data from local storage
var nineAmStored = localStorage.getItem("9 AM");
var tenAmStored = localStorage.getItem("10 AM");
var elevenAmStored = localStorage.getItem("11 AM");
var twelvePmStored = localStorage.getItem("12 PM");
var onePmStored = localStorage.getItem("1 PM");
var twoPmStored = localStorage.getItem("2 PM");
var threePmStored = localStorage.getItem("3 PM");
var fourPmStored = localStorage.getItem("4 PM");
var fivePmStored = localStorage.getItem("5 PM");
// Parse out the stored info into their variables
var nineAmParsed = JSON.parse(nineAmStored);
var tenAmParsed = JSON.parse(tenAmStored);
var elevenAmParsed = JSON.parse(elevenAmStored);
var twelvePmParsed = JSON.parse(twelvePmStored);
var onePmParsed = JSON.parse(onePmStored);
var twoPmParsed = JSON.parse(twoPmStored);
var threePmParsed = JSON.parse(threePmStored);
var fourPmParsed = JSON.parse(fourPmStored);
var fivePmParsed = JSON.parse(fivePmStored);
// Display their input data to the page
$("#9").text(nineAmParsed);
$("#10").text(tenAmParsed);
$("#11").text(elevenAmParsed);
$("#12").text(twelvePmParsed);
$("#13").text(onePmParsed);
$("#14").text(twoPmParsed);
$("#15").text(threePmParsed);
$("#16").text(fourPmParsed);
$("#17").text(fivePmParsed);

// *********************** COLOR CHANGING BOXES **************************

function colorChange(hourElement) {
  // If the time is less than the current time
  if (hourElement.attr("data-time") < current24HrTime) {
    // Add the .past class to the textarea
    hourElement.attr("class", "past textarea col");
    // If the time is the current time
  } else if (hourElement.attr("data-time") == current24HrTime) {
    // Add the .present class to the textarea
    hourElement.attr("class", "present textarea col");
    // If the time is in the future
  } else if (hourElement.attr("data-time") > current24HrTime) {
    // Then add the .future class to the textarea
    hourElement.attr("class", "future textarea col");
  }
}
