import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  template: `
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item" [class.disabled]="currentPage === 1">
          <a class="page-link previous-next" (click)="changePage(currentPage - 1)">Previous</a>
        </li>
        <li
          class="page-item"
          *ngFor="let page of pages"
          [class.active]="page === currentPage"
        >
          <a class="page-link number-link" (click)="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" [class.disabled]="currentPage === totalPages">
          <a class="page-link previous-next" (click)="changePage(currentPage + 1)">Next</a>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    .pagination {
      justify-content: center;
    }
    .pagination .previous-next {
      color: white;
      background-color: green;
      border: 1px solid green;
    }
    .pagination .number-link {
      color: green;
      background-color: white;
      border: 1px solid green;
    }
    .pagination .page-item.active .number-link {
      background-color: green;
      color: white;
      border-color: green;
    }
    .pagination .page-item.disabled .page-link {
      color: grey;
      background-color: lightgrey;
      border-color: lightgrey; 
    }
  `],
  standalone: true,
  imports: [CommonModule]
})
export class PaginationComponent {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  get totalPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.pageChange.emit(page);
  }
}
