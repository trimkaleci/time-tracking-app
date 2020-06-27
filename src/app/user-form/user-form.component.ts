import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { User } from '../model/user';
import { empty } from 'rxjs';


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
    this.userService.save(this.user).subscribe(result => console.log("user SAVED: " +result.email));
  }  

  convertDateObjToString() {
    let startWorkTimeToString = this.startWorkTime.toLocaleDateString() + " " + this.startWorkTime.toLocaleTimeString();
    startWorkTimeToString = this.extractDateAndTimeFromString(startWorkTimeToString);

    let endWorkTimeToString = this.endWorkTime.toLocaleDateString() + " " + this.endWorkTime.toLocaleTimeString();
    endWorkTimeToString = this.extractDateAndTimeFromString(startWorkTimeToString);

    console.log("start : " + startWorkTimeToString);

    this.user.start =  startWorkTimeToString;
    this.user.end = endWorkTimeToString;
  }

  navigateToUsersList() {
    this.router.navigate(['/users'])
  }

  extractDateAndTimeFromString(dateAndTimeGiven: string){
    const am = "AM"
    const pm = "PM"
    const emptyString = "";
    
    dateAndTimeGiven.replace(/\//g, ".");

    if(dateAndTimeGiven.includes(am)) {
      dateAndTimeGiven.replace(am, emptyString);
    } else {
      dateAndTimeGiven.replace(am, emptyString);
    }

    return dateAndTimeGiven;
  }

}
