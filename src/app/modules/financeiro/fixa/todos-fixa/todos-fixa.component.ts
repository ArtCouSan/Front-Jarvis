import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-todos-fixa',
  templateUrl: './todos-fixa.component.html',
  styleUrls: ['./todos-fixa.component.scss']
})
export class TodosFixaComponent implements OnInit {

  constructor() { }

  PieChart;

  ngOnInit() {

    let data = {
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 1
        }]
    };

    this.PieChart = new Chart("pieChart", {
      type: 'pie',
      data: data
    });

  }
}
