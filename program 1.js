
//check year is leap or not
function check_leapyear() {
    var year;
    year = document.getElementById("year").value;
    //condition for leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        alert(year + " is a leap year");
    }
    else {
        alert(year + " is not a leap year");
    }
}