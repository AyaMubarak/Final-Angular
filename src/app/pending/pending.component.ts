import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pending',
  standalone: true,
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css'] ,imports:[CommonModule]
})
export class PendingComponent {
  vacationRequests = [
    {
      name: 'Ahmad Attar',
      submissionDate: '1/3/2024',
      duration: '2 Weeks',
      startDate: '1/4/2023',
      endDate: '14/4/2023',
      currentlyAt: 'Omar Ahmad'
    },
    {
      name: 'Ahmad Attar',
      submissionDate: '2/10/2024',
      duration: '3 days',
      startDate: '2/10/2024',
      endDate: '5/10/2024',
      currentlyAt: 'Yara Yousef'
    },

  ];
}
