import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SomeModule } from './some-module/some-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
