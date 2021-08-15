// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FenceCleaningComponent } from './components/services/service-components/fence-cleaning/fence-cleaning.component';
import { ConcreteAndBrickWashingComponent } from './components/services/service-components/concrete-and-brick-washing/concrete-and-brick-washing.component';
import { DeckAndPatioWashingComponent } from './components/services/service-components/deck-and-patio-washing/deck-and-patio-washing.component';
import { DeckSealingAndStainingComponent } from './components/services/service-components/deck-sealing-and-staining/deck-sealing-and-staining.component';
import { ExteriorHouseWashingComponent } from './components/services/service-components/exterior-house-washing/exterior-house-washing.component';
import { HomeComponent } from './components/home/home.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { ServicesComponent } from './components/services/services.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [
  { path: 'about',      component: AboutComponent },
  { path: 'services',   component: ServicesComponent },
  { path: 'services/exterior-house-washing',        component: ExteriorHouseWashingComponent },
  { path: 'services/concrete-and-brick-washing',    component: ConcreteAndBrickWashingComponent },
  { path: 'services/deck-and-patio-washing',        component: DeckAndPatioWashingComponent },
  { path: 'services/deck-sealing-and-staining',     component: DeckSealingAndStainingComponent },
  { path: 'services/fence-cleaning',                component: FenceCleaningComponent },
  { path: 'our-work',   component: OurWorkComponent },
  { path: 'contact',    component: ContactComponent },
  { path: 'thank-you',  component: ThankYouComponent },
  { path: '',           component: HomeComponent },
  { path: '**',         component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
