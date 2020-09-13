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


// Event listener for date entered in form

// Filter sighting data by datetime
