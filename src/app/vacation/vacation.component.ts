import { Component } from '@angular/core';
import { PaginationComponent } from "../pagination/pagination.component";
import { VacationRequestsComponent } from "../vacation-requests/vacation-requests.component";
import { VacationRequestAllComponent } from "../vacation-request-all/vacation-request-all.component";

@Component({
  selector: 'app-vacation',
  standalone: true,
  imports: [PaginationComponent, VacationRequestsComponent, VacationRequestAllComponent],
  templateUrl: './vacation.component.html',
  styleUrl: './vacation.component.css'
})
export class VacationComponent {

}
