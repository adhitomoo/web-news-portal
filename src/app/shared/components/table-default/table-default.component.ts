import {Component, Input} from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {columnModel} from "./table-default.model";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {StatusPipe} from "../../pipe/status.pipe";

@Component({
  selector: 'table-default',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, NgFor, MatPaginatorModule, StatusPipe],
  templateUrl: './table-default.component.html',
  styleUrl: './table-default.component.scss'
})
export class TableDefaultComponent {
  private _columns: columnModel[] = [];
  private _rows: any[] = [];

  public defaultColumns!: string[];

  @Input()
  set columns(columns: columnModel[]) {
    this._columns = columns;
    this.defaultColumns = this.columns.map((col: columnModel) => { return col.prop })
  }
  get columns() {
    return this._columns;
  }

  @Input()
  set rows(rows: any[]) {
    this._rows = rows;
  }
  get rows() {
    return this._rows;
  }


}
