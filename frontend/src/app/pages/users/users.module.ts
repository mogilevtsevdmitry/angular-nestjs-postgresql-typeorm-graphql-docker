import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { IconModule } from '../../components/icon/icon.module'
import { UserComponent } from './user/user.component'
import { UsersComponent } from './users.component'
import { UserFormModule } from '../../components/user-form/user-form.module'


@NgModule({
  declarations: [ UsersComponent, UserComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: UsersComponent, children: [
          { path: ':id', component: UserComponent },
        ],
      },
    ]),
    IconModule,
    UserFormModule,
  ],
})
export class UsersModule {
}
