import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserServiceService } from './service/user-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";
import { UserSpecificListComponent } from './user-specific-list/user-specific-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserSpecificListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    NgbModule,
    DateTimePickerModule,
    MatCardModule,
  ],
  providers: [UserServiceService, MatInputModule, DateTimePickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
