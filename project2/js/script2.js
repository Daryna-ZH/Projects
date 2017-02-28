// Date 

$(document).ready(function() {
var d = new Date();
var dd = d.getDate();
var month = new Array(12);
month[0] = "JAN";
month[1] = "FEB";
month[2] = "MAR";
month[3] = "APR";
month[4] = "MAY";
month[5] = "JUNE";
month[6] = "JULY";
month[7] = "AUG";
month[8] = "SEPT";
month[9] = "OCT";
month[10] = "NOV";
month[11] = "DEC";


$('.date').append("<p>" + d.getFullYear() + "</p>");
$('.date').append("<p>" + month[d.getMonth()] + "</p>");
if (dd < 10) {
	$('.date').append("<p>" + "0" + dd + "</p>");
} else {
	$('.date').append("<p>" + d.getDate() + "</p>")
}

$('.date p:last-child').css({marginTop:"16px", fontSize:"25px"})
})
