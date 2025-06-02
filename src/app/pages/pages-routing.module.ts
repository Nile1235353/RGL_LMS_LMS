import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { EdituserComponent } from "./user/edituser/edituser.component";
import { AdduserComponent } from "./user/useradd/adduser.component";
import { UserlistComponent } from "./user/userlist/userlist.component";
import { ListcourseComponent } from "./courses/listcourse/listcourse.component";
import { AddcourseComponent } from "./courses/addcourse/addcourse.component";
import { ViewcourseComponent } from "./courses/viewcourse/viewcourse.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component:DashboardComponent},
  { path: 'home', component:HomeComponent},
  //User
  { path: 'listuser', component:UserlistComponent},
  { path: 'listuser/adduser', component:AdduserComponent},
  { path: 'listuser/edituser', component:EdituserComponent},
  //Courses
  { path: 'listcourse', component:ListcourseComponent},
  { path: 'addcourse', component:AddcourseComponent},
  { path: 'listcourse/addcourse', component:AddcourseComponent},
  { path: 'listcourse/viewcourse', component:ViewcourseComponent}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }