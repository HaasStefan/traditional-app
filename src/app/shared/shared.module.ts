import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicHostDirective } from './dynamic-host.directive';



@NgModule({
  declarations: [
    DynamicHostDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynamicHostDirective
  ]
})
export class SharedModule { }
