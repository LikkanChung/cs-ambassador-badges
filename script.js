function insertRow() {
	var table = document.getElementById("badgeForm");
	var row = table.insertRow(-1)

	var name = row.insertCell(0);
	var pronoun = row.insertCell(1);
	var line1 = row.insertCell(2);
	var line2 = row.insertCell(3);

	name.innerHTML = '<input type="text" placeholder="Name" class="form-control">';
	pronoun.innerHTML = '<input type="text" placeholder="Pronouns" class="form-control">';
	line1.innerHTML = '<input type="text" placeholder="Course Role Line 1" class="form-control">';
	line2.innerHTML = '<input type="text" placeholder="Course Role Line 2 (Optional)" class="form-control">';
}

function downloadPDF() {
	var table = document.getElementById("badgeForm");
	var count = table.rows.length;

	var i;
	for (i = 0; i < count; i++) {
		var row = table.rows[i];
		var name = row.cells[0];

		console.log(i + ": " + name );
	}
}