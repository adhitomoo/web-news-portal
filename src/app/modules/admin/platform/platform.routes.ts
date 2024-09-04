import { Routes } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import {PlatformComponent} from "./platform.component";

export default [
  {
    path     : '',
    component: PlatformComponent,
  },
] as Routes;
