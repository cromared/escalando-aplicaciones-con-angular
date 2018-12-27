import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupService } from '../login/group.service';
import { FilterActivesPipe } from '../core/filter-actives.pipe';
import { UserModel } from './user.model';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {
  @ViewChild('userForm')
  userForm: NgForm;
  formModel: UserModel;
  groups = [];
  users = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
    private groupService: GroupService,
    private filterActives: FilterActivesPipe,
  ) {
    this.formModel = new UserModel({
      email: this.route.snapshot.queryParams.email,
      group: ''
    });
   }

  ngOnInit() {
    this.route.data.subscribe((data: {groups: []}) => {
      this.groups = this.filterActives
      .transform(data.groups);
    });
  }

  submit() {
    if (this.userForm.valid) {      
      this.users.push(this.userForm.value)
      this.adminService.createUser(this.userForm.value)
      .subscribe(() => {        
      }, (reason) => {
        alert(JSON.stringify(reason));
      }
      );
    }
  }

}
