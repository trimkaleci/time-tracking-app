import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { User } from '../model/user';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;

  startWorkTime: Date;
  endWorkTime: Date;
  userName: string;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService) {

      this.user = new User();
      this.startWorkTime = new Date("1/1/2020 1:30 PM");
      this.endWorkTime = new Date("1/1/2020 1:30 PM") ;
     }

     ngOnInit(): void {
    }
  
  onSubmit() {
    this.convertDateObjToIso();
    this.userService.save(this.user).subscribe(result => this.navigateToUsersList());
  }  

  convertDateObjToIso() {
    this.user.start = this.startWorkTime.toISOString();
    this.user.end = this.endWorkTime.toISOString();
  }

  navigateToUsersList() {
    this.router.navigate(['/users'])
  }

}
