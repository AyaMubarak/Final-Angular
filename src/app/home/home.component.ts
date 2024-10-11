import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { EmployeeDetailsComponent } from "../employee-details/employee-details.component";
import { NewsComponent } from "../shared/news/news.component";
import { VacationRequestsComponent } from "../vacation-requests/vacation-requests.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, EmployeeDetailsComponent, NewsComponent, VacationRequestsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
