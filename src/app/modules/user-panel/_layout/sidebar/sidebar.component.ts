import { Component, Input } from '@angular/core';

interface INavItem {
  name: string;
  routerLink: string;
  icon: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input()
  mobileQueryMatches: boolean = false;

  navItems: INavItem[] = [
    {
      name: 'Dashboard',
      icon: 'home',
      routerLink: '/',
    },
    {
      name: 'Accounts',
      icon: 'account_balance_wallet',
      routerLink: '/',
    },
    {
      name: 'Recent Transactions',
      icon: 'trending_up',
      routerLink: '/',
    },
    {
      name: 'Charges',
      icon: 'attach_money',
      routerLink: '/',
    },
    {
      name: 'Transfers',
      icon: 'attach_money',
      routerLink: '/',
    },
    {
      name: 'Third Party Transfer',
      icon: 'attach_money',
      routerLink: '/',
    },
    {
      name: 'Beneficiaries',
      icon: 'people_alt',
      routerLink: '/',
    },
    {
      name: 'Reports',
      icon: 'ballot',
      routerLink: '/',
    },
    {
      name: 'Apply For Loan',
      icon: 'assignment',
      routerLink: '/',
    },
    {
      name: 'Apply For Savings',
      icon: 'assignment',
      routerLink: '/',
    },
    {
      name: 'Apply For Shares',
      icon: 'assignment',
      routerLink: '/',
    },
    {
      name: 'About Us',
      icon: 'info',
      routerLink: '/',
    },
    {
      name: 'Help',
      icon: 'help',
      routerLink: '/',
    },
  ];
}
