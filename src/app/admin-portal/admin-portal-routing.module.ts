import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../shared/guard/auth.guard';
import { UploadComponent } from './upload/upload.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  { path: 'admin', redirectTo: '/admin/login', pathMatch: 'full' },
  { path: 'admin/login', component: LoginComponent},
  { path: 'admin/dashboard', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'admin/upload', component: UploadComponent, canActivate: [AuthGuard] },
  { path: 'admin/manage', component: ManageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'admin/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPortalRoutingModule { }
