import { NgModule } from '@angular/core';

import { ErrorComponent } from './error/error.component';
import { ErrorRoutingModule } from './error-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    ErrorRoutingModule,
    SharedModule
  ]
})
export class ErrorModule { }
