import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { AdministracionComponent } from './administracion.component';
import { GroupService } from '../login/group.service';
import { MatListModule } from '@angular/material/list';
import { AdminService } from './admin.service';

@NgModule({
  declarations: [AdministracionComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule
  ],
  providers: [
    GroupService,
    AdminService
  ]
})
export class AdministracionModule { }
