import { Component, OnDestroy, OnInit } from '@angular/core';
import { 
  UntypedFormBuilder,
   UntypedFormControl, 
   ValidationErrors, 
   Validators 
} from '@angular/forms';
import { Router } from '@angular/router';

// RxJS
import { BehaviorSubject, Subscription } from 'rxjs';

// Environment Variables, Services
import { environment } from 'src/environments/environment';
import { SendDataService } from 'src/app/services/send-data.service';

// Custom Form Validator
export default function servicesValidator(formControl: UntypedFormControl) : ValidationErrors | null {
  return formControl.value.length === 0 ? { 'noSelectedService': true } : null;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnDestroy, OnInit {
  servicesFormControlError: BehaviorSubject<ValidationErrors | null> = new BehaviorSubject(null);
  private _subscriptions: Subscription = new Subscription();

  // Reactive Form
  contactForm = this.fb.group({
    name:             ['', Validators.required],
    phone:            ['', Validators.required],
    address:          ['', Validators.required],
    email:            '',
    numberOfStories:  '',
    typeOfExterior:   '',
    services:         ['', servicesValidator],
    message:          '',
  });
  get name()            { return this.contactForm.get('name'); }
  get email()           { return this.contactForm.get('email'); }
  get phone()           { return this.contactForm.get('phone'); }
  get address()         { return this.contactForm.get('address'); }
  get numberOfStories() { return this.contactForm.get('numberOfStories'); }
  get typeOfExterior()  { return this.contactForm.get('typeOfExterior'); }
  get services()        { return this.contactForm.get('services'); }
  get message()         { return this.contactForm.get('message'); }

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private sendDataService: SendDataService,
  ) { }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  ngOnInit(): void {
  }

  onClickService(): void {
    setTimeout(_ => {
      this.servicesFormControlError.next(this.contactForm.controls.services.errors);
    });
  }

  onSubmit(): void {
    this._subscriptions.add(this.sendDataService.sendData(this.contactForm.value).subscribe(
      response => {
        !environment.production 
          ? console.log('--- Contact Form API Response:', response) 
          : null;
        this.router.navigate(['thank-you']);
      },
      error => {
        !environment.production 
          ? console.log('--- Contact Form API Error:', error) 
          : null;
      }
    ));
  }
}