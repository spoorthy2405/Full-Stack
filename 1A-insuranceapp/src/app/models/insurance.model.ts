export interface Insurance {
  id?: number;
  policyNumber: string;
  policyHolderName: string;
  policyType: string;
  premiumAmount: number;
  coverageAmount: number;
  startDate: string;
  endDate: string;
  nomineeName: string;
  status: string;
}
