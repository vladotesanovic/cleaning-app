import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Step3RoutingModule } from './step3-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Step3RoutingModule
  ],
  declarations: [HomeComponent]
})
export class Step3Module { }
