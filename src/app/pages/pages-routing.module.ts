import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { ListcourseComponent } from "./courses/listcourse/listcourse.component";
import { AddcourseComponent } from "./courses/addcourse/addcourse.component";
import { ViewcourseComponent } from "./courses/viewcourse/viewcourse.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component:DashboardComponent},
  { path: 'home', component:HomeComponent},
  //User
  { path: 'user', component:UserComponent},
  //Courses
  { path: 'listcourse', component:ListcourseComponent},
  { path: 'addcourse', component:AddcourseComponent},
  { path: 'listcourse/addcourse', component:AddcourseComponent},
  { path: 'listcourse/viewcourse', component:ViewcourseComponent}
  //Course Finished
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }