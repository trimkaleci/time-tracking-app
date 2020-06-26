import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from "../model/user"
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user-specific-list',
  templateUrl: './user-specific-list.component.html',
  styleUrls: ['./user-specific-list.component.css']
})
export class UserSpecificListComponent implements OnInit {

  userRecords: User[];

  usersEmailAddress: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  onSearchUser() {
    this.userService.getUserByEmailAddress(this.usersEmailAddress).subscribe(result =>
    this.userRecords = result)
     } 
}
