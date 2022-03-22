import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public calendar: Date = new Date();
  public items: MenuItem[] = [];

  constructor(
    private _dataService: DataService
  ) { }

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

  public sendRequest(): void {
    console.log(this.calendar);
    this._dataService.getDataFromUrl('https://api.github.com/search/users?q=alfredo').subscribe();
  }
}
