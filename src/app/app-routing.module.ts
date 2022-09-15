import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AuthGuard} from "./services/auth.guard";
import {AquaticTableComponent} from "./pages/aquatic-table/aquatic-table.component";
import {AquaticChartComponent} from "./pages/aquatic-chart/aquatic-chart.component";

const routes: Routes = [
  {
    path:'dang-nhap',
    component: LoginComponent
  },
  {
    path:'quan-ly',
    component: DashboardComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'dl-moi',
        component:AquaticTableComponent
      },
      {
        path:'dl-bieudo/:deviceId',
        component:AquaticChartComponent
      }
    ]
  },
  {
    path:'**',
    redirectTo:'quan-ly'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
