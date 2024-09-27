import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'page-default',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-default.component.html',
  styleUrl: './page-default.component.scss'
})
export class PageDefaultComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
