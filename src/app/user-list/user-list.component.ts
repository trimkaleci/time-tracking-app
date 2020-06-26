import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';
import { UserServiceService } from '../service/user-service.service';
import { map } from 'rxjs/operators';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit {

  users: User[];
  userRecords: User[];

  usersEmailAddress: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService) { }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  onSearchUser() {
    this.userService.getUserByEmailAddress(this.usersEmailAddress).subscribe(result =>
    this.userRecords = result)
     }  

  navigateToUserSpecificList() {
    this.router.navigate(['/users'])
  }

}

