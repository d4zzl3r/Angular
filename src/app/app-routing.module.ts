import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HtmlParser } from '@angular/compiler';


const routes: Routes = [
  {
    path : '' ,
    component : HomeComponent
  },
  {
    path : 'home',
    component : HomeComponent 
  },
  {
    path : 'contactUs',
    component : ContactUsComponent
  },
  {
    path : 'aboutus',
    component : AboutUsComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
