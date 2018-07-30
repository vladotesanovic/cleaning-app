import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { StepComponent } from './components/step/step.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ],
  declarations: [HeaderComponent, ButtonComponent, StepComponent, InputComponent],
  exports: [HeaderComponent, ButtonComponent, StepComponent, InputComponent]
})
export class SharedModule { }
