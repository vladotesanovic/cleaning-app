import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalRoutingModule } from './final-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { OptionComponent } from './components/option/option.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FinalRoutingModule
  ],
  declarations: [HomeComponent, OptionComponent]
})
export class FinalModule { }
