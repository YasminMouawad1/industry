import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { SpinnerService } from 'projects/public/src/app/shared/services/endpoints/spinner.service';
import { UsersService } from 'projects/public/src/app/shared/services/endpoints/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls:['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

 
  usersList: any[] = [];

  numberRows:number = 10;
  currentPage: number = 1;
  showTable :boolean = false; 

  newVehicle!:FormGroup;
  editVehicle!:FormGroup; 
  viewVehicle:any[] = [];
  
  constructor(private _userService: UsersService ,private _spinnerService: SpinnerService) { }


 async ngOnInit() {
   this._spinnerService.requestStarted();
   await this._userService.getWaitingRiskApprovalList().then(res => {
     
      if(res.data != null)
        this.usersList = res.data ;
        this.showTable = this.usersList.length == 0 ?false : true;

        this._spinnerService.requestEnded();
      });

        this.newVehicle = new FormGroup({
          id:new FormControl('',Validators.required),
          type:new FormControl('',Validators.required),
          empName:new FormControl('',Validators.required) 
        });

        this.editVehicle = new FormGroup({
          id:new FormControl('',Validators.required),
          type:new FormControl('',Validators.required),
          empName:new FormControl('',Validators.required) 
        });
 

    }


    showVehicle(user:any){
       console.log(user)
    }

    addVehicle(){
      console.log(this.newVehicle.value)
    }

    updateVehicle(){
 
    }

    deleteVehicle(vehicle:any){

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
