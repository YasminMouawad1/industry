import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { SpinnerService } from 'projects/public/src/app/shared/services/endpoints/spinner.service';
import { UsersService } from 'projects/public/src/app/shared/services/endpoints/users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls:['./maintenance-list.component.scss']
})
export class MaintenanceListComponent implements OnInit {

 
  usersList: any[] = [];

  numberRows:number = 10;
  currentPage: number = 1;
  showTable :boolean = false; 

  newMaintenance!:FormGroup;
  editMaintenance!:FormGroup; 
  viewMaintenance:any[] = [];
  
  constructor(private _userService: UsersService ,private _spinnerService: SpinnerService) { }


 async ngOnInit() {
   this._spinnerService.requestStarted();
   await this._userService.getWaitingRiskApprovalList().then(res => {
     
      if(res.data != null)
        this.usersList = res.data ;
        this.showTable = this.usersList.length == 0 ?false : true;

        this._spinnerService.requestEnded();
      });

        this.newMaintenance = new FormGroup({
          id:new FormControl('',Validators.required),
          type:new FormControl('',Validators.required),
          name:new FormControl('',Validators.required),
          driver:new FormControl('',Validators.required),
          spareParts:new FormControl('',Validators.required),
          statusOrder:new FormControl('',Validators.required),
          paperOrder:new FormControl('',Validators.required)
        });

        this.editMaintenance = new FormGroup({
          id:new FormControl('',Validators.required),
          type:new FormControl('',Validators.required),
          name:new FormControl('',Validators.required),
          driver:new FormControl('',Validators.required),
          spareParts:new FormControl('',Validators.required),
          statusOrder:new FormControl('',Validators.required),
          paperOrder:new FormControl('',Validators.required)
        });
 

    }


    showMaintenance(user:any){
       console.log(user)
    }

    addMaintenance(){
      console.log(this.newMaintenance.value)
    }

    updateMaintenance(){
 
    }

    deleteMaintenance(Maintenance:any){

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
