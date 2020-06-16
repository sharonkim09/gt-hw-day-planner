$(document).ready(function () {
  // console.log("Hello World!")
  //Display date with moment.js
  var dayDisplay = moment().format("dddd, MMMM Do");
  //array of hours for time
  var currentTime = moment().format("hA");
  console.log(currentTime);
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
  function generateInput(){
    // console.log(hours[i]);
    var hourEl = hours[i];
    // time-block & row: each row , need to create variable
    var timeBlocksEl = $(`<div class = "row time-block">`);
    // timeBlocksEl.attr("id", hours[i])
    // hour: leftside , need to create variable
    var hourColEl = $("<div class='hour col-1'>");
    //description: text-area , need to create var
    var hourTask = $("<textarea class= ' description form col-9'>").attr("id",hours[i]);
    var saveButtonEl = $(
      "<button type='button' id='text-input' class= 'saveBtn col-1'>"
    );
    saveButtonEl.attr("data-id", i);
    //Save icon found class on w3
    var saveIconEl = $("<i class='fas fa-save'>");
    $(".container").append(timeBlocksEl);
    timeBlocksEl.append(hourColEl).append(hourTask).append(saveButtonEl);
    //show time as hour
    hourColEl.append(hourEl);
    saveButtonEl.append(saveIconEl);
    // text-areas are color-coded based on current time
    if (hourEl === currentTime) {
      $(hourTask).addClass("present");
    }
    else if (hourEl < currentTime) {
      $(hourTask).addClass("past");
    }
    else if (hourEl > currentTime) {
      $(hourTask).addClass("future");
    }
  }
  //Function Call 
  for (var i = 0; i < hours.length; i++) {
  generateInput();}
  //Event Listener & localStorage set
  //inspired by morning office hours 6/15
  $(".saveBtn").on("click", function (event) {
    // console.log("You clicked button!");
    event.preventDefault();
    var value = $(this).siblings("textarea").val();
    var key= $(this).siblings("textarea").attr("id")
    console.log(key);
    console.log(value);
    localStorage.setItem(key,JSON.stringify(value));
});
// JSON.parse(localStorage.getItem(hours[i]))
});
