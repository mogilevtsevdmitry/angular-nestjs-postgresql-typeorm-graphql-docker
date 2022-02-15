import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-icon',
  template: `
    <ng-template [ngIf]="icon">
      <i class="{{ icon }}"></i>
    </ng-template>
  `,
})
export class IconComponent {
  @Input('icon') icon?: string
}
