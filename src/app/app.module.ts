import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing';
import { ThemeComponent } from './theme/theme.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { SettingComponent } from './pages/setting/setting.component';


@NgModule({
  declarations: [AppComponent,LoginComponent,ThemeComponent,AdministrationComponent,SettingComponent],
  imports: [ BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }