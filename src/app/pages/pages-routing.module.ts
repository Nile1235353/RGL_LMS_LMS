import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { ListcourseComponent } from "./courses/listcourse/listcourse.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component:DashboardComponent},
  { path: 'home', component:HomeComponent},
  //User
  { path: 'user', component:UserComponent},
  //Courses
  { path: 'listcourse', component:ListcourseComponent}
  //Course Finished
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }