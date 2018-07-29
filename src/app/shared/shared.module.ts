import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { StepComponent } from './components/step/step.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [HeaderComponent, ButtonComponent, StepComponent],
  exports: [HeaderComponent, ButtonComponent, StepComponent]
})
export class SharedModule { }
