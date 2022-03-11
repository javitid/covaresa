import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MenuModule } from 'primeng/menu';

@NgModule({
  imports:      [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MenuModule
  ]
})
export class SharedModule { }