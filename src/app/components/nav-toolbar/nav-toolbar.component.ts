import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// Models, Services
import { BusinessInformationService } from '../../services/business-information.service';
import { PageOffset } from '../../shared/models/page-offset';
import { WindowScrollPositionService } from '../../services/window-scroll-position.service';
import { WindowSizeService } from '../../services/window-size.service';
import { WindowSize } from '../../shared/models/window-size';

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.scss']
})
export class NavToolbarComponent implements OnDestroy, OnInit {
  phoneNumber: string = this.businessInformationService.phoneNumber;
  pageOffset: PageOffset | null = null;
  windowSize: WindowSize | null = null;
  navLinks: any = [
    { name: 'Home',     routerLink: '/' },
    // { name: 'About',    routerLink: '/about' },
    { name: 'Services', routerLink: '/services' },
    // { name: 'Our Work', routerLink: '/our-work' },
    { name: 'Contact',  routerLink: '/contact' },
  ];
  private subscriptions: Subscription = new Subscription();
  @Output() openDrawer: EventEmitter<any> = new EventEmitter();

  constructor(
    private businessInformationService: BusinessInformationService,
    private windowScrollPositionService: WindowScrollPositionService,
    private windowSizeService: WindowSizeService
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(this.windowScrollPositionService.pageOffset.subscribe(
      response => this.pageOffset = response
    ));
    this.subscriptions.add(this.windowSizeService.windowSize.subscribe(
      response => this.windowSize = response
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onHamburgerClick(): void {
    this.openDrawer.emit();
  }
}
