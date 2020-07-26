import { Component, OnDestroy, OnInit } from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// Models, Services
import { BusinessInformationService } from '../../../../services/business-information.service';
import { WindowSizeService } from '../../../../services/window-size.service';
import { WindowSize } from '../../../../shared/models/window-size';

@Component({
  selector: 'app-outdoor-stain-removal',
  templateUrl: './outdoor-stain-removal.component.html',
  styleUrls: [
    './outdoor-stain-removal.component.scss',
    '../../../../shared/shared-services-styles.scss',
  ]
})
export class OutdoorStainRemovalComponent implements OnDestroy, OnInit {
  city: string = this.businessInformationService.city;
  state: string = this.businessInformationService.state;
  windowSize: WindowSize | null = null;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private businessInformationService: BusinessInformationService,
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
