import { Routes } from '@angular/router';

import { Dashboard } from './features/dashboard/dashboard';
import { TransactionList } from './features/transactions/transaction-list/transaction-list';
import { TransactionForm } from './features/transactions/transaction-form/transaction-form';
import { Reports } from './features/reports/reports';   // ✅ ADD THIS

import { LoginComponent } from './auth/login/login';
import { SignupComponent } from './auth/signup/signup';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [

  // default page → LOGIN
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // auth pages
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // protected pages
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
  { path: 'transactions', component: TransactionList, canActivate: [AuthGuard] },
  { path: 'transactions/add', component: TransactionForm, canActivate: [AuthGuard] },
  { path: 'transactions/edit/:id', component: TransactionForm, canActivate: [AuthGuard] },
  { path: 'reports', component: Reports, canActivate: [AuthGuard] }

];
