import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-details-profile',
  templateUrl: './employee-details-profile.component.html',
  standalone: true,
  styleUrls: ['./employee-details-profile.component.css']
})
export class EmployeeDetailsProfileComponent {
  employee = {
    name: 'Ahmad Azmi',
    department: 'Marketing Department',
    position: 'Junior Accounting Officer',
    reportingTo: 'Salwa Assem',
    corporateLevel: 'Level 10',
    lifetime: '2.5 Years',
    vacationDaysLeft: '10 Days',
    sickDaysLeft: '14 Days',
    profilePicture: './images/download.jpg',
    userPicture: './images/user.png',
    levelIcon: './images/level.png',
    hourClockIcon: './images/hourclock-svgrepo-com.svg',
    vacationIcon: './images/coconut-tree-6-svgrepo-com.svg',
    sickIcon: './images/medicine-svgrepo-com.svg'
  };
}
