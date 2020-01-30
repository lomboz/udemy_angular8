import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServersComponent,
    ServerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
