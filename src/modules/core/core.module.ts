import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResourcesService } from '../../services/resources.service';

@NgModule({
  imports:      [
    CommonModule
  ],
  providers: [
    ResourcesService
  ]
})
export class CoreModule { }