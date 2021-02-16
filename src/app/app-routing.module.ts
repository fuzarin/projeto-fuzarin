import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroisComponent } from './herois/herois.component';

const routes: Routes = [
  {path: '', component: HeroisComponent},
  {path: ':id/players', component: HeroisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
