import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface VacationRequest {
employeePicture: any;
  employeeName: string;
  submittedOn: string;
  duration: string;
  salary: number;
  approved: boolean;
}

@Component({
  selector: 'app-vacation-requests',
  templateUrl: './vacation-requests.component.html',
  standalone: true,
  styleUrls: ['./vacation-requests.component.css'],
  imports: [FormsModule, CommonModule],
})
export class VacationRequestsComponent implements OnInit {

  searchText: string = '';

  vacationRequests: VacationRequest[] = [
    { employeeName: 'Lily Evans', submittedOn: '7/7/2024', duration: '2 Weeks (8/7/2024 - 22/7/2024)', salary: 1100, approved: true, employeePicture: "/images/download (2).jpg" },
    { employeeName: 'James Potter', submittedOn: '6/6/2024', duration: '1 Week (10/6/2024 - 17/6/2024)', salary: 900, approved: false, employeePicture: "/images/download (1).jpg" },
    { employeeName: 'Severus Snape', submittedOn: '1/8/2024', duration: '3 Days (12/8/2024 - 14/8/2024)', salary: 1300, approved: false, employeePicture: "/images/download (3).jpg" },
    { employeeName: 'Minerva McGonagall', submittedOn: '2/7/2024', duration: '4 Days (15/7/2024 - 18/7/2024)', salary: 2500, approved: true, employeePicture: "/images/download (4).jpg" },





  ];

  filteredRequests: VacationRequest[] = [];
  router: any;

  constructor() {}

  ngOnInit(): void {
    this.filteredRequests = this.vacationRequests;
  }

  searchRequests(): void {
    if (this.searchText.trim() === '') {
      this.filteredRequests = this.vacationRequests;
    } else {
      const searchLower = this.searchText.toLowerCase();
      this.filteredRequests = this.vacationRequests.filter(request =>
        request.employeeName.toLowerCase().includes(searchLower) ||
        request.duration.toLowerCase().includes(searchLower) ||
        request.salary.toString().includes(searchLower)
      );
    }

  }

  highlight(text: string): string {
    if (!this.searchText) return text;

    const regex = new RegExp(`(${this.searchText})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  }

  approveRequest(request: VacationRequest): void {
    request.approved = true;
  }

  declineRequest(request: VacationRequest): void {
    request.approved = false;
  }



}
