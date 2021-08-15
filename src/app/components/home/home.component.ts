import { Component, OnDestroy, OnInit } from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// Models, Services
import { BusinessInformationService } from '../../services/business-information.service';
import { WindowSizeService } from '../../services/window-size.service';
import { WindowSize } from '../../shared/models/window-size';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../../shared/shared-services-styles.scss',
  ]
})
export class HomeComponent implements OnDestroy, OnInit {
  businessName = this.businessInformationService.businessName;
  city: string = this.businessInformationService.city;
  services: string[] = this.businessInformationService.services;
  state: string = this.businessInformationService.state;
  phoneNumber: string = this.businessInformationService.phoneNumber;
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
