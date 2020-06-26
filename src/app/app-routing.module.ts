import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserSpecificListComponent } from './user-specific-list/user-specific-list.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent },
  {path: 'adduser', component: UserFormComponent },
  {path: 'searchUser', component: UserSpecificListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
