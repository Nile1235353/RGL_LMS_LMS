import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface TableRow {
  selected: boolean;
  ID: number;
  name: string;
  NRC: string;
  phone: string;
  employee_no: number;
  department: string;
  position: string;
  user_role:string;
}

@Component({
  selector: 'app-userlist',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
    rowsPerPage = 10;
    currentPage = 1;

    // Sample data (replace with your actual data)
    tableRows: TableRow[] = [
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
      {
        ID: 1, name: 'Nile Nile Wai', NRC: '8/Ta Ta Ka (N) 274036', phone: '09765635868', employee_no: 1, department: '', position: 'Assistant Supervisor', user_role: 'Yangon',
        selected: false
      },
    ];

    selectAllChecked: any;
    items: any;



    toggleCheckbox(index: number, event: Event): void {
      const checked = (event.target as HTMLInputElement).checked;
      this.tableRows[index].selected = checked;
    }

    toggleAllCheckboxes(event: Event): void {
      const checked = (event.target as HTMLInputElement).checked;
      this.tableRows.forEach(row => row.selected = checked);
    }

    isAllSelected(): boolean {
      return this.tableRows.every(row => row.selected);
    }





    get totalPages(): number {
      return Math.ceil(this.tableRows.length / this.rowsPerPage);
    }

    get paginatedRows(): TableRow[] {
      const start = (this.currentPage - 1) * this.rowsPerPage;
      return this.tableRows.slice(start, start + this.rowsPerPage);
    }

    goToPage(page: number): void {
      if(page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }

    previousPage(): void {
      if(this.currentPage > 1) {
        this.currentPage--;
      }
    }

    nextPage(): void {
      if(this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
}
