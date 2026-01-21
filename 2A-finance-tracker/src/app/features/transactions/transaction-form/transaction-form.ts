import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { TransactionService } from '../../../core/services/transaction';
import { Transaction } from '../../../core/models/transaction.model';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-form.html',
  styleUrl: './transaction-form.css'
})
export class TransactionForm {

  transaction: Transaction = {
    property: 'Earthy Escape',
    type: 'income',
    category: '',
    amount: 0,
    date: '',
    description: ''
  };

  constructor(
    private transactionService: TransactionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  saveTransaction(): void {
    this.transactionService.addTransaction(this.transaction).subscribe({
      next: () => {
        // 🔥 Always navigate back to list
        this.router.navigate(['/transactions']);
      },
      error: (err) => {
        console.error('Save error', err);
      }
    });
  }
}
