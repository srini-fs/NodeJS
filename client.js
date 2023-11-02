// how to import existing module 
// var module = require('./server');

// module.log.console("Welcome")   // calling function
// module.log.file("Hi")           // calling function


const socket = io();

socket.on('newLine', (data) => {
    const { lineNumber, line } = data;
    const table = document.getElementById('dataTable');
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = lineNumber;
    cell2.innerHTML = line;
});

socket.on('fileCompleted', () => {
    console.log('File reading complete.');
});