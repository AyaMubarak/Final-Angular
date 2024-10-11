import { Component } from '@angular/core';
import { EmployeeDetailsProfileComponent } from "../employee-details-profile/employee-details-profile.component";
import { VacationHistoryComponent } from "../vacation-history/vacation-history.component";
import { PendingComponent } from "../pending/pending.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone:true,
  styleUrls: ['./profile.component.css'],
  imports: [EmployeeDetailsProfileComponent, VacationHistoryComponent, PendingComponent]
})
export class ProfileComponent {

}

