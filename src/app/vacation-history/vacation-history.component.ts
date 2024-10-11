import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacation-history',
  templateUrl: './vacation-history.component.html',standalone: true,
  styleUrls: ['./vacation-history.component.css']
  ,imports:[CommonModule]
})
export class VacationHistoryComponent implements OnInit {
  employee: any;
  vacationHistory = [
    { title:"Annual Vacation" ,name: 'Ahmad Attar', startDate: '01/04/2023', endDate: '14/04/2023', duration: 14, status: 'Approved' },
    {title:"Sick Vacation" , name: 'Sara Al-Mansour', startDate: '15/05/2023', endDate: '28/05/2023', duration: 14, status: 'Approved' },
    { title:"Annual Vacation" ,name: 'Hazem Azmi', startDate: '10/03/2023', endDate: '20/03/2023', duration: 10, status: 'Declined' },
    { title:"Non Paid Vacation" ,name: 'Yara Lafi', startDate: '2/09/2023', endDate: '12/09/2023', duration: 10, status: 'Declined' },
    { title:"Non paid Vacation" ,name: 'Yamen Yaser', startDate: '20/12/2023', endDate: '30/12/2023', duration: 10, status: 'Declined' },
    { title:"Sick Vacation" ,name: 'Laith Assam', startDate: '1/07/2023', endDate: '10/07/2023', duration: 10, status: 'Declined' },
    { title:"Annual Vacation" ,name: 'Adnan Hamed', startDate: '18/11/2023', endDate: '28/11/2023', duration: 10, status: 'Declined' },


  ];

  ngOnInit(): void {

  }
}

