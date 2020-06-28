import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { User } from '../model/user';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;

  startWorkTime: Date;
  endWorkTime: Date;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService) {

      this.user = new User();
     }

     ngOnInit(): void {
    }
  
  onSubmit() {
    this.convertDateObjToString();
    this.userService.save(this.user).subscribe(result => this.navigateToUsersList());
  }  

  convertDateObjToString() {
    const pipeObj = new DatePipe('en-US');
    const dateFormatString = "dd.MM.yyyy hh:mm";

    const  startWorkTimeToString = pipeObj.transform(this.startWorkTime, dateFormatString);
    const  endWorkTimeToString = pipeObj.transform(this.endWorkTime, dateFormatString);

    this.user.start =  startWorkTimeToString;
    this.user.end = endWorkTimeToString;
  }

  navigateToUsersList() {
    this.router.navigate(['/users'])
  }

}
