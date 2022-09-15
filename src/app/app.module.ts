import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {TabViewModule} from "primeng/tabview";
import {RippleModule} from "primeng/ripple";
import {CommonModule, DatePipe, registerLocaleData} from "@angular/common";
import {MessagesModule} from "primeng/messages";
import {MessageModule} from "primeng/message";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {ToolbarModule} from "primeng/toolbar";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import { AquaticTableComponent } from './pages/aquatic-table/aquatic-table.component';
import {RouterModule} from "@angular/router";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { AquaticChartComponent } from './pages/aquatic-chart/aquatic-chart.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    AquaticTableComponent,
    AquaticChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
    TabViewModule,
    RippleModule,
    MessagesModule,
    MessageModule,
    OverlayPanelModule,
    RippleModule,
    ToolbarModule,
    InputTextModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,

  ],
  providers: [MessageService, { provide: NZ_I18N, useValue: en_US },DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
