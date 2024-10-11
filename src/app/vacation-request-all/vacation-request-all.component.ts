import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '../pagination/pagination.component';

interface VacationRequestAll {
  employeePicture: string;
  employeeName: string;
  submittedOn: string;
  duration: string;
  salary: number;
  approved: boolean;
}

@Component({
  selector: 'app-vacation-request-all',
  standalone: true,
  templateUrl: './vacation-request-all.component.html',
  styleUrls: ['./vacation-request-all.component.css'],
  imports: [FormsModule, CommonModule, PaginationComponent],
})
export class VacationRequestAllComponent implements OnInit {
  approveRequest(request: any) {

    request.approved = true;

    console.log(`Request approved: ${request}`);
  }
  searchText: string = '';
  searchRequests: any[] = [];
  vacationRequests: VacationRequestAll[] = [
    { employeeName: 'Lily Evans', submittedOn: '7/7/2024', duration: '2 Weeks (8/7/2024 - 22/7/2024)', salary:1000 , approved: true, employeePicture: "/images/download (2).jpg" },
    { employeeName: 'James Potter', submittedOn: '6/6/2024', duration: '1 Week (10/6/2024 - 17/6/2024)', salary: 900, approved: false, employeePicture: "/images/download (1).jpg" },
    { employeeName: 'Severus Snape', submittedOn: '1/8/2024', duration: '3 Days (12/8/2024 - 14/8/2024)', salary: 1300, approved: false, employeePicture: "/images/download (3).jpg" },
    { employeeName: 'Minerva McGonagall', submittedOn: '2/7/2024', duration: '4 Days (15/7/2024 - 18/7/2024)', salary: 2500, approved: true, employeePicture: "/images/download (4).jpg" },
    { employeeName: 'Albus Dumbledore', submittedOn: '3/4/2024', duration: '5 Days (20/4/2024 - 25/4/2024)', salary: 3000, approved: true, employeePicture: "/images/download (5).jpg" },
    { employeeName: 'Sara Black', submittedOn: '1/9/2024', duration: '2 Days (15/9/2024 - 17/9/2024)', salary: 1400, approved: false, employeePicture: "/images/download (6).jpg" },
    { employeeName: 'Remus Lupin', submittedOn: '4/10/2024', duration: '1 Week (7/10/2024 - 14/10/2024)', salary: 1600, approved: true, employeePicture: "/images/download (7).jpg" },
    { employeeName: 'Peter Pettigrew', submittedOn: '2/5/2024', duration: '4 Days (15/5/2024 - 19/5/2024)', salary: 700, approved: false, employeePicture: "/images/images (3).jpg" },
    { employeeName: 'Bellatrix Lestrange', submittedOn: '5/6/2024', duration: '6 Days (22/6/2024 - 28/6/2024)', salary: 1700, approved: true, employeePicture: "/images/images (1).jpg" },
    { employeeName: 'Lucius Malfoy', submittedOn: '3/11/2024', duration: '5 Days (8/11/2024 - 13/11/2024)', salary: 2700, approved: false, employeePicture: "/images/images (2).jpg" },
    { employeeName: 'Narcissa Malfoy', submittedOn: '7/8/2024', duration: '3 Days (15/8/2024 - 18/8/2024)', salary: 1600, approved: true, employeePicture: "/images/download (8).jpg" },
    { employeeName: 'Draco Malfoy', submittedOn: '4/9/2024', duration: '2 Weeks (5/9/2024 - 19/9/2024)', salary: 1200, approved: true, employeePicture: "/images/images (6).jpg" },
    { employeeName: 'Hermione Granger', submittedOn: '6/7/2024', duration: '4 Days (10/7/2024 - 14/7/2024)', salary: 2000, approved: true, employeePicture: "/images/images (7).jpg" },
    { employeeName: 'Ron Weasley', submittedOn: '3/6/2024', duration: '1 Week (15/6/2024 - 22/6/2024)', salary: 1500, approved: false, employeePicture: "/images/images (4).jpg" },
    { employeeName: 'Ginny Weasley', submittedOn: '2/8/2024', duration: '5 Days (20/8/2024 - 25/8/2024)', salary: 1800, approved: true, employeePicture: "/images/images (5).jpg" },
    { employeeName: 'Fred Weasley', submittedOn: '1/5/2024', duration: '6 Days (12/5/2024 - 18/5/2024)', salary: 900, approved: false, employeePicture: "/images/images (9).jpg" },
    { employeeName: 'George Weasley', submittedOn: '3/12/2024', duration: '4 Days (10/12/2024 - 14/12/2024)', salary: 950, approved: true, employeePicture: "/images/images (10).jpg" },
    { employeeName: 'Neville Longbottom', submittedOn: '6/1/2024', duration: '1 Week (15/1/2024 - 22/1/2024)', salary: 1100, approved: true, employeePicture: "/images/images (11).jpg" },
    { employeeName: 'Luna Lovegood', submittedOn: '4/11/2024', duration: '2 Days (5/11/2024 - 7/11/2024)', salary: 1250, approved: false, employeePicture: "/images/images (13).jpg" },
    { employeeName: 'Cho Chang', submittedOn: '5/5/2024', duration: '3 Days (8/5/2024 - 11/5/2024)', salary: 1300, approved: true, employeePicture: "/images/images (12).jpg" },
    { employeeName: 'Cedric Diggory', submittedOn: '2/7/2024', duration: '1 Week (7/7/2024 - 14/7/2024)', salary: 1400, approved: true, employeePicture: "/images/images (14).jpg" },
    { employeeName: 'Filius Flitwick', submittedOn: '3/10/2024', duration: '5 Days (15/10/2024 - 20/10/2024)', salary: 2200, approved: false, employeePicture: "/images/images (15).jpg" },
    { employeeName: 'Rubeus Hagrid', submittedOn: '6/2/2024', duration: '6 Days (25/2/2024 - 1/3/2024)', salary: 1350, approved: true, employeePicture: "/images/images (16).jpg" },
    { employeeName: 'Dolores Umbridge', submittedOn: '3/3/2024', duration: '4 Days (6/3/2024 - 10/3/2024)', salary: 2800, approved: false, employeePicture: "/images/images (17).jpg" },
    { employeeName: 'Cornelius Fudge', submittedOn: '2/4/2024', duration: '5 Days (20/4/2024 - 25/4/2024)', salary: 2500, approved: false, employeePicture: "/images/images (18).jpg" },
    { employeeName: 'Kingsley Shacklebolt', submittedOn: '7/6/2024', duration: '2 Weeks (8/6/2024 - 22/6/2024)', salary: 1700, approved: true, employeePicture: "/images/images (19).jpg" },
    { employeeName: 'Arthur Weasley', submittedOn: '4/8/2024', duration: '3 Days (10/8/2024 - 13/8/2024)', salary: 1600, approved: false, employeePicture: "/images/images (20).jpg" },
    { employeeName: 'Molly Weasley', submittedOn: '6/9/2024', duration: '1 Week (12/9/2024 - 19/9/2024)', salary: 1300, approved: true, employeePicture: "/images/images (21).jpg" },
    { employeeName: 'Percy Weasley', submittedOn: '5/5/2024', duration: '5 Days (10/5/2024 - 15/5/2024)', salary: 900, approved: false, employeePicture: "/images/images (22).jpg" },
    { employeeName: 'Alastor Moody', submittedOn: '3/7/2024', duration: '2 Days (8/7/2024 - 10/7/2024)', salary: 2000, approved: true, employeePicture: "/images/images (23).jpg" },
  ];

  currentPage: number = 1;
  itemsPerPage: number = 5;

  ngOnInit(): void {
    this.searchRequests;
  }

  get filteredRequests() {
    return this.vacationRequests.filter(req =>
      req.employeeName.toLowerCase().includes(this.searchText.toLowerCase()) ||
      req.duration.toLowerCase().includes(this.searchText.toLowerCase()) ||
      req.salary.toString().includes(this.searchText)
    );
  }

  get paginatedRequests() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredRequests.slice(start, start + this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  declineRequest(request: any) {

    request.approved = false;

    console.log(`Request declined: ${request}`);
  }


  highlight(text: string): string {
    
    const regex = new RegExp(this.searchText, 'gi');
    return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
  }
}
