import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessInformationService {
  address: string = '123 Main St.';
  businessHours: string = 'Hours Vary';
  city: string = 'Richmond';
  email: string = 'rvaprowash@gmail.com';
  phoneNumber: string = '(804) 625-2405';
  state: string = 'VA';
  zipcode: string = '28460';

  constructor() { }
}
