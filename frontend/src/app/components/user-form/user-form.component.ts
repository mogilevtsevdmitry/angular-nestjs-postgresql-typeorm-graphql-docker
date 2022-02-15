import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { IUser } from '../../interfaces'

@Component({
  selector: 'app-user-form',
  template: `
    <form [formGroup]="form" style="max-width: 20rem">
      <div class="mb-3">
        <label for="name" class="form-label">Имя</label>
        <input type="text" id="name" class="form-control" formControlName="name">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" class="form-control" formControlName="email">
      </div>
      <input type="number" [value]="user?.id" hidden>
      <button
        class="btn btn-primary"
        (click)="submit()"
        [disabled]="form.invalid"
      >
        {{ btnTitle }}
      </button>
    </form>
  `,
})
export class UserFormComponent implements OnInit {
  @Input('user') user: IUser | null = null
  @Output() onSubmit: EventEmitter<IUser> = new EventEmitter<IUser>()
  form: FormGroup = new FormGroup({})
  btnTitle?: string

  ngOnInit() {
    this.btnTitle = this.user ? 'Редактировать' : 'Создать'
    this.form = new FormGroup({
      name: new FormControl(this.user?.name ?? '', [ Validators.required ]),
      email: new FormControl(this.user?.email ?? '', [ Validators.required, Validators.email ]),
    })
  }

  submit() {
    this.onSubmit.emit({
      ...this.form.value,
      id: this.user?.id,
    })
  }
}
