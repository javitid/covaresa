import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        items: [
          {label: 'New', icon: 'pi pi-fw pi-plus'},
          {label: 'Open', icon: 'pi pi-fw pi-download'},
          {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
        ],
      },
      {
        label: 'Edit',
        items: [
          { label: 'Undo', icon: PrimeIcons.REFRESH },
          { label: 'Redo', icon: PrimeIcons.AMAZON },
        ],
      },
    ];
  }
}
