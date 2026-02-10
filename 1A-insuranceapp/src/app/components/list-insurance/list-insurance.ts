import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../../services/insurance.service';
import { Insurance } from '../../models/insurance.model';

@Component({
  selector: 'app-list-insurance',
  templateUrl: './list-insurance.html'
})
export class ListInsuranceComponent implements OnInit {
  insurances: Insurance[] = [];

  constructor(private service: InsuranceService) {}

  ngOnInit() {
    this.service.getAll().subscribe(data => this.insurances = data);
  }
}
