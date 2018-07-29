import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Step1RoutingModule } from './step1-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ControlsComponent } from './components/controls/controls.component';

@NgModule({
  imports: [
    CommonModule,
    Step1RoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, ControlsComponent]
})
export class Step1Module { }
