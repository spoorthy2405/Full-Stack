import { Component, OnInit } from '@angular/core';
//Component → Used to tell Angular “this class is a UI component”
//Dashboard must load data once when the page opens → ngOnInit() is perfect.
import { CommonModule } from '@angular/common';
//provide directives pipes for usage in component templates
import { NgChartsModule } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
// third party library for charts generated using Chart.js

import { TransactionService } from '../../core/services/transaction';
//transaction serviceis like a service that enables this dashbaord to interact with backend ie.DB.JSON using different methods
import { Transaction } from '../../core/models/transaction.model';
//Transaction model defines the structure of transaction objects used in this dashboard

@Component({
  selector: 'app-dashboard',
  //html will use <app-dashboard></app-dashboard> to render this component so to display dashboard UI this tag must be present in the parent component html
  standalone: true,
  //no ngmodule file needed for this component it is independent 
  imports: [CommonModule, NgChartsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  //explore-so angular can use this class
  //implements onInit → this class must have ngOnInit() method i.e it will intialise and open 

  // UI state
  dataReady = false;
  //it is for ngif i.e prevent showing dashboard data until it is fully loaded i.e before data arrives from backend

  totalIncome = 0;
  totalExpense = 0;
  netProfit = 0;
  //intitalvalues for overall totals

  earthyIncome = 0;
  earthyExpense = 0;
  millenniumIncome = 0;
  millenniumExpense = 0;
  //intial individual values of properties

  // Chart config
  barChartData: ChartData<'bar'> = {
  //variableName: type and in that ChartData is generic type which takes 'bar' as parameter to specify bar chart ="{ INTIALVALUES}"
    labels: ['Income', 'Expense'],//x axis labels
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ['#2ecc71', '#e74c3c']
      }
    ]
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,//works on different screen sizes
    plugins: {
      //plugins means extra features for charts (legends, titles, tooltips)
      legend: { display: false }
      //legend is hided here
    }
  };

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadDashboardData();
    //When dashboard loads:Component created, ngOnInit() fires,Data fetching starts
  }

  private loadDashboardData(): void {
    //private because only this class will use it and loadDashboardData() is function name and (): void return nothing
    this.transactionService.getAllTransactions().subscribe({
      //from transaction service which we called in constructor we call getAllTransactions() method to fetch all transactions from backend DB.JSON
      // subscribe() method is used to handle asynchronous data streams , i.e whenever data comes from backend we define what to do with it inside subscribe()
      next: (transactions: Transaction[]) => {
      //next: success callback means when data arrives successfully from backend this function will execute and transactions variable of type Transaction array will hold that data
        this.calculateDashboard(transactions);
        //fetched transactions are passed to calculateDashboard() method to compute totals and other values
        this.updateChart();
        //after calculations updateChart() method is called to refresh chart data with new totals
        this.dataReady = true;
        //after all data is loaded and processed set dataReady to true so that ngif in html can show the dashboard UI

      },
      error: (err) => {
        //if api fails then..
        console.error('Dashboard load error', err);
      }
    });
  }

  private calculateDashboard(transactions: Transaction[]): void {
    // Reset all values
    this.totalIncome = 0;
    this.totalExpense = 0;
    this.earthyIncome = 0;
    this.earthyExpense = 0;
    this.millenniumIncome = 0;
    this.millenniumExpense = 0;

    transactions.forEach(t => {
      //foreach transaction t in transactions array do the following

      // Overall totals
      if (t.type === 'income') {
        this.totalIncome += t.amount;
      } else {
        this.totalExpense += t.amount;
      }

      // Earthy Escape
      if (t.property === 'Earthy Escape') {
        if (t.type === 'income') {
          this.earthyIncome += t.amount;
        } else {
          this.earthyExpense += t.amount;
        }
      }

      // Millennium Farm House
      if (t.property === 'Millennium Farm House') {
        if (t.type === 'income') {
          this.millenniumIncome += t.amount;
        } else {
          this.millenniumExpense += t.amount;
        }
      }
    });

    this.netProfit = this.totalIncome - this.totalExpense;
  }

  private updateChart(): void {
    this.barChartData = {
      labels: ['Income', 'Expense'],
      datasets: [
        {
          data: [this.totalIncome, this.totalExpense],
          backgroundColor: ['#2ecc71', '#e74c3c']
        }
      ]
    };
  }
}
//in general angular doesnt return values from functions it updates using class varibales
//i.e in class itself we declared this varibales so they are by default public and we have accessed them in every class using this so automatically that data wi be changed and will be rendered in ui as these are binded in html page using {{}} interpolation

//ngOnInit() lifecycle hook
// called once after the component is initialized
// perfect for fetching initial data for the component


