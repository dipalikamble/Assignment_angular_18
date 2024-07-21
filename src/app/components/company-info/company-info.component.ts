import { Component } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-company-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, RouterModule],

  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.css',
})
export class CompanyInfoComponent {
  imagePath = '';
  routingData: any;
  constructor(
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.routingData = params;
    });

    this.imagePath = 'assets/images/' + this.routingData.name + '.png';
  }
}
