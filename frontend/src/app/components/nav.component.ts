import { Component } from '@angular/core'
import { IMenu } from '../interfaces'

@Component({
  selector: 'app-nav',
  template: `
    <ul class="nav nav-pills mb-3">
      <li class="nav-item" *ngFor="let m of menu">
        <a
          class="nav-link"
          [routerLink]="m.href"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact: true}"
        >
          <app-icon [icon]="m.icon"></app-icon>
          {{ m.title }}
        </a>
      </li>
    </ul>
  `,
})
export class NavComponent {
  menu?: IMenu[]

  constructor() {
    this.menu = [
      { id: 1, title: 'Главная', href: '/' },
      { id: 2, title: 'Пользователи', href: '/users', icon: 'bi bi-people' },
    ]
  }

}
