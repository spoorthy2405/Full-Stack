import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Insurance } from '../models/insurance.model';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  private apiUrl = 'http://localhost:3000/insurances';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(this.apiUrl);
  }

  getById(id: number): Observable<Insurance> {
    return this.http.get<Insurance>(`${this.apiUrl}/${id}`);
  }

  create(data: Insurance): Observable<Insurance> {
    return this.http.post<Insurance>(this.apiUrl, data);
  }

  update(id: number, data: Insurance): Observable<Insurance> {
    return this.http.put<Insurance>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
