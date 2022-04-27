function enterMonth() {
var monthVar = prompt("What month would you like to know about?");
monthVar = monthVar.toLowerCase(monthVar);
const dayS = document.getElementById("daysX");
const monthS = document.getElementById("monthX");
const styleS = document.getElementById("monthInput");
const deleteH = document.getElementById("Feb14").className = "noHeart";
const monthInfo = document.getElementById("moreInfo");

if (monthVar == "january") { 
    dayS.innerHTML="31";
    monthS.innerHTML="January.";
    styleS.className = "Jan31";
    deleteH;
    monthInfo.innerHTML = "The month of a new year in the Gregorian calendar. Celebrated on the first day of the month.";
}

else if (monthVar == "february") {
    dayS.innerHTML="28";
    monthS.innerHTML="February.";
    styleS.className = "Feb28";
    document.getElementById("Feb14").className = "Heart";
    monthInfo.innerHTML = "The month of a new year in Nisga'a culture. Occurs on the first crescent moon of the month.";
}

else if (monthVar == "march") {
    dayS.innerHTML="31";
    monthS.innerHTML="March.";
    styleS.className = "Mar31";
    deleteH;
    monthInfo.innerHTML = "Nowruz, the new year in Iranian culture. Marks the beginning of the Solar Hijri calendar.";
}

else if (monthVar == "april") {
    dayS.innerHTML="30";
    monthS.innerHTML="April.";
    styleS.className = "Apr30";
    deleteH;
    monthInfo.innerHTML = "The Hananmi month (Hananami translates to 'flower viewing'). The time of year when cherry blossom trees bloom.";
}

else if (monthVar == "may") {
    dayS.innerHTML="31";
    monthS.innerHTML="May.";
    styleS.className = "May31";
    deleteH;
    monthInfo.innerHTML = "The unofficial holiday for fans of 'Star Wars'. Lands on May 4th which is a pun for 'May the Force be with you'.";
}

else if (monthVar == "june") {
    dayS.innerHTML="30";
    monthS.innerHTML="June.";
    styleS.className = "Jun30";
    deleteH;
    monthInfo.innerHTML = "The month of LGBTQIA+ pride. Started by the Stonewall riot of 1969.";
}

else if (monthVar == "july") {
    dayS.innerHTML="31";
    monthS.innerHTML="July.";
    styleS.className = "Jul31";
    deleteH;
    monthInfo.innerHTML = "The month when Canada became a Confederation. July 1st, 1867 when Upper Canada, Lower Canada, New Brunswick and Nova Scotia united into Canada.";
}

else if (monthVar == "august") {
    dayS.innerHTML="31";
    monthS.innerHTML="August.";
    styleS.className = "Aug31";
    deleteH;
    monthInfo.innerHTML = "The celebration of left handed day is August 13th.<br> Credit to www.lefthandersday.com";
}

else if (monthVar == "september") {
    dayS.innerHTML="30";
    monthS.innerHTML="September.";
    styleS.className = "Sep30";
    deleteH;
    monthInfo.innerHTML = "Labour Day is celebrated by many countries around the world. In Canada and the US it is observed on the first Monday of the month.";
}

else if (monthVar == "october") {
    dayS.innerHTML="31";
    monthS.innerHTML="October.";
    styleS.className = "Oct31";
    deleteH;
    monthInfo.innerHTML = "The month of All Hallows' Eve/Hallowe'en. Celebrated on the 31st of the month.";
}

else if (monthVar == "november") {
    dayS.innerHTML="30";
    monthS.innerHTML="November.";
    styleS.className = "Nov30";
    deleteH;
    monthInfo.innerHTML = "Dia de Muertos/Day of the Dead, a Mexican holiday celebrated on the 2nd of the month.";
}

else if (monthVar == "december") {
    dayS.innerHTML="31";
    monthS.innerHTML="December.";
    styleS.className = "Dec31";
    deleteH;
    monthInfo.innerHTML = "The month of Christmas. A Christian holiday commemorating the birth of Jesus.";
}

else {
    alert("Please enter a month.");
}
}