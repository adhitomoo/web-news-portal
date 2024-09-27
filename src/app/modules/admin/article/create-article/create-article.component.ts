import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
  MatDialogContainer,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions
} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {QuillEditorComponent} from "ngx-quill";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDialogModule, MatInputModule, QuillEditorComponent, ReactiveFormsModule, MatCheckboxModule],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.scss',

})
export class CreateArticleComponent {
  readonly dialogRef = inject(MatDialogRef<CreateArticleComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  private formBuilder = inject<any>(FormBuilder);

  formArticle: FormGroup = new FormGroup<any>({});
  constructor(
  ) {
    this.initForm();
  }

  public initForm(): void {
    this.formArticle = this.formBuilder.group({
      title: '',
      content: '',
      category: '',
      tags: '',
      published: false
    })
  }

  close() {
    this.dialogRef.close();
  }
}
