import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wife',
  templateUrl: './wife.component.html',
  styleUrls: ['./wife.component.css'],
})
export class WifeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getTimeSince(date: any) {
    var curDate = new Date();
    var gradDate = new Date(date);
    var timeInIndustry = curDate.getTime() - gradDate.getTime();
    var daysTotal = Math.floor(timeInIndustry / (1000 * 3600 * 24));
    var years = Math.floor(daysTotal / 365);
    var months = this.monthDiff(gradDate, curDate);
    months = months - years * 12;
    var days = Math.floor(daysTotal - years * 365 - months * 30.42);
    days = days < 0 ? 0 : days;
    days = days > 31 ? 31 : days;

    return `${years} years ${months} months and ${days} days`;

    // var curYear = this.getYear();
    // var timeProgramming = curYear - 2014;
    // return timeProgramming;
  }

  monthDiff(dateFrom: any, dateTo: any) {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  }
}
