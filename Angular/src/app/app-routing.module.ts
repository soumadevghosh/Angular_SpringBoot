import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './login/logout/logout.component';
import { RouteGuardService } from './service/Authentication/route-guard.service';
import { TodoComponent } from './list-todos/todo/todo.component';


const routes: Routes = [
  {path:'',component:LoginComponent}, 
  {path:'login',component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent,canActivate:[RouteGuardService]}, //ACTIVATE IN SPECIFIC CONDITION by routeGuard
  {path:'todos',component:ListTodosComponent,canActivate:[RouteGuardService]},
  {path:'todo/:id',component:TodoComponent,canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
