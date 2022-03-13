import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PatientComponent } from './components/patient/patient.component';
import { ProcessComponent } from './components/process/process.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'process',component:ProcessComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'contact',component:ContactComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin/:phone',component:PatientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
