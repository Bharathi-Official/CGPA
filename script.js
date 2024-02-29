function addRow() {
    var table = document.getElementById("gradeTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = '<input type="text" class="subject-name">';
    cell2.innerHTML = '<input type="number" class="grade-point" step="0.01">';
    cell3.innerHTML = '<input type="number" class="credit-point" step="0.5">';
    cell4.innerHTML = '<span class="gp-cp">0</span>';
}

function calculateCGPA() {
    var rows = document.querySelectorAll("#gradeTable tr");
    var totalCreditPoints = 0;
    var totalGC = 0;
    rows.forEach(function(row) {
        var gradePoint = parseFloat(row.querySelector(".grade-point").value);
        var creditPoint = parseFloat(row.querySelector(".credit-point").value);
        var gpTimesCp = gradePoint * creditPoint;
        row.querySelector(".gp-cp").textContent = gpTimesCp.toFixed(2);
        totalCreditPoints += creditPoint;
        totalGC += gpTimesCp;
    });
    var cgpa = totalGC / totalCreditPoints;
    document.getElementById("result").innerHTML = `<p>CGPA: ${cgpa.toFixed(2)}</p>`;
}
