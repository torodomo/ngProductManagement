import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CreationComponent } from './creation/creation.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ListComponent },
  { path: 'products/new', component: CreationComponent },
  { path: 'products/edit/:id', component: EditComponent }
];
export const routing = RouterModule.forRoot(routes);
