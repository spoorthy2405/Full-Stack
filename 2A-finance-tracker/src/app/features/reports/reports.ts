import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TransactionService } from '../../core/services/transaction';
import { Transaction } from '../../core/models/transaction.model';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports implements OnInit {

  transactions: Transaction[] = [];

  selectedPeriod: 'Monthly' | 'Quarterly' | 'Yearly' = 'Monthly';
  selectedYear: number = new Date().getFullYear();

  reportRows: {
    label: string;
    income: number;
    expense: number;
    profit: number;
  }[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getAllTransactions().subscribe({
      next: (data: Transaction[]) => {
        this.transactions = data;
        this.generateReport();
      },
      error: (err) => console.error(err)
    });
  }

  generateReport(): void {
    this.reportRows = [];

    if (this.selectedPeriod === 'Monthly') {
      this.generateMonthly();
    } 
    else if (this.selectedPeriod === 'Quarterly') {
      this.generateQuarterly();
    } 
    else {
      this.generateYearly();
    }
  }

  // ---------------- MONTHLY ----------------
  generateMonthly(): void {
    const months = [
      'January','February','March','April','May','June',
      'July','August','September','October','November','December'
    ];

    months.forEach((month, index) => {
      let income = 0;
      let expense = 0;

      this.transactions.forEach(t => {
        const d = new Date(t.date);

        if (d.getFullYear() === this.selectedYear && d.getMonth() === index) {
          if (t.type === 'income') {
            income += t.amount;
          } else {
            expense += t.amount;
          }
        }
      });

      this.reportRows.push({
        label: month,
        income,
        expense,
        profit: income - expense
      });
    });
  }

  // ---------------- QUARTERLY ----------------
  generateQuarterly(): void {
    const quarters = [
      { label: 'Q1 (Jan–Mar)', months: [0,1,2] },
      { label: 'Q2 (Apr–Jun)', months: [3,4,5] },
      { label: 'Q3 (Jul–Sep)', months: [6,7,8] },
      { label: 'Q4 (Oct–Dec)', months: [9,10,11] }
    ];

    quarters.forEach(q => {
      let income = 0;
      let expense = 0;

      this.transactions.forEach(t => {
        const d = new Date(t.date);

        if (d.getFullYear() === this.selectedYear && q.months.includes(d.getMonth())) {
          if (t.type === 'income') {
            income += t.amount;
          } else {
            expense += t.amount;
          }
        }
      });

      this.reportRows.push({
        label: q.label,
        income,
        expense,
        profit: income - expense
      });
    });
  }

  // ---------------- YEARLY ----------------
  generateYearly(): void {
    let income = 0;
    let expense = 0;

    this.transactions.forEach(t => {
      const d = new Date(t.date);

      if (d.getFullYear() === this.selectedYear) {
        if (t.type === 'income') {
          income += t.amount;
        } else {
          expense += t.amount;
        }
      }
    });

    this.reportRows.push({
      label: `Year ${this.selectedYear}`,
      income,
      expense,
      profit: income - expense
    });
  }
}
