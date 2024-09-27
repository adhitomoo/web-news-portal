import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageDefaultComponent} from "../../../shared/components/page-default/page-default.component";
import {columnModel} from "../../../shared/components/table-default/table-default.model";
import {TableDefaultComponent} from "../../../shared/components/table-default/table-default.component";

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [CommonModule, PageDefaultComponent, TableDefaultComponent],
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.scss'
})
export class PlatformComponent implements OnInit {
  columns!: columnModel[];
  rows!   : any[];

  ngOnInit() {
    this.columns = [
      {prop: 'name', title: 'Name'},
      {prop: 'description', title: 'Description'},
      {prop: 'status', title: 'Status'},
      {prop: 'action', title: 'Action'}
    ];
    this.rows = [
      {
        name: 'Platform 1',
        description: 'Platform 1 description',
        status: 'Active',
        action: ['edit', 'delete', 'view']
      },
      {
        name: 'Platform 2',
        description: 'Platform 2 description',
        status: 'Inactive',
        action: ['edit', 'delete', 'view']
      }
    ];
  }
}
