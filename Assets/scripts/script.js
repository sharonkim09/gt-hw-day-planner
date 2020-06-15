$(document).ready(function () {
  // console.log("Hello World!")
  //Display date with moment.js
  var dayDisplay = moment().format("dddd, MMMM Do");
  //array of hours for time
  var currentTime = moment().format("h A");
  console.log(currentTime)
  $("#currentDay").append(dayDisplay);
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
  //for loop for making each time slot
  for (var i = 0; i < hours.length; i++) {
    // console.log(hours[i]);
    var hourEl = hours[i];
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
  
// text-areas are color-coded based on current time
    // present
    if (hourEl === currentTime) {
      $(timeBlocksEl).addClass("present");
    }
    //past
    else if (hourEl < currentTime) {
      $(timeBlocksEl).addClass("past");
    }
    //future
    else {
      $(timeBlocksEl).addClass("future");
    }

}
    //TODO
    //local storage: get

  //Event Listener & localStorage set
  $(".saveBtn").on("click", function (event) {
    // console.log("You clicked button!");
    event.preventDefault();
  });
});
