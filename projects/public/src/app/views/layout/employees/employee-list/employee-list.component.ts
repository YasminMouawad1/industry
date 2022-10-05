import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { SpinnerService } from 'projects/public/src/app/shared/services/endpoints/spinner.service';
import { UsersService } from 'projects/public/src/app/shared/services/endpoints/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls:['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  usersList: any[] = [];

  numberRows:number = 10;
  currentPage: number = 1;
  showTable :boolean = false; 

  newEmployee!:FormGroup;
  editEmployee!:FormGroup;
  
  constructor(private _userService: UsersService , private _sanitizer: DomSanitizer,private _spinnerService: SpinnerService) { }


 async ngOnInit() {
   this._spinnerService.requestStarted();
   await this._userService.getWaitingRiskApprovalList().then(res => {
     
      if(res.data != null)
        this.usersList = res.data ;
        this.showTable = this.usersList.length == 0 ?false : true;

        this._spinnerService.requestEnded();
      });

        this.newEmployee = new FormGroup({
          name:new FormControl('',Validators.required),
          phone:new FormControl('',Validators.required),
          address:new FormControl('',Validators.required),
          jobTitle:new FormControl('',Validators.required)
        });

        this.editEmployee = new FormGroup({
          name:new FormControl('',Validators.required),
          phone:new FormControl('',Validators.required),
          address:new FormControl('',Validators.required),
          jobTitle:new FormControl('',Validators.required)
        });

    }


    addEmployee(){
      console.log(this.newEmployee.value)
    }

    updateEmployee(){
 
    }

    deleteEmployee(employee:any){

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

    }



}
