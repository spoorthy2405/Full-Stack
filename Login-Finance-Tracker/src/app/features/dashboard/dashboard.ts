import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

import { TransactionService } from '../../core/services/transaction';
import { Transaction } from '../../core/models/transaction.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  // UI state
  dataReady = false;

  // Overall totals
  totalIncome = 0;
  totalExpense = 0;
  netProfit = 0;

  // Place-wise totals (🔥 THIS FIXES YOUR ERROR)
  earthyIncome = 0;
  earthyExpense = 0;

  millenniumIncome = 0;
  millenniumExpense = 0;

  // Chart config
  barChartData: ChartData<'bar'> = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ['#2ecc71', '#e74c3c']
      }
    ]
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  };

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.transactionService.getAllTransactions().subscribe({
      next: (transactions: Transaction[]) => {
        this.calculateDashboard(transactions);
        this.updateChart();
        this.dataReady = true;
      },
      error: (err) => {
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
