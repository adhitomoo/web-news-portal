import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {CreateArticleComponent} from "./create-article/create-article.component";

import {PageDefaultComponent} from "../../../shared/components/page-default/page-default.component";
import {TableDefaultComponent} from "../../../shared/components/table-default/table-default.component";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, PageDefaultComponent, TableDefaultComponent, MatIconModule, CreateArticleComponent, MatDialogModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit{

  readonly dialog = inject(MatDialog);

  columns!: any[]
  rows!   : any[];

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.columns = [
      {prop: 'title', title: 'Title'},
      {prop: 'date', title: 'Created Date'},
      {prop: 'ads', title: 'Ads'},
      {prop: 'status', title: 'Status'},
    ]

    this.rows = [
      {
        title: 'Article 1',
        date: '2022-01-01',
        ads: 0,
        status: 'publish'
      },
      {
        title: 'Article 2',
        date: '2022-01-01',
        ads: 0,
        status: 'publish'
      }
    ]
  }

  public createArticle(): void {
    const modalRef = this.dialog.open(CreateArticleComponent);
    modalRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

}
