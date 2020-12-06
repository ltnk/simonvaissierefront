import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimContactComponent } from './sim-contact/sim-contact.component';
import { SimProjectsComponent } from './sim-projects/sim-projects.component';
import { SimHomeComponent } from './sim-home/sim-home.component';
import { SimHeaderComponent } from './sim-header/sim-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatSliderModule } from '@angular/material/slider';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { SimFooterComponent } from './sim-footer/sim-footer.component';
import { SimInfosComponent } from './sim-infos/sim-infos.component';
import { SimRealisationComponent } from './sim-realisation/sim-realisation.component';
import { SimScenaristeComponent } from './sim-scenariste/sim-scenariste.component';
import { SimMontageComponent } from './sim-montage/sim-montage.component';
import { SimFormationComponent } from './sim-formation/sim-formation.component';
import { SimProjectsMontageComponent } from './sim-projects-montage/sim-projects-montage.component';
import { SimProjectsShortfilmComponent } from './sim-projects-shortfilm/sim-projects-shortfilm.component';
import { HttpClientModule } from '@angular/common/http';

import { RecaptchaModule } from 'ng-recaptcha';
import { SimCreditsComponent } from './sim-credits/sim-credits.component';

@NgModule({
  declarations: [
    AppComponent,
    SimHomeComponent,
    SimContactComponent,
    SimProjectsComponent,
    SimHeaderComponent,
    SimFooterComponent,
    SimInfosComponent,
    SimRealisationComponent,
    SimScenaristeComponent,
    SimMontageComponent,
    SimFormationComponent,
    SimProjectsMontageComponent,
    SimProjectsShortfilmComponent,
    SimCreditsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatSliderModule
    MatMenuModule,
    MatButtonModule,
    MatInputModule,

    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,

    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    RecaptchaModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
