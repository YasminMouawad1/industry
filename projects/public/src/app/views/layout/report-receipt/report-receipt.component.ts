import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-report-receipt',
  templateUrl: './report-receipt.component.html',
  styleUrls:['./report-receipt.component.scss']
})
export class ReportReceiptComponent implements OnInit {

  token: string|undefined;   


  constructor() { }

  ngOnInit(): void {
     
  }

  public send(form: NgForm): void {
    

    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
    console.debug(`Token [${this.token}] generated`);
    console.log(form.value)

    
  }

}
