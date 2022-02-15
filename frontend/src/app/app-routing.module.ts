import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) },
  { path: '**', redirectTo: '/' },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  }) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
