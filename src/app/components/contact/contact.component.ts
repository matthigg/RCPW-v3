import { Component, OnDestroy, OnInit } from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// Models, Services
import { BusinessInformationService } from 'src/app/services/business-information.service';
import { WindowSizeService } from 'src/app/services/window-size.service';
import { WindowSize } from 'src/app/shared/models/window-size';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.scss',
    '../../shared/shared-services-styles.scss',
  ]
})
export class ContactComponent implements OnDestroy, OnInit {
  city: string = this.businessInformationService.city;
  phoneNumber: string = this.businessInformationService.phoneNumber;
  state: string = this.businessInformationService.state;
  windowSize: WindowSize | null = null;
  private subscriptions: Subscription = new Subscription();

  constructor(
    public businessInformationService: BusinessInformationService,
    private windowSizeService: WindowSizeService
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.windowSizeService.windowSize.subscribe(
      response => this.windowSize = response
    ));
  }
}
