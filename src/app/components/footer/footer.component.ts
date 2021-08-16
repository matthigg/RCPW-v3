import { Component, OnInit } from '@angular/core';
import { BusinessInformationService } from 'src/app/services/business-information.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  businessName: string = this.businessInformationService.businessName;
  facebookURL: string = this.businessInformationService.facebookURL;
  googleBusinessURL: string = this.businessInformationService.googleBusinessURL;
  googleMapsURL: string = this.businessInformationService.googleMapsURL;

  constructor(
    public businessInformationService: BusinessInformationService,
  ) { }

  ngOnInit(): void {
  }

  onScrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
