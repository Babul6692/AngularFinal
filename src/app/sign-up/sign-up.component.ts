import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder, private httpclient: HttpClient) { }

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      // firstName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      //   confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      //   acceptTerms: [false, Validators.requiredTrue]
    });
  }

  // passwordMatchValidator(formGroup: FormGroup) {
  //   const password = formGroup.get('password').value;
  //   const confirmPassword = formGroup.get('confirmPassword').value;

  //   return password === confirmPassword ? null : { mismatch: true };
  // }

  url = "http://localhost:8080/"
  onclick= false
  temp: any="hello"
  data: any
  onSubmit() {
    // if (this.reactiveForm.valid){
    console.log(this.reactiveForm.value);
    this.data = this.reactiveForm.value
    this.httpclient.post(this.url + "addUser", this.data).subscribe({
      next:(res)=> {
        console.log(res)
        // this.temp = res
        this.onclick = true
      },
      error:(err)=> {
        console.error(err)
      }
    })
    // }
    // console.log("this is form temp " + this.temp)
  }
}
