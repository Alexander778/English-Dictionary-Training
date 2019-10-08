import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { TestingService } from '../services/testing.service';
import { Observable } from 'rxjs';
import { Result } from '../models/result';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  dates = [];
  userResults = [];
  maxResults = [];
  resultForStats: Observable<Result[]>;
  statsArray: Array<Result> = [];
  resultCollection: AngularFirestoreCollection<Result>;

  public barChartLabels: Label[] = this.dates; // dates
  public barChartData: ChartDataSets[] = [
    { data: this.userResults, label: 'Ваш результат' }, // user result
    { data: this.maxResults, label: 'Максимально можливий результат' } // max result
  ];

  constructor(public authService: AuthService, public testingService: TestingService, public db: AngularFirestore) {
  }

  ngOnInit() {
    this.getResults();
  }

  getResults() {
    this.resultCollection = this.db.collection<Result>('results',
      ref => ref
        .where('userId', '==', this.authService.user.email));
    this.resultForStats = this.resultCollection.valueChanges();
    this.resultForStats.subscribe(items => {
      this.statsArray = items;
      for (let i = 0; i < this.statsArray.length; i++) {
        this.dates.push(this.convertDate(this.statsArray[i].date));
        this.userResults.push(this.statsArray[i].result);
        this.maxResults.push(this.statsArray[i].maxResult);
      }
      console.log(this.dates);
      console.log(this.userResults);
      console.log(this.maxResults);
    });
  }

  convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    const d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('.');
  }


}
