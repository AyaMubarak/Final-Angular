import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";
import { VacationRequestsComponent } from "./vacation-requests/vacation-requests.component";
import {  EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { NewsComponent } from "./shared/news/news.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, EmployeeDetailsComponent, NewsComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vacation-management';
}
