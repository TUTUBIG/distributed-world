import {Component, Input, OnInit} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-pagination',
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './pagination.component.html',
  standalone: true,
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {
  @Input() totalPages: number = 10;  // Total number of pages
  maxPageNumbersToShow: number = 5;
  pages: (number | string)[] = [];
  selectedPage: number = 1;

  ngOnInit() {
    this.updatePagination();
  }

  updatePagination() {
    this.pages = [];
    if (this.totalPages <= this.maxPageNumbersToShow) {
      // If the total number of pages is less than or equal to the max number to show, show all pages
      this.pages = Array.from({ length: this.totalPages }, (_, index) => index + 1);
    } else {
      // Show the first page
      this.pages.push(1);

      // Add ellipsis if there is a gap between the first and last page
      if (this.selectedPage > 3 && this.selectedPage < this.totalPages - 2) {
        this.pages.push('...');
      }

      // Show pages around the selected page
      const startPage = Math.max(this.selectedPage - 1, 2);  // Ensure at least page 1 is visible
      const endPage = Math.min(this.selectedPage + 1, this.totalPages - 1);  // Ensure the last page is visible

      for (let i = startPage; i <= endPage; i++) {
        this.pages.push(i);
      }

      // Add ellipsis if there is a gap between the last visible page and the total pages
      if (this.selectedPage < this.totalPages - 2) {
        this.pages.push('...');
      }

      // Show the last page
      this.pages.push(this.totalPages);
    }
  }

  selectPage(page: number | string) {
    if (page === '...') return;  // Don't do anything if the user clicks on the ellipsis
    this.selectedPage = page as number;
    this.updatePagination();  // Recalculate pagination when a page is selected
  }
}
