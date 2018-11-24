import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		ProfileComponent,
		NavComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatToolbarModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
