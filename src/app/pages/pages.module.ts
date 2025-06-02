import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutComponent } from '../layout/layout.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
  ],
  imports:[
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    LayoutComponent
  ]
})
export class PagesModule {
  
}
