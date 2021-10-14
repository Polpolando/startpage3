function startTime() {
	const today = new Date();
 var monthName = ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"];
 var weekdayName = ["nie", "pon", "wt", "śr", "czw", "pt", "sob"];
 let year = today.getFullYear();
 let month = monthName[today.getMonth()];
 let weekday = weekdayName[today.getDay()];
 let day = today.getDate();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('time').innerHTML =  weekday+", "+day+" "+month+" "+year+", "+h + ":" + m + ":" + s+" CEST"
	setTimeout(startTime, 1000);
}
function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}