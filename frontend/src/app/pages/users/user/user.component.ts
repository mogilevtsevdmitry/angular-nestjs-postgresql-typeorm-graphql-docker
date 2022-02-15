import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { IUser } from '../../../interfaces'
import { UsersService } from '../users.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  imgSrc: string = 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'
  user$?: Observable<{ user: IUser, loading: boolean }>
  isChange: boolean = false

  constructor(
    private readonly usersService: UsersService,
    private readonly route: ActivatedRoute,
    private readonly cdr: ChangeDetectorRef,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      if (id) {
        this.user$ = this.usersService.getOneUser(id)
        this.cdr.detectChanges()
      }
    })
  }

  change() {
    this.isChange = !this.isChange
  }

  delete(id: number) {
    if (confirm('Удалить пользователя?')) {
      this.usersService.deleteUser(id).subscribe(_ => {
        this.router.navigate(['/users'])
      })
    }
  }

  onSubmit(user: IUser) {
    const {name, email, id} = user
    this.usersService.updateUser(id, name, email).subscribe(user => {
      if (user) {
        this.change()
        // this.router.navigate(['/users', user.id])
      }
    })
  }
}
