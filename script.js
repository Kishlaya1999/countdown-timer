// Date for which you want to make the countdown timer 
let newYearDate = new Date("2021-12-31T23:59:59");    
//Goto this site for more info about above line (ctrl + click) : https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_string_iso4

// A function that runs after every 1sec i.e. 1000ms
setInterval(function () {
     countDownTime(newYearDate);   //  This function is called in every one second for changing second container 
}, 1);

// function for calculating the remaing time and displaying in page 
function countDownTime(newYearDate) {
     // This is the present date 
     let presentDate = new Date();
     // console.log(newYearDate);  //for checking that newYearDate is comming or not
     // selectiong all the containers for altering it 
     let months = document.getElementById("months");
//    // let weeks = document.getElementById("weeks");
     let days = document.getElementById("days");
     let hours = document.getElementById("hours");
     let minutes = document.getElementById("minutes");
     let seconds = document.getElementById("seconds");

     // calculating the remaing time from present date by subtracting newYearDate with presentDate 
     let monthsLeft = newYearDate.getMonth() - presentDate.getMonth();
//  // let weeksLeft = newYearDate.getMonth() - presentDate.getMonth();
     let daysLeft = newYearDate.getDate() - presentDate.getDate();
     let hoursLeft = newYearDate.getHours() - presentDate.getHours();
     let minutesLeft = newYearDate.getMinutes() - presentDate.getMinutes();
     let secondsLeft = newYearDate.getSeconds() - presentDate.getSeconds();

     // Now we have got the remaing time in different formats so we have to display it in the page and it is done by innerHTML 
     months.innerHTML = monthsLeft;
     days.innerHTML = daysLeft;
     hours.innerHTML = hoursLeft;
     minutes.innerHTML = minutesLeft;
     seconds.innerHTML = secondsLeft;

}