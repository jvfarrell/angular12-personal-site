import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getYear() {
    var currentTime = new Date();
    // returns the month (from 0 to 11)
    var month = currentTime.getMonth() + 1
    // returns the day of the month (from 1 to 31)
    var day = currentTime.getDate()
    var year = currentTime.getFullYear();
    return year;
  }

  getTimeProgramming() {
    var curDate = new Date();
    var gradDate = new Date("05/11/2014");
    var timeInIndustry = curDate.getTime() - gradDate.getTime();
    var daysTotal = Math.floor(timeInIndustry / (1000 * 3600 * 24));
    var years = Math.floor(daysTotal/365);
    var months = this.monthDiff(gradDate, curDate);
    months = months-years*12;
    var days = Math.floor(daysTotal - (years*365) - (months*30.42));
    days = days < 0 ? 0 : days;
    days = days > 31 ? 31 : days;


    return `${years} years ${months} months and ${days} days`;

    // var curYear = this.getYear();
    // var timeProgramming = curYear - 2014;
    // return timeProgramming;
  }

  monthDiff(dateFrom: any, dateTo: any) {
    return dateTo.getMonth() - dateFrom.getMonth() +
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
   }

   daysThisYear() {
     var daysPerMonth = [
       31, // May
       30, // June
       31, // July
       31, // August
       30, // September
       31, // October
       30, // November
       31, // December
       31, // January
       28, // February
       31, // March
       30, // April
     ];
     var curDate = new Date();
     var gradDate = new Date("05/11/2014");
     var monthDiff = curDate.getMonth() - gradDate.getMonth();
     var days = 0;
     if(monthDiff > 0){
      for (let index = 0; index < monthDiff; index++) {
        days = days+daysPerMonth[index];
      }
     }
     return days;


   }
}
