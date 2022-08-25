import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RxJS
import { Observable, of } from 'rxjs';

// Environment Variables, Models
import { ContactFormData } from 'src/app/shared/models/contact-form-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  sendData(data: ContactFormData): Observable<any> {

    // console.log('--- send-data service:', data)
    
    // TODO: the environment.contactFormAPI needs to actually point to something in the
    // envionment.ts & environment.prod.ts files
    // return this.http.post<any>(environment.contactFormAPI, data, this.httpOptions);

    return of();
  }
}
