import { NgModule, Pipe, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './component/login/login';
import { FormsModule } from '@angular/forms';
import { Dashboard } from './component/dashboard/dashboard';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Transfer } from './component/transfer/transfer';
import { History } from './component/history/history';
import { Profile } from './component/profile/profile';

@NgModule({
  declarations: [
    App,
    Login,
    Dashboard,
    Transfer,
    History,
    Profile
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterOutlet,
    RouterLink
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App]
})
export class AppModule { }
