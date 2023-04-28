import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../shared/guard/auth.guard';

const routes: Routes = [
  { path: 'admin', redirectTo: '/admin/login', pathMatch: 'full' },
  { path: 'admin/login', component: LoginComponent},
  { path: 'admin/dashboard', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPortalRoutingModule { }
