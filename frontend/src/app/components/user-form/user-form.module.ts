import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserFormComponent } from './user-form.component'
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [ UserFormComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [ UserFormComponent ],
})
export class UserFormModule {
}
