import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls:['./recaptcha.component.scss']
})
export class RecaptchaComponent implements OnInit {


  token: string|undefined;

  constructor() {
    this.token = undefined;
  }

  
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
  }

}
