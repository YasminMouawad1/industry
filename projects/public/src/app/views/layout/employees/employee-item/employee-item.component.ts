import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'projects/public/src/app/shared/services/endpoints/users.service';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls:['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {

  userItem!: any; 
  userId!: string;


  constructor( private _userService: UsersService ,private route: ActivatedRoute ) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe((params) => (this.userId = params['id']));

    await this._userService.getUserById(this.userId).then((res) => {

               

      this.userItem = res.data;

    });
  }

}
