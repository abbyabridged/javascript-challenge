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


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the filter button or pressing the enter key
button.on("click", runFilter);
form.on("submit",runFilter);

// Create the function to run for the form
function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);

    // Clear the unfiltered data
    tbody.html("");

    // Filter table based on input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // console.log(filteredData);

    // Display the filtered dataset
    filteredData.forEach((sighting) => {
    var row = tbody.append('tr');
    Object.entries(sighting).forEach(([key, value]) => {
        // console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
        });
    });
};

