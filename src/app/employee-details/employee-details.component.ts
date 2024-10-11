import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VacationRequestsComponent } from "../vacation-requests/vacation-requests.component";
import { VacationCardLeaveComponent } from "../shared/vacation-card-leave/vacation-card-leave.component";
import { VacationCardRequestComponent } from "../shared/vacation-card-request/vacation-card-request.component";
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  standalone:true,
  styleUrls: ['./employee-details.component.css'],
  imports: [
    CommonModule
    ,

    VacationCardLeaveComponent,
    VacationCardRequestComponent, RouterModule
]
})
export class EmployeeDetailsComponent {
  currentUser = " "
  employees = [
    {
      id: 1,
      name: 'Ahmad Azmi',
      position: 'Junior Accounting Officer',
      profilePicture: './images/download.jpg',
      reportingTo: 'Salwa Assem',
      corporateLevel: 'Level 10'
    },

  ];

  constructor(private router: Router) {}


}
