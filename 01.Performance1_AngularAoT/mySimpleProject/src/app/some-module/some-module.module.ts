import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeComponent } from '../some-component/some-component.component';
import {SomeService} from "../some-service/some-service.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SomeComponent],
  exports: [SomeComponent],
  providers: [{provide: SomeService, useFactory: () => new Object()}]
})
export class SomeModule { }
