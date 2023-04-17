import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './task/task.component';
import { AddjobsComponent } from './addjobs/addjobs.component';
import { TableComponent } from './table/table.component';
import { SettingComponent } from './setting/setting.component';
@Injectable({ providedIn: 'root' })
export class CustomTitleResolver {
  resolve() {
    return Promise.resolve('Custom About Me');
  }
}

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: SidebarComponent,
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Home' } },
      { path: 'setting', component: SettingComponent, data: { title: 'Setting' } },
      { path: 'tasks', component: TaskComponent, data: { title: 'Task' } },


    ]
  },

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
