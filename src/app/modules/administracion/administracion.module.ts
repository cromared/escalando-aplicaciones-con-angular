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
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [AdministracionComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    GroupService,
    AdminService
  ]
})
export class AdministracionModule { }
