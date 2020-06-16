$(document).ready(function () {
  // console.log("Hello World!")
  //Display date with moment.js
  var dayDisplay = moment().format("dddd, MMMM Do");
  //Display time with moment.js
  var currentTime = moment().format("hA");
  // console.log(currentTime);
  $("#currentDay").append(dayDisplay);
  //Array of time
  var hours = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 AM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
  ];
  //Function to dynamically generate elements
  function generateInput() {
    // console.log(hours[i]);
    var hourEl = hours[i];
    var timeBlocksEl = $(`<div class = "row time-block">`);
    var hourSlotEl = $("<div class='hour col-1'>");
    //Getting local storage and setting an id of their respective hours index
    var hourTask = $("<textarea class= ' description form col-9'>").attr(
      "id",
      hours[i]
    ).val(JSON.parse(localStorage.getItem(hours[i])));
    var saveButtonEl = $(
      "<button type='button' id='text-input' class= 'saveBtn col-1'>"
    );
    //Save icon class found on w3schools
    //https://www.w3schools.com/icons/tryit.asp?filename=tryicons_fa-save
    var saveIconEl = $("<i class='fas fa-save'>");
    //Had to push elements in order or it'll break
    $(".container").append(timeBlocksEl);
    timeBlocksEl.append(hourSlotEl).append(hourlyTask).append(saveButtonEl);
    //Time shown in each 
    hourSlotEl.append(hourEl);
    saveButtonEl.append(saveIconEl);
    // text-areas are color-coded based on current time
    if (hourEl === currentTime) {
      $(hourlyTask).addClass("present");
    } else if (hourEl < currentTime) {
      $(hourlyTask).addClass("past");
    } else if (hourEl > currentTime) {
      $(hourlyTask).addClass("future");
    }
  }
  //Function Call
  for (var i = 0; i < hours.length; i++) {
    generateInput();
  }
  //Event Listener & localStorage set
  //inspired by morning office hours 6/15
  $(".saveBtn").on("click", function (event) {
    // console.log("You clicked button!");
    event.preventDefault();
    var value = $(this).siblings("textarea").val();
    var key = $(this).siblings("textarea").attr("id");
    console.log(key);
    console.log(value);
    localStorage.setItem(key, JSON.stringify(value));
  });
  // JSON.parse(localStorage.getItem(hours[i]))
});
