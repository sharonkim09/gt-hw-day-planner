$(document).ready(function () {
  // console.log("Hello World!")
  //Display date with moment.js
  var dayDisplay = moment().format("dddd, MMMM Do");
  //array of hours for time
  var currentTime = moment().format("h A");
  console.log(currentTime)
  $("#currentDay").append(dayDisplay);
  var hours = [
    "9AM",
    "10AM",
    "11AM",
    "12AM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];
  //for loop for making each time slot
  for (var i = 0; i < hours.length; i++) {
    // console.log(hours[i]);
    var hourEl = hours[i];
    // console.log(hourEl);
    // time-block & row: each row , need to create variable
    var timeBlocksEl = $("<div class = 'row time-block'>");
    $(".container").append(timeBlocksEl);
    // hour: leftside , need to create variable
    var hourColEl = $("<div class='hour col-1'>");
    timeBlocksEl.append(hourColEl);
    //description: text-area , need to create var
    var hourTask = $("<textarea class= 'description col-md-9'>");
    var saveButtonEl = $("<button type='button' class= 'saveBtn col-1'>");
    $(".container").append(timeBlocksEl);
    timeBlocksEl.append(hourColEl).append(hourTask).append(saveButtonEl);
    //show time as hour
    hourColEl.append(hourEl);
  }




});
