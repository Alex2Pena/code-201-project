function populatePets() {
  if (localStorage.length > 0)
    var getProfiles = localStorage.getItem('userName');
  var getPets = JSON.parse(getProfiles);
  myProfile.userName = getPets;
  renderCollection();
}
  
renderCollection() {
 var name = myprofile.this.name;
 for (var i=0; i<myProfile.petCards.length; i++)
    labelData.push(myProfile.petCards.name);
}
function addRow(tableID) {
    // Get a reference to the table
    let tableRef = document.getElementById(my-table);
  
    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);
  
    // Insert a cell in the row at index 0
    let newCell = newRow.insertCell(0);
   
    // Append a text node to the cell
    let newText = document.createTextNode('New bottom row');
    newCell.appendChild(newText);
  }
  // Call addRow() with the table's ID
  addRow('my-table');
populatePets();

console.log();
