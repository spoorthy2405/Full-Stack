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

  totalIncome = 0;
  totalExpense = 0;
  netProfit = 0;

  dataReady = false;

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
    this.loadDashboardData(); // ✅ MUST BE HERE
  }

  loadDashboardData(): void {
    this.transactionService.getAllTransactions().subscribe({
      next: (transactions: Transaction[]) => {
        this.calculateTotals(transactions);
        this.updateChart();
        this.dataReady = true; // ✅ UI UNLOCK
      },
      error: (err) => console.error('Dashboard error:', err)
    });
  }

  private calculateTotals(transactions: Transaction[]): void {
    this.totalIncome = 0;
    this.totalExpense = 0;

    transactions.forEach(t => {
      if (t.type === 'income') {
        this.totalIncome += t.amount;
      } else {
        this.totalExpense += t.amount;
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
