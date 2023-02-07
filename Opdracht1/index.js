const week = ["Maandag", " Dinsdag", " Woensdag", " Donderdag", " Vrijdag", " Zaterdag", " Zondag"];
document.getElementById("wholeWeek").innerHTML = week;
document.getElementById("workWeek").innerHTML = week.slice(0, 5);
document.getElementById("Weekend").innerHTML = week.slice(5, 7);
document.getElementById("wholeWeekReverse").innerHTML = week.reverse();
document.getElementById("workWeekReverse").innerHTML = week.slice(0, 5).reverse();
document.getElementById("WeekendReverse").innerHTML = week.slice(5, 7).reverse();
