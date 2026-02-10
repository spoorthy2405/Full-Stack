import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsuranceService } from '../../services/insurance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-insurance',
  templateUrl: './create-insurance.html'
})
export class CreateInsuranceComponent {
  insuranceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: InsuranceService,
    private router: Router
  ) {
    this.insuranceForm = this.fb.group({
      policyNumber: ['', Validators.required],
      policyHolderName: ['', Validators.required],
      policyType: ['', Validators.required],
      premiumAmount: ['', Validators.required],
      coverageAmount: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      nomineeName: ['', Validators.required],
      status: ['Active']
    });
  }

  submit() {
    this.service.create(this.insuranceForm.value).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }
}
