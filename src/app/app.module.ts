import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgImageViewerPluginModule } from 'ng-image-viewer-plugin'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageViewerPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
