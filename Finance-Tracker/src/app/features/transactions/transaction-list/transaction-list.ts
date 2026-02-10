import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { TransactionService } from '../../../core/services/transaction';
import { Transaction } from '../../../core/models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './transaction-list.html',
  styleUrl: './transaction-list.css'
})
export class TransactionList implements OnInit {

  transactions: Transaction[] = [];

  constructor(
    private transactionService: TransactionService,
    private router: Router
  ) {}

  loggedUserId = '';

ngOnInit(): void {
  this.loggedUserId = localStorage.getItem('userId')!;
  this.loadTransactions();
}


  loadTransactions(): void {
    this.transactionService.getAllTransactions().subscribe({
      next: (data) => {
        console.log('Transactions from backend:', data);
        this.transactions = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  deleteTransaction(id: number | string): void {
    this.transactionService.deleteTransaction(id).subscribe(() => {
      this.loadTransactions();
    });
  }

  editTransaction(id: number | string): void {
    this.router.navigate(['/transactions/edit', id]);
  }
}
