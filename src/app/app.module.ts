import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { TemplateService } from './template.service';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './/app-routing.module';

import { MatButtonModule, MatCheckboxModule, MatGridListModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';


import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { DatatablesComponent } from './datatables/datatables.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    DatatablesComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule, FlexLayoutModule, LayoutModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatCardModule, MatFormFieldModule,
    MatSidenavModule, MatGridListModule,
    DataTablesModule
  ],
  providers: [TemplateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
