import { Component } from '@angular/core';
import DataTable from 'datatables.net-dt';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent {
  public data = [
    {
      name: 'Ajay',
      email: 'therichpost@gmail.com',
      website: 'therichpost.com',
    },
    { name: 'Jas', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    {
      name: 'therichpost',
      email: 'therichpost@gmail.com',
      website: 'therichpost.com',
    },
    {
      name: 'therichpost',
      email: 'therichpost@gmail.com',
      website: 'therichpost.com',
    },
    { name: 'Jas', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    {
      name: 'therichpost',
      email: 'therichpost@gmail.com',
      website: 'therichpost.com',
    },
    {
      name: 'therichpost',
      email: 'therichpost@gmail.com',
      website: 'therichpost.com',
    },
    { name: 'Jas', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    {
      name: 'therichpost',
      email: 'therichpost@gmail.com',
      website: 'therichpost.com',
    },
    {
      name: 'therichpost',
      email: 'therichpost@gmail.com',
      website: 'therichpost.com',
    },
  ];
  dtOptions: any = {};
  ngOnInit() {
    setTimeout(() => {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu: [5, 10, 25],
        processing: true,
      };
    }, 100);
  }
}
