// Fetch sighting data from data.js
var tableData = data;

// Add table to web page and append rows for each sighting

// Select table
var tbody = d3.select("tbody");

// Add rows and data
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Event listener for form

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".filter");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runFilter);
form.on("submit",runFilter);

// Create the function to run for both events
function runFilter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);

};


// Filter sighting data by datetime 
