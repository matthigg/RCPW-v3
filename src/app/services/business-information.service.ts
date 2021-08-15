import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessInformationService {
  address: string = '123 Main St.';
  businessHours: string = 'Hours Vary';
  businessName: string = 'River City Pro Wash';
  city: string = 'Richmond';
  email: string = 'rvaprowash@gmail.com';
  phoneNumber: string = '(804) 625-2405';
  services: string[] = [
    'Exterior House Washing',
    'Concrete & Brick Washing',
    'Deck & Patio Washing',
    'Deck Sealing & Staining',
    'Fence Cleaning',
  ]
  state: string = 'VA';
  zipcode: string = '28460';

  constructor() { }
}
