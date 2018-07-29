import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'step1'
  },
  {
    path: 'step1',
    loadChildren: 'src/app/step1/step1.module#Step1Module'
  },
  {
    path: 'step2',
    loadChildren: 'src/app/step2/step2.module#Step2Module'
  },
  {
    path: 'step3',
    loadChildren: 'src/app/step3/step3.module#Step3Module'
  },
  {
    path: 'final',
    loadChildren: 'src/app/final/final.module#FinalModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
