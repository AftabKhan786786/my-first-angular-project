import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserTableComponent } from './component/user-table/user-table.component';

const routes: Routes = [
{path:"",component:HomeComponent},
{path:"home",component:HomeComponent},
{path:"user",component:UserFormComponent},
{path:"user-table",component:UserTableComponent},
{path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
