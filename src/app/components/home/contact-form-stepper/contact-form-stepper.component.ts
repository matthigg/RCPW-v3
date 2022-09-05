import { AfterViewInit, Component, OnDestroy, OnInit, enableProdMode } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

// Angular Animations
import { trigger, sequence, state, style, animate, transition } from '@angular/animations';

// RxJS
import { BehaviorSubject, Subscription } from 'rxjs';

// Environment Variables, Services
import { ContactFormData } from 'src/app/shared/models/contact-form-data';
import { environment } from 'src/environments/environment';
import { SendDataService } from 'src/app/services/send-data.service';
import { TrackViewsService } from 'src/app/services/track-views.service';

// Custom Form Validator
export default function servicesValidator(formControl: UntypedFormControl) : ValidationErrors | null {
  return formControl.value.length === 0 ? { 'noSelectedService': true } : null;
}

// Animation Variables
const animationTime = '0.5s ease-out';

@Component({
  selector: 'app-contact-form-stepper',
  templateUrl: './contact-form-stepper.component.html',
  styleUrls: ['./contact-form-stepper.component.scss'],
  animations: [
    trigger('slideRight', [
      state('stationary', style({ left: '-240px', opacity: '0' })),
      state('slide-right', style({ left: '-224px', opacity: '1' })),
      transition('stationary => slide-right', [ 
        sequence([
          animate('0.2s', style({ opacity: 0 })),
          animate(`${animationTime}`),
        ]),
      ]),
    ]),
    trigger('fadeIn', [
      state('hide', style({ opacity: 0 })),
      state('show', style({ opacity: 1 })),
      transition('hide => show', [ animate(`${animationTime}`) ]),
    ]),
  ],
})
export class ContactFormStepperComponent implements AfterViewInit, OnDestroy, OnInit {
  animationFadeIn: boolean = false;
  animationSlideRight: boolean = false;
  viewed: boolean = this.trackViewsService.hasBeenViewed.has('contact-form-stepper');
  servicesFormControlError: BehaviorSubject<ValidationErrors | null> = new BehaviorSubject(null);
  private _subscriptions: Subscription = new Subscription();
  
  // Hidden Input Elements
  hiddenName: HTMLInputElement;
  hiddenSubmitButton: HTMLButtonElement;

  // Reactive Form, Step 1
  formGroupStep1: UntypedFormGroup;
  get name()            { return this.formGroupStep1.get('name'); }
  get email()           { return this.formGroupStep1.get('email'); }
  get phone()           { return this.formGroupStep1.get('phone'); }
  get address()         { return this.formGroupStep1.get('address'); }
  get numberOfStories() { return this.formGroupStep1.get('numberOfStories'); }
  get typeOfExterior()  { return this.formGroupStep1.get('typeOfExterior'); }

  // Reactive Form, Step 2
  formGroupStep2: UntypedFormGroup;
  get services()  { return this.formGroupStep2.get('services'); }
  get message()   { return this.formGroupStep2.get('message'); }

  constructor(
    private _fb: UntypedFormBuilder,
    private _router: Router,
    private _sendDataService: SendDataService,
    public trackViewsService: TrackViewsService,
  ) { }

  ngAfterViewInit(): void {
    setTimeout(_ => this.animationFadeIn = true);
    setTimeout(_ => this.animationSlideRight = true);
    if (!this.viewed) this.trackViewsService.hasBeenViewed.add('contact-form-stepper');

    this.hiddenName = document.querySelector('#hidden-name');
    this.hiddenSubmitButton = document.querySelector('#hidden-submit-button');
    // console.log('--- hiddenName:', typeof this.hiddenName)
    console.log('--- afterViewInit hiddenName:', this.hiddenName)
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  ngOnInit(): void {

    this.formGroupStep1 = this._fb.group({
      name:             ['', Validators.required],
      phone:            ['', Validators.required],
      address:          ['', Validators.required],
      email:            '',
      numberOfStories:  '',
      typeOfExterior:   '',
    });

    this.formGroupStep2 = this._fb.group({
      services: ['', servicesValidator],
      message:  '',
    });
  }

  onClickService(): void {
    setTimeout(_ => {
      this.servicesFormControlError.next(this.formGroupStep2.controls.services.errors);
    });
  }

  onSubmit(): void {
    // let requestPayload: ContactFormData | {} = {};
    // Object.assign(requestPayload, this.formGroupStep1.value);
    // Object.assign(requestPayload, this.formGroupStep2.value);
    // this._subscriptions.add(this._sendDataService.sendData((requestPayload as ContactFormData)).subscribe(
    //   response => {
    //     !environment.production ? console.log('--- Contact Form API Response:', response) : null;
    //     this._router.navigate(['thank-you']);
    //   },
    //   error => !environment.production ? console.log('--- Contact Form API Error:', error) : null
    // ));

    // const hiddenName = document.querySelector('#hidden-name');
    // hiddenName.setAttribute('value', 'test')
    // hiddenName.setAttribute('value', this.name.value)
    this.hiddenSubmitButton.click();
  }

  // updateHiddenInputField(value: any): void {
  updateHiddenNameInputField(): void {
    // const hiddenName = document.querySelector('#hidden-name');
    // hiddenName.setAttribute('value', 'test')

    // console.log('--- hidden input value:', value)
    // console.log('--- hiddenName:', this.hiddenName)

    // This sets the hidden name <input> element to this.name via the getter for the
    // name field in formGroupStep1
    this.hiddenName.setAttribute('value', this.name.value)
  }
}