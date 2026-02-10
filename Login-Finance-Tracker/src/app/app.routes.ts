import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { TransactionList} from './features/transactions/transaction-list/transaction-list';
import { Reports } from './features/reports/reports';
import { TransactionForm } from './features/transactions/transaction-form/transaction-form';
export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'transactions', component: TransactionList},
   { path: 'transactions/edit/:id', component: TransactionForm },
  { path: 'transactions/add', component: TransactionForm },
  { path: 'reports', component: Reports }
];

// This means:
// routes is an array
// Each item defines one route
// This array is used by provideRouter(routes) in app.config.ts

// Route definitions:       
// 1️⃣ { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
// When URL is empty (base URL) ,“When the app opens, automatically go to Dashboard.”
// Redirect to 'dashboard' page
// pathMatch: 'full' means match the entire URL
