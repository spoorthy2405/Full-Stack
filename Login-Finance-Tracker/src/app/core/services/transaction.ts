import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'http://localhost:3000/transactions';

  constructor(private http: HttpClient) {}

  getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl, transaction);
  }

  updateTransaction(id: number, transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.apiUrl}/${id}`, transaction);
   }

  deleteTransaction(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Transaction } from '../models/transaction.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class TransactionService {

//   private apiUrl = 'http://localhost:3000/transactions';

//   constructor(private http: HttpClient) {}

//   getAllTransactions(): Observable<Transaction[]> {
//     return this.http.get<Transaction[]>(this.apiUrl);
//   }

//   addTransaction(transaction: Transaction): Observable<Transaction> {
//     return this.http.post<Transaction>(this.apiUrl, transaction);
//   }

//   updateTransaction(id: number, transaction: Transaction): Observable<Transaction> {
//     return this.http.put<Transaction>(`${this.apiUrl}/${id}`, transaction);
//   }

//   deleteTransaction(id: number|string): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }
// export default TransactionService;

