import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './modules/login';
import { AdministracionModule } from './modules/administracion/administracion.module';

import { PageNotFoundComponent } from './modules/core';
import { LoginComponent, AuthGuard } from './modules/login';
import { AdministracionComponent } from './modules/administracion/administracion.component';
import { ResolverService } from './modules/login/resolver.service';


const routes: Routes = [
  {
    path: 'admin',
    component: AdministracionComponent,
    resolve: {
      groups: ResolverService
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    resolve: {
      groups: ResolverService
    }
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterModule'
  },
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule,
    AdministracionModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
