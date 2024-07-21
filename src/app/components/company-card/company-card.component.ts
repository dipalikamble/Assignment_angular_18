import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
  input,
  model,
} from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.css',
})
export class CompanyCardComponent {
  @Input() companyinfo: any;
  // companyinfo= input.required() // can use with angular 17.2 and onwards
  route = inject(Router);
 
}
