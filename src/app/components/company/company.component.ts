
import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { AppConstant } from '../../constants/constants';
import { CompanyInformation } from '../../interfaces/companyinfo';
import { CompanyCardComponent } from '../company-card/company-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [RouterOutlet, CompanyCardComponent, CommonModule],  
  templateUrl: './company.component.html',
  styleUrl: './company.component.css' 
})
export class CompanyComponent {
 Constant = AppConstant
 constructor(private router:Router){}
 companyInfoList: CompanyInformation[] = [ 
  {
    company:'Google',
    name: 'google',
    founders: 'Larry Page, Sergey Brin',
    headquarters: 'Mountain View, California, United States',
    ceo:'Sundar Pichai' ,
    employees: '182,502',
    income: '23.66 billion U.S. dollars',
    info: this.Constant.GOOGLE_INFO, 
    tagline:"Don't be evil",
  },
  {
    company:'Microsoft',
    name: 'microsoft',
    founders: 'Bill Gates, Paul Allen',
    headquarters: ' Redmond, Washington, United States',
    ceo:' Satya Nadella ' ,
    employees: '2,21,000',
    income: '7,340 crores USD',
    info: this.Constant.MICROSOFT_INFO , 
    tagline:'Empowering us all',
  },
  {
    company:'Apple',
    name: 'apple',
    founders: 'Steve Jobs, Steve Wozniak, Ronald Wayne',
    headquarters: 'Cupertino, California, United States',
    ceo:'Tim Cook' ,
    employees: '161,000',
    income: '224.31 USD',
    info: this.Constant.APPLE_INFO, 
    tagline:'Think Different',
  },
  {
    company:'IBM',
    name: 'IBM',
    founders: ' Herman Hollerith, George Winthrop Fairchild, Thomas J. Watson, Charles Ranlett Flint',
    headquarters: 'Armonk, New York, United States',
    ceo:' Arvind Krishna ' ,
    employees: '282,200',
    income: '750.2 crores USD',
    info: this.Constant.IBM_INFO, 
    tagline:'THINK',
  },
]

}
