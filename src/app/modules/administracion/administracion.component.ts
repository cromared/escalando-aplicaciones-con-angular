import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupService } from '../login/group.service';
import { FilterActivesPipe } from '../core/filter-actives.pipe';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {
  groups = [];
  users = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groupService: GroupService,
    private filterActives: FilterActivesPipe,
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {groups: []}) => {
      this.groups = this.filterActives
      .transform(data.groups);
    });
  }

}
