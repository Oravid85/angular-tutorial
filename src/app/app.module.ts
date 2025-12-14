import { NgModule } from "@angular/core";
import { App } from "./app.component";
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { routes } from './app.routes';
import { BrowserModule } from "@angular/platform-browser";
import { ServerComponent } from "./server/server.component";

@NgModule({
  declarations: [App,ServerComponent],
  
  imports: [BrowserModule, FormsModule],

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ],
  
  bootstrap: [App]

})
export class AppModule { }

