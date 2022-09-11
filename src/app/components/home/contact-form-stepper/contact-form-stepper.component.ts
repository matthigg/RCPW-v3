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
  hiddenPhone: HTMLInputElement;
  hiddenAddress: HTMLInputElement;
  hiddenEmail: HTMLInputElement;
  hiddenNumberOfStories: HTMLInputElement;
  hiddenTypeOfExterior: HTMLInputElement;
  hiddenServices: HTMLInputElement;
  hiddenMessage: HTMLInputElement;
  hiddenSubmitButton: HTMLButtonElement;

  // Reactive FormGroup, Step 1
  formGroupStep1 = this._fb.group({
    name:             ['', Validators.required],
    phone:            ['', Validators.required],
    address:          ['', Validators.required],
    email:            '',
    numberOfStories:  '',
    typeOfExterior:   '',
  });

  //Reactive FormGroup, Step 2
  formGroupStep2 = this._fb.group({
    services: ['', servicesValidator],
    message:  '',
  });

  // Reactive Form Getters, Step 1
  get name()            { return this.formGroupStep1.get('name'); }
  get email()           { return this.formGroupStep1.get('email'); }
  get phone()           { return this.formGroupStep1.get('phone'); }
  get address()         { return this.formGroupStep1.get('address'); }
  get numberOfStories() { return this.formGroupStep1.get('numberOfStories'); }
  get typeOfExterior()  { return this.formGroupStep1.get('typeOfExterior'); }

  // Reactive Form Getters, Step 2
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

    this.hiddenName = document.querySelector('#contact-form-stepper-hidden-name');
    this.hiddenPhone = document.querySelector('#contact-form-stepper-hidden-phone');
    this.hiddenAddress = document.querySelector('#contact-form-stepper-hidden-address');
    this.hiddenEmail = document.querySelector('#contact-form-stepper-hidden-email');
    this.hiddenNumberOfStories = document.querySelector('#contact-form-stepper-hidden-number-of-stories');
    this.hiddenTypeOfExterior = document.querySelector('#contact-form-stepper-hidden-type-of-exterior');
    this.hiddenServices = document.querySelector('#contact-form-stepper-hidden-services');
    this.hiddenMessage = document.querySelector('#contact-form-stepper-hidden-message');
    this.hiddenSubmitButton = document.querySelector('#contact-form-stepper-hidden-submit-button');
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  ngOnInit(): void {
  }

  onClickService(): void {
    setTimeout(_ => {
      this.servicesFormControlError.next(this.formGroupStep2.controls.services.errors);
    });
  }

  onSubmit(): void {
    this.hiddenSubmitButton.click();
    this.formGroupStep1.reset();
    this.formGroupStep2.reset();
  }

  updateHiddenNameInputField(): void {
    this.hiddenName.setAttribute('value', this.name.value)
  }

  updateHiddenPhoneInputField(): void {
    this.hiddenPhone.setAttribute('value', this.phone.value)
  }

  updateHiddenAddressInputField(): void {
    this.hiddenAddress.setAttribute('value', this.address.value)
  }

  updateHiddenEmailInputField(): void {
    this.hiddenEmail.setAttribute('value', this.email.value)
  }

  updateHiddenNumberOfStoriesInputField(): void {
    this.hiddenNumberOfStories.setAttribute('value', this.numberOfStories.value)
  }

  updateHiddenTypeOfExteriorInputField(): void {
    this.hiddenTypeOfExterior.setAttribute('value', this.typeOfExterior.value)
  }

  updateHiddenServiceInputField(): void {
    this.hiddenServices.setAttribute('value', this.services.value)
  }

  updateHiddenMessageInputField(): void {
    this.hiddenMessage.setAttribute('value', this.message.value)
  }
}