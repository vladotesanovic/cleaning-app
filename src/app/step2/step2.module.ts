import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Step2RoutingModule } from './step2-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Step2RoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class Step2Module { }
