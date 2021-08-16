import { Component, OnInit } from '@angular/core';
import { BusinessInformationService } from 'src/app/services/business-information.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // googleMapsSRC: string = 'https://www.google.com/maps/d/embed?mid=1M99_6FQvTVBMWYAtWUuxLdrTQzM&hl=en&z=9';
  googleMapsURL: string = '';
  businessName: string = this.businessInformationService.businessName;
  googleBusinessURL: string = this.businessInformationService.googleBusinessURL;
  facebookURL: string = this.businessInformationService.facebookURL;

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
