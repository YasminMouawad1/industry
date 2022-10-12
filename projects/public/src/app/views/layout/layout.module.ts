import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SpinnerComponent } from './spinner/spinner.component';
import { PumpReceiptComponent } from './pump-receipt/pump-receipt.component';
import { MixerReceiptComponent } from './mixer-receipt/mixer-receipt.component';
import { CarReceiptComponent } from './car-receipt/car-receipt.component';
import { CustodyReceiptComponent } from './custody-receipt/custody-receipt.component';
import { ReportReceiptComponent } from './report-receipt/report-receipt.component';
import { HtmlToPdfMakeComponent } from './html-to-pdf-make/html-to-pdf-make.component'; 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from 'projects/public/src/environments/environment';
import { RecaptchaComponent } from './recaptcha/recaptcha.component';

 

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    TopbarComponent,
    SidebarComponent,
    RightsidebarComponent,
    SpinnerComponent,
    PumpReceiptComponent,
    MixerReceiptComponent,
    CarReceiptComponent,
    CustodyReceiptComponent,
    ReportReceiptComponent,
    HtmlToPdfMakeComponent, 
    RecaptchaComponent
  ],
  imports: [ 
CommonModule,
    LayoutRoutingModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    SimplebarAngularModule,
    TranslateModule ,
    FormsModule, 
    RecaptchaModule,
    RecaptchaFormsModule,
    ReactiveFormsModule
  ],
  providers:[
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ]
})
export class LayoutModule { }
