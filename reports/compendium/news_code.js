var table_start = '<table class="table table-primary">';
var thead = '<thead><tr><td>Title</td><td>Source</td></tr></thead>';
var tbody_start = '<tbody>';

var outro = '</tbody></table>';
var intro = table_start + thead + tbody_start;
var content = "";
for (var i = 0; i < content_rows.length; i++) {
	var title = content_rows[i]['title'];
	var source = content_rows[i]['source'];
	var link = content_rows[i]['link'];
	var row = '<tr><td><a href="' + link + '">' + title + '</a></td><td>' + source + '</td></tr>';
	content = content + row;
}
var div = document.getElementById("news")
var addn = intro + content + outro;
div.innerHTML = addn;
